import dbConnect from '@/libs/connectdb'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const conn = await dbConnect();
    
        if (conn) {
          console.log('Connected to MongoDB successfully!');
         return NextResponse.json({ message: 'Success! Connected to MongoDB.' });
        } else {
          throw new Error('Failed to connect to MongoDB.');
        }
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return NextResponse.json({ message: 'Error: Failed to connect to MongoDB.', error: error });
      }
    }