import { Readable } from 'stream';

import cloudinary from '../database/cloudinary.js';

const uploadToCloudinary = async (pdfBuffer, orderId) => {
    try {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    resource_type: 'auto', // MUST be 'raw' for PDF files
                    folder: 'gate_passes',
                    public_id: `gatepass_${orderId}_${Date.now()}`,
                    format: 'pdf',
                    access_mode: 'public',
                    flags: 'attachment'
                },
                (error, result) => {
                    if (result) resolve(result.secure_url); // Returns the URL for your DB
                    else reject(error);
                }
            );
        
            // Convert Buffer to Readable Stream
            const stream = new Readable();
            stream.push(pdfBuffer);
            stream.push(null); // Indicates end of stream
            
            // Pipe the stream to Cloudinary
            stream.pipe(uploadStream);
        });
    } catch (err) {
        console.error(err);
    }
}

export default uploadToCloudinary;