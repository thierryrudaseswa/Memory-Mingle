import { NextRequest, NextResponse } from "next/server";
import { IncomingForm, File } from "formidable";
import connectDB from "../../../../config/database";
import Wish from "../Model/Model";
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import { Readable } from 'stream';

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Helper function to convert NextRequest body to a stream
async function toNodeReadable(request: NextRequest): Promise<Readable> {
  const stream = new Readable();
  stream._read = () => {};
  stream.push(Buffer.from(await request.arrayBuffer()));
  stream.push(null);
  return stream;
}

export async function POST(request: NextRequest) {
    try {
        const form = new IncomingForm({ multiples: true });
        const reqStream = await toNodeReadable(request);

        const data = await new Promise<{ fields: any, files: any }>((resolve, reject) => {
            form.parse(reqStream as any, (err: any, fields: any, files: any) => {
                if (err) reject(err);
                resolve({ fields, files });
            });
        });

        const { fields, files } = data;
        const { name, text } = fields;
        const imageFiles = Array.isArray(files.images) ? files.images : [files.images]; // Handle multiple or single file

        // Connect to the database
        await connectDB();

        // Upload images to Cloudinary
        const uploadedImages = await Promise.all(
            imageFiles.map(async (file: File) => {
                const path = file.filepath;
                const result = await cloudinary.uploader.upload(path, {
                    folder: "wishes",
                });
                fs.unlinkSync(path); // Delete the local file after upload
                return result.secure_url;
            })
        );

        // Create a new Wish document
        await Wish.create({ name, text, images: uploadedImages });

        return NextResponse.json({ message: "Wish Created" }, { status: 201 });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error creating wish:", error.message);
            return NextResponse.json({ message: "Error creating wish", error: error.message }, { status: 500 });
        } else {
            console.error("Unexpected error:", error);
            return NextResponse.json({ message: "Unexpected error occurred" }, { status: 500 });
        }
    }
}
