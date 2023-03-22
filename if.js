// BERIKUT INI ADALAH CONTOH KODE YANG MENUNJUKAN PENGGUNAAN PERINTAH IF DENGAN BENTUK SEPERTI DIATAS :

var readline = require('readline-sync');


var a = parseFloat(readline.question('Masukan nilai a :')); // contoh masukan 100
var b = parseFloat(readline.question('Masukan nilai b: ')); // contoh masukan 20 
var c;

if (b === 0) {
        console.log('KESALAHAN: nilai b tidak boleh nol ! '); // jika 0 dimasukan maka ada muncul notifikasi
        process.exit(1);
}

c = a/ b;


console.log(`${a} / ${b} = ${c}`);
console.log(`Jadi Pembagian nya adalah :  ${c}`); // Hasil dari pembagian nya : 100 / 20 = 5 


/*
    PROGRAM AKAN MEMBERIKAN HASIL SEPERTI DIATAS KARENA NILAI B DIISI DENGAN NILAI 0 .
    KETIKA B BERNILAI 0, KONDISI YANG DIDEFINISIKAN DIDALAM BLOK PEMILIHAN (B === 0) BERNILAI TRUE, DAN INI MENGAKIBATKAN AKSI-AKSI DIDALAM BLOK
    PEMILIHAN AKAN DI EKSEKUSI . 
    JIKA NILAI B DIISI DENGAN BILANGAN SELAIN 0, MAKA HASILNYA MENJADI SEPERTI BERIKUT : 

    MASUKAN NILAI A : 1 
    MASUKAN NILAI B : 4
    1/ 4 = 0.25


    PROCESS.EXIT() ADALAH FUNGSI YANG BERGUNA UNTUK MENGHENTIKAN PROGRAM KASUS DI ATAS SEBENARNYA DAPAT DI SELESAIKAN TANPA FUNGSI TERSEBUT.
    ASALKAN KITA MENGGUNAKAN IF-ELSE, YAITU PERINTAH IF YANG MELIBATKAN DUA KONDISI (KONDISI BENAR DAN KONDISI SALAH). BENTUK UMUM PENGGUNAAN 
    IF-ELSE ADALAH SEBAGAI BERIKUT

*/
// if(kondisi) {
//         aksi1
// } else {
//         aksi2
// }

// PADA BENTUK UMUM DIATAS, AKSI1 HANYA AKAN DILAKSANAKAN KETIKA KONDISI BERNILAI TRUE. JIKA FALSE,MAKA YANG AKAN DI LAKUKAN ADALAH AKSI2.
// ANDA JUGA DAPAT MENULIS KODE PEMILIHAN DIATAS DALAM SATU BARIS, SEPERTI BERIKUT : 
// if (kondisi) {
//         aksi1;
// } else {    
//     aksi2;
// }

// JIKA AKSI YANG DILAKUKAN TERDIRI DARI BEBERAPA PERINTAH (LEBIH DARI SATU) MAKA AKSI TERSEBUT PERLU DIKELOMPOKKAN MENGGUNAKAN TANDA {DAN}, 
// SEPERTI BERIKUT :
// if (kondisi) {
//         aksi1a
//         aksi1b
// } else {
//         aksi2a
//         aksi2b
// }


// DENGAN DEMIKIAN, KODE SEBELUM NYA DAPAT DIUBAH MENJADI SEPERTI DI BAWAH INI : 
console.log("======================if1 - Kondisi=========================");

// IF CONDITION 
var readline = require("readline-sync");

var a = parseFloat(readline.question('Masukan Nilai A : '));
var b = parseFloat(readline.question('Masukan Nilai B: '));
var c;

if(b === 0) {
        console.log('KESALAHAN: Nilai b tidak boleh nol!');
} else {
        c = a / b;
        console.log(`${a} / ${b} = ${c}`);
}


/*
    Bentuk Pemilihan if-else digunakan untuk menyelesaikan kasus-kasus pemilihan yang memiliki dua kemungkinan .
    Sebagai Contoh : untuk membuat program yang dapat menentukan apakah suatu bilangan merupakan bilangan genap atau ganjil, 
    kita dapat menggunakan if-else.
    Dalam kasus ini, terdapat dua kemungkinan : bilangan tersebut genap atau bilangan tersebut ganjil.

*/





// EXAMPLE 2 : IF 2 
var readline = require('readline-sync');

var a = parseInt(readline.question('Masukan bilangan bulat: '));

