const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const fs = require('fs');
const path = require('path');

const client = new Client();

// Ensure 'uploads' folder exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    // Define the file path within the 'uploads' directory
    const filePath = path.join(uploadsDir, 'qr.png');
    
    // Generate and save QR code as a PNG image in the 'uploads' folder
    qrcode.toFile(filePath, qr, function (err) {
        if (err) throw err;
        console.log(`QR code saved as ${filePath}`);
    });
});

client.initialize();
