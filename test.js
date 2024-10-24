const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode'); // Use 'qrcode' instead of 'qrcode-terminal'

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    // Generate the QR code in terminal-friendly ASCII format
    qrcode.toString(qr, { type: 'terminal' }, function (err, url) {
        if (err) {
            console.error('Failed to generate QR code:', err);
        } else {
            console.log(url); // Display QR code in the terminal
        }
    });
});

client.initialize();
