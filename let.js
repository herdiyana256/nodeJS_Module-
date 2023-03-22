// Kata Kunci Let Merupakan fitur baru yang ditambahkan pada ECMAScript dan digunakan untuk mendeklarasikan variable lokal didalam lingkup atau blok program tertentu.

// Bentuk umum let sama seperti var .

// let Herdiyan;
// let Mego;
//  let see;

//inisialiasai nilai juga dapat dilakukan pada variable yang di deklarasikan menggunakan kata kunci let, seperti berikut : 

// let NamaVariable = NilaiAwal;
// let NamaVariable1 = NilaiAwal, NamaVariable2 =  NilaiAwal2, 

// EXAMPLE : using var 
for (var i=0; i < 3; i++) {
        console.log('Nilai i: ' + i);
            // Nilai i : 0 
            //Nilai i : 1
            // Nilai i : 2
}

console.log('\Di Luar Blok Pengulangan, nilai i: ' + i);
// Di luar Blok Pengulangan, nilai i: 3


// EXAMPLE II : using let 
for (let i=1;  i < 8; i++) {
        console.log('Herdiyan Adam is Number: ' + i);
}
/* 
 Herdiyan Adam is Number: 1
Herdiyan Adam is Number: 2
Herdiyan Adam is Number: 3
Herdiyan Adam is Number: 4
Herdiyan Adam is Number: 5
Herdiyan Adam is Number: 6
Herdiyan Adam is Number: 7

*/

console.log('\nHerdiyan Adam Putra is Number : ' + i);
// Herdiyan Adam Putra is Number : 3


/*
    PADA BLOK DIATAS VARIABLE i DIDEKLARASIKAN MENGGUNAKAN KUNCI VAR. 
    KATA KUNCI VAR MASIH MEMPERBOLEHKAN VARIABLE i  UNTUK DI AKSES  DARI LUAR BLOK PENGULANGAN.
    JIKA ANDA TIDAK MENGINGINKAN HAL SEPERTI INI, MAKA ANDA DAPAT MENGGANTI KATA KUNCI VAR DENGAN KATA KUNCI LET .


*/ 


//========================================================================================================================================
console.log("============================================================================================================================");

// MEMBUAT VARIABEL TANPA KATA KUNCI 
// Javascript juga menginzinkan pembuatan variable tanpa kata kunci var maupun let . Kita Hanya perlu mendifinisikan variabel tersebut  menggunakan bentuk umum berikut :

// NamaVariable = NilaiAwal;

// example :
a = 100;
b = 200;

// Variable yang dibuat dengan cara diatas memiliki sifat yang sama seperti variable yang di buat menggunakan var dengan nilai awal tertentu.


// example II :
for (i=0; i < 10; i++) {
        console.log('Index start from :  '+ i);
}
/*
Output :
Index start from :  0
Index start from :  1
Index start from :  2
Index start from :  3
Index start from :  4
Index start from :  5
Index start from :  6
Index start from :  7
Index start from :  8
Index start from :  9
*/


console.log('\nDiluar Blok Pengulangan, index start from: ' + i);
// Diluar Blok Pengulangan, index start from: 10


// Meskipun bisa dilakukan  tapi pembuatan variable menggunakan cara diatas tidak di rekomendasikan karena untuk beberapa javascript runtime tertentu
// Mungkin akan menimbulkan Pesan Peringatan . 

//=======================================================================================================================================

console.log("======================================================================================================================");


// KONSTANTA 
// Dalam Javascript, konstanta didefinisikan menggunakan kita kunci const, bentuk umum penggunaan kata kunci tersebut adalah sebagai berikut :

// const NAMA_KONSTANTA = Nilai;


//Contoh :
// const PI = 3.14787698468942;
//Berbeda dengan variable, nilai konstanta tidak dapat di ubah 


// Sama seperti let, kata kunci const akan menjadikan konstanta dengan  sifat lokal pada blok program tertentu . 

// Contoh penggunaan kata kunci const dapat kita lihat pada kode di bawah ini : 

const PI = 3.145439053854;

// Jari-Jari lingkaran 
var radius = 5.0;

// Mendeklarasikan variable luas dan keliling 
var luas, keliling; 

// Menghitung luas lingkaran 
luas = PI * radius * radius;

// menghitung keliling lingkaran
keliling = 2 * PI * radius;

// menampilkan luas dan keliling lingkaran 
console.log('Luas Lingkaran \t\t: ' + luas); //  Luas Lingkaran          : 78.63597634635
console.log('Keliling Lingkaran\t: ' + keliling); // Keliling Lingkaran      : 31.45439053854



// KONSTANTA 
// dalam javascript , konstata difefinisikan menggunakan kata kunci const . Bentuk umum penggunaan kata kunci 



// example II : 
 
var PI1 = 3.14;

var lebar = 12;


var tinggi = 78;


// Menghitung luas persegi Panjang 
 luas =  tinggi  * lebar / PI1;

 keliling = PI1 * luas + 100;

 console.log('Luas Persegi Panjang \t\t:' + luas); // Luas Persegi Panjang            :298.0891719745223
 console.log('Luas Keliling Persegi Panjang \t\t: ' + keliling); // Luas Keliling Persegi Panjang           : 1036

 //==================================================================================================================


 console.log("================================================================================================");

 // MEMBACA DATA DARI KEYBOARD 
 // Kegiatan Membaca data dari keyboard sering dibutuhkan pada aplikasi berjenis command line interface. dalam Node.js kita dapat melakukan pekerjaan ini 
 // menggunakan module : READLINE-SYNC. Modul tersebut perlu di pasang terlebih dahulu menggunakan perintah berikut : 

 // npm install readline-sync


// example : 

var readline = require('readline-sync');

// Membaca data 
var name = readline.question('What Your Name, Bro?');

// Menampilkan data yang di baca 
console.log('my name is Herdiyan Adam Putra!');


// question  II 
var question = readline.question('How about your age?');


// answered II 
console.log = readline.question('my age is 27 old');


var question1 = readline.question("Ok, thanks your information!")

// closing question II 
console.log = readline.question("you are welcome!");