const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode'); // Use the 'qrcode' library for image generation
const fs = require('fs');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    // Generate and save QR code as a PNG image
    qrcode.toFile('whatsapp-qr.png', qr, function (err) {
        if (err) throw err;
        console.log('QR code saved as whatsapp-qr.png');
    });
});

client.initialize();