if (a % 2 === 0) {
          console.log(`${a} adalah bilangan Genap`); // contoh masukan angka 8, 8 adalah bilangan genap 
} else {
        console.log(`${a} adalah bilangan Ganjil`); // contoh masukan angka 9 , 9 adalah bilangan ganjil
}



//untuk kasus-kasus pemilihan tertentu yang melibatkan tiga kondisi atau lebih, kita perlu menggunakan bentuk umum berikut : 
// if (kondisi1) {
//         aksi1
// } else if (kondisi2) {
//     aksi2
// } else {
//     aksi_alternatif
// }


/*
NOTE:
CARA KERJA BENTUK DIATAS ADALAH SEBAGAI BERIKUT: MULA-MULA PROGRAM AKAN MEMERIKSA KONDISI1.
JIKA NILAINYA TRUE MAKA AKSI1 DILAKUKAN DAN PROSES PEMILIHAN DI HENTIKAN.
JIKA FALSE, PROGRAM AKAN MEMERIKSA KONDISI2 .
JIKA KONDISI2 BERNILAI TRUE MAKA AKSI2 DILAKUKAN DAN PEMILIHAN DIHENTIKAN.
JIKA TERNYATA MASIH BERNILAI FALSE, PROGRAM AKAN MELANJUTKA PEMERIKSAAN KE KONDISI-KONDISI BERIKUTNYA SAMPAI DI TEMUKAN KONDISI BENAR.
JIKA SEMUA KONDISI BERNILAI FALSE, MAKA YANG AKAN DI EKSEKUSI ADALAH AKSI ALTERNATIF YANG TERDAPAT PADA BAGIAN ELSE.

BERIKUT INI ADALAH CONTOH KODE YANG MENUNJUKKAN PENGGUNAAN BLIK PEMILIHAN IF YANG MELIBATKAN TIGA KONDISI :
*/

console.log("===========================IF3 - KONDISI=========================");
// EXAMPLE 3 : IF 3
var readline = require('readline-sync');

var a = parseInt(readline.question('Masukan bilangan bulat: '));

if (a > 0) {
        console.log(`${a} adalah bilangan positive`); // masukan nilai 20, 2o adalah bilangan positive
} else if ( a === 0) {
    console.log('Anda memasukan nilai 0'); // masukan nilai 0 , anda memasukan nilai 0 
} else {
        console.log(`${a} adalah bilangan negative`); // jika memasukan angka -91, -91 adalah bilangan negative
} 




//  EXAMPLE 4 : IF4 
console.log("===========================KONDISI 4 : IF================================");

var readline = require('readline-sync');

var noBulan = parseInt(readline.question('Masukan nomor bulan:'));
var namaBulan;


if (noBulan === 1) {
        namaBulan = 'Januari'; // nama bulan ke-1 adalah Januari

} else if (noBulan === 2) {
        namaBulan = 'Februari'; // nama bulan ke -2 adalah Februari 

} else if (noBulan === 3) {
    namaBulan = 'Maret'; // nama bulan ke -3 adalah Maret 

} else if (noBulan === 4) {
    namaBulan = 'April'; // nama bulan ke-4 adalah April

} else if (noBulan === 5) {
    namaBulan = 'Mei'; // nama bulan ke-5 adalah Mei

} else if (noBulan === 6) {
    namaBulan = 'Juni'; // nama bulan ke-6 adalah Juni

} else if (noBulan === 7) {
    namaBulan = 'Juli'; // nama bulan ke-7 adalah Juli

} else if (noBulan === 8) {
        namaBulan = 'Agustus'; // nama bulan ke-8 adalah Agustus

} else if (noBulan === 9) {
        namaBulan = 'September'; // nama bulan ke-9 adalah september 

} else if (noBulan === 10) {
        namaBulan = 'Oktober'; // nama bulan ke-10 adalah oktober

} else if (noBulan === 11) {
        namaBulan = 'November'; // nama bulan ke-11 adalah november 

} else if (noBulan === 12) {
        namaBulan = 'Desember'; // nama bulan ke-12 adalah Desember 

} else {
        console.log(`Tidak ada bulan ke-${noBulan}`);
        process.exit(1);
}


console.log(`Nama bulan ke-${noBulan} adalah ${namaBulan}`);


