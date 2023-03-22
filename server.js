const http = require('http'); // mengimpor modul HTTP bawaan Node.js yang digunakan untuk membuat server web.

const server  = http.createServer((req, res) => { // membuat server web baru dengan menggunakan fungsi callback yang akan dijalankan setiap kali server menerima permintaan.
        res.statusCode = 200; // menetapkan kode status HTTP 200 OK pada respons.
        res.setHeader('Content-type', 'text/plain'); //  menetapkan header Content-Type pada respons agar browser tahu bahwa respons adalah teks biasa.
        res.end('Hello, Herdiyan!'); // mengakhiri respons dengan mengirimkan pesan "Hello World!" ke browser yang meminta.
});


server.listen(3000, () => {
        console.log('Server Running Well at : https://localhost:3000/'); // menjalankan server pada port 3000 dan mencetak pesan ke konsol bahwa server telah berjalan.
});

/*
    JIKA SERVER NODE JS TIDAK BISA DI AKSES , APA YANG HARUS DILAKUKAN ?

    Jika Anda tidak dapat mengakses localhost:3000 pada aplikasi Node.js Anda, ini bisa disebabkan oleh beberapa masalah. Berikut adalah beberapa solusi yang dapat Anda coba:

Pastikan server Anda berjalan:
Pastikan server Anda berjalan dengan menjalankan perintah node server.js atau npm start pada terminal Anda. Anda harus melihat output yang memberi tahu Anda bahwa server telah dimulai dan mendengarkan pada port 3000.

Periksa apakah port 3000 digunakan oleh aplikasi lain:
Coba jalankan perintah lsof -i :3000 pada terminal Anda untuk memeriksa apakah port 3000 sedang digunakan oleh aplikasi lain. Jika ya, Anda harus menghentikan aplikasi tersebut atau mengganti port aplikasi Anda dengan port yang tidak digunakan.

Periksa firewall Anda:
Beberapa firewall mungkin memblokir akses ke port 3000, pastikan untuk mengizinkan akses ke port 3000 pada firewall Anda.

Periksa konfigurasi aplikasi Anda:
Pastikan bahwa aplikasi Anda dikonfigurasi untuk mendengarkan pada port 3000 dan bukan port lainnya.

Gunakan alamat IP localhost:
Coba akses aplikasi Anda menggunakan alamat IP localhost, yaitu http://127.0.0.1:3000/ daripada http://localhost:3000/.



*/