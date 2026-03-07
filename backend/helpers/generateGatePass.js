import PDFDocument from 'pdfkit';

const generateGatePass = async (shipmentData) => {
    try {
        return new Promise((resolve, reject) => {
            const doc = new PDFDocument({ margin: 50 });
            let buffers = [];

            // Collect the data chunks into an array
            doc.on('data', buffers.push.bind(buffers));
            doc.on('end', () => {
                const pdfData = Buffer.concat(buffers);
                resolve(pdfData);
            });
            doc.on('error', (err) => reject(err));

            // --- GATE PASS DESIGN ---
            // Header
            doc.fontSize(20).text('GATE PASS - BRICK PORTAL', { align: 'center' });
            doc.moveDown();
            doc.rect(50, 100, 500, 2).fill('#333'); // Divider line

            doc.moveDown(2);
            doc.fontSize(12).text(`Date: ${new Date().toLocaleDateString()}`);
            doc.text(`Order ID: ${shipmentData.orderId}`);
            doc.text(`Vehicle Number: ${shipmentData.vehicleNo.toUpperCase()}`);

            doc.moveDown();
            doc.fontSize(14).text('Shipment Details', { underline: true });
            doc.fontSize(12).text(`Customer: ${shipmentData.customer || 'N/A'}`);

            // Items Table-like structure
            doc.moveDown();
            doc.text('Items List:');
            shipmentData.items?.forEach((item, index) => {
                doc.text(`${index + 1}. ${item.name} - Qty: ${item.quantity}`);
            });

            // Footer / Signature Area
            doc.moveDown(4);
            doc.text('__________________________', { align: 'right' });
            doc.text('Authorized Supervisor Signature', { align: 'right' });

            // Finalize the PDF
            doc.end();
        });
    } catch (err) {
        console.error(err);
    }
}

export default generateGatePass;