// PERINTAH SWITCH 
/*
   SELAIN MENGGUNAKAN IF, BLOK PEMILIHAN JUGA DAPAT DI BUAT MENGGUNAKAN PERINTAH SWITCH .
   BENTUK UMUM PENGGUNAAN SWITCH ADALAH SEBAGAI BERIKUT : 

*/
// EXAMPLE : 
// switch (ekpresi) {
//         case nilai1 : aksi1; break;
//         case nilai2 : aksi2; break;
//         //...
//         default: aksi_alternatif;
// }


/*
CARA KERJA PERINTAH 
CARA KERJA PERINTAH SWITCH ADALAH BERIKUT .
MULA-MULA PROGRAM AKAN MAKA PROGRAM AKAN MEMERIKSA EKPRESI, APAKAH SAMA DENGAN NILAI1 ATAU TIDAK .
JIKA SAMA MAKA PROGRAM AKAN MELAKSANAKAN AKSI1 DAN PROSES PEMILIHAN DI HENTIKAN JIKA TIDAK SAMA, PROGRAM  AKAN MELANJUTKAN PROSES PEMERIKSAAN
NILAI TERHADAP NILAI2.
JIKA EKPRESI SAMA DENGAN NILAI2, MAKA AKSI2 AKAN DILAKSANAKAN DAN PROSES PEMILIHAN DIHENTIKAN.
SEBALIKNYA, JIKA TIDAK SAMA, PROGRAM AKAN MEMERIKSA NILAI-NILAI SELANJUTNYA YANG DI DEFINISIKAN DIDALAM BLOK PEMILIHAN JIKA SEMUA NILAI
DI DEFINISIKAN TIDAK SAMA DENGAN EKPRESI, MAKA AKSI YANG AKAN DILAKSANAKAN ADALAH AKSI ALTERNATIF, YAITU AKSI YANG TERDAPAT PADA BAGIAN 
DEFAULT.
*/

// kode yang menunjukan proses pemilihan menggunakan perintah switch 
console.log("=========================EXAMPLE : SWITCH===============================");

var readline = require('readline-sync');
var noBulan = parseInt(readline.question('Masukkan nomor bulan: ')); // Masukan nomor bulan : contoh -> 9 

var namaBulan;


switch (noBulan) {
                case 1: namaBulan = 'Januari'; break; // Nama bulan ke-1 adalah Januari 
                case 2: namaBulan = 'Februari'; break; // Nama bulan ke-2 adalah Februari
                case 3: namaBulan = 'Maret'; break; // Nama bulan ke-3 adalah Maret 
                case 4: namaBulan = 'April'; break; // Nama bulan ke-4 adalah April
                case 5: namaBulan = 'Mei'; break; // Nama bulan ke-5 adalah Mei 
                case 6: namaBulan = 'Juni'; break;// Nama bulan ke-6 adalah Juni 
                case 7: namaBulan = 'Juli'; break; // Nama bulan ke-7 adalah Juli 
                case 8: namaBulan = 'Agustus'; break; // Nama bulan ke-8 adalah Agustus 
                case 9: namaBulan =  'September'; break; // Nama bulan ke-9 adalah September 
                case 10: namaBulan = 'Oktober'; break; // Nama bulan ke-10 adalah Oktober 
                case 11: namaBulan = 'November'; break; // Nama bulan ke-11 adalah November 
                case 12: namaBulan = 'Desember'; break; // Nama bulan ke-12 adalah Desember 
                default: {
                                console.log(`Tidak ada bulan ke-${noBulan}`); // jika kita masukan angka di luar -12 maka hasilnya akan seperti ini.
                                process.exit(1);
                }
}

console.log(`Nama bulan ke-${noBulan} adalah ${namaBulan}`); // Nama bulan ke-9 adalah september 




// =================================================================================================================================


console.log("========================EXAMPLE : SWITCH===============================");


var readline = require("readline-sync");

var noBulan = parseInt(readline.question('Masukan nomor bulan:'));

switch (noBulan) {
                case 1:
                case 2:
                case 3: console.log('Triwulan I'); break;
                case 4: 
                case 5:
                case 6: console.log('Triwulan II'); break;
                case 7:
                case 8:
                case 9: console.log('Triwulan III'); break;
                case 10:
                case 11:
                case 12: console.log('Triwulan IV'); break;
                default:
                        console.log(`Tidak ada bulan ke-${noBulan}`);
                
}
/*      
        Hasil program-1:
        Masukkan nomor bulan : 1 
        Triwulan I 


        Hasil program-2:
        Masukkan nomor bulan : 2
        Triwulan II
        

        Hasil program-3:
        Masukkan nomor bulan : 3 
        Triwulan III

*/



