import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../mongoose';
import Wish, { IWish } from '../Model/Model';
import cloudinary from '../cloudinary';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Adjust as needed
    },
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const { name, text, images } = req.body;
      if (!name || !text || !images || images.length !== 3) {
        return res.status(400).json({ message: 'Name, text, and exactly 3 images are required' });
      }

      // Upload images to Cloudinary
      const imageUrls = await Promise.all(images.map(async (image: string) => {
        const result = await cloudinary.uploader.upload(image, {
          folder: 'birthday-wishes',
        });
        return result.secure_url;
      }));

      const newWish = new Wish({ name, text, images: imageUrls });
      await newWish.save();
      return res.status(201).json(newWish);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: 'An unknown error occurred' });
    }
  } else if (req.method === 'GET') {
    try {
      const wishes = await Wish.find({});
      return res.status(200).json(wishes);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: 'An unknown error occurred' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
