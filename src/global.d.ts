// src/global.d.ts
interface Window {
  loadFireworks: (container: HTMLElement) => void;
}

import { Mongoose } from 'mongoose';

declare global {
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}
declare module 'cloudinary' {
  export const v2: any;
}