// Jika di selesaikan menggunakan if, kita dapat menulisnya seperti berikut :

if (noBulan === 1 || noBulan === 2 || noBulan ===3) {
        console.log('Triwulan I');
} else if (noBulan == 4 ||noBulan === 5 || noBulan === 6) {
        console.log('Triwulan II');
} else if (noBulan === 7 || noBulan === 8 || noBulan === 9) {
        console.log('Triwulan III');
} else if (noBulan === 10 || noBulan ===11 || noBulan === 12) {
        console.log('Triwulan IV');
} else {
                console.log(`Tidak ada bulan ke ${noBulan}`);
}



/*
        Perintah break dalam blok pemilihan yang dibuat menggunakan switch berfungsi untuk menghentikan proses pemilihan setelah aksi
        tertentu dilaksanakan jika tidak di sertakan,   maka proses pemilihan akan terus dijalankan sampai  nilai pilihan terakhir atau 
        bagian default. 
        Perhatikan kode berikut : 
*/
var readline = require('readline-sync');

var a = parseInt(readline.question('Masukan bilangan bulat: '));

switch (a) {
                case 1: console.log('Satu'); // Aksi 1
                case 2: console.log('Dua'); // Aksi 2 
                case 3: console.log('Tiga'); // Aksi 3
                case 4: console.log('Empat'); // Aksi 4 
                case 5: console.log('Lima'); // Aksi 5
                default: 
                console.log('Selain 1,2,3,4 dan 5'); // Aksi Alternatif 
}

/*
        Hasil Program : 
        Masukan bilangan bulat : 1 
        Satu 
        Dua 
        Tiga 
        Empat
        Lima 
        Selain 1,2,3,4 dan 5 


        Note : 
        PADA SAAT INI KITA MEMASUKAN NILAI 1 , SEHARUSNYA YANG DILAKSANAKAN OLEH PROGRAM HANYA AKSI1.
        NAMUN, KARENA AKSI TERSEBUT TIDAK DI IKUTI OLEH PERINTAH BREAK, MAKA PROGRAM AKAN MELAKSANAKAN AKSI2.
        KARENA SETELAH AKSI2 JUGA TIDAK DISERTAI PERINTAH BREAK, MAKA PROGRAM AKAN KEMBALI MELAKSANAKAN AKSI3 DAN SETERUSNYA .


        BERBEDA DENGAN C . PERINTAH SWITCH DIDALAM JAVASCRIPT  MAMPU MEMBANDINGAN NILAI YANG BERTIPE BILANGAN RILL.
        (CATATAN : DALAM BAHASA C, NILAI YANG DIBANDINGKAN HARUS BERUPA BILANGAN BULAT ATAU KARAKTER).

        UNTUK MEMBUKTIKAN NYA ANDA BISA MENJALANI KODE BERIKUT : 

*/
        var readline = require('readline-sync');

        var a = parseFloat(
                readline.question('Masukan Bilangan Rill (1.0..1.5): ')
                 );

       switch (a) {
                case 1.0 : console.log('1.0'); break; // 1.0
                case 1.1 : console.log('1.1'); break; // 1.1
                case 1.2 : console.log('1.2'); break; // 1.2
                case 1.3 : console.log('1.3'); break; // 1.3
                case 1.4 : console.log('1.4'); break; // 1.4
                case 1.5 : console.log('1.5'); break; // 1.5
                default :
                consol
                






                // SELAIN BILANGAN RILL NILAI YANG DIBANDINGKAN JUGA DAPAT BERUPA STRING, SEPERTI YANG DITUJUKKAN OLEH KODE BERIKUT : 

                console.log("====================================SWITCH 4 ============================================");


                var readline = require('readline-sync');

                var hari = readline.question('Masukan nama hari : ');



                switch (hari.toLowerCase()) {
                        case 'minggu':
                        case 'ahad':   noHari = 1; break;
                        case 'senin':  noHari = 2; break;
                        case 'selasa': noHari = 3; break;
                        case 'rabu':   noHari = 4; break;
                        case 'kamis':  noHari = 5; break;
                        case 'jumat':  noHari = 6; break; 
                        case 'sabtu':  noHari = 7; break; 
                        default : {
                                console.log('Nama hari yang dimasukan salah');
                                process.exit(1);
                        }
                        
                }
                
                console.log(`${hari} adalah hari ke-${noHari}`);
                // Masukan nama hari : Selasa 
                // Selasa adalah hari ke-3