// TIPE STRING

/* 
    STRING ADALAH TEKS ATAU KUMPULAN KARAKTER. DALAM JAVASCRIPT, STRING DAPAT DI BUAT MENGGUNAKAN TIGA CARA, YAITU :?
    - MENGGUNAKAN PETIK TUNGGAL ('')      
    - MENGGUNAKAN PETIK GANDA ("")
    - MENGGUNAKAN TANDA TICK (``)
*/

// EXAMPLE : 
var s1 = 'Pemograman Javascript';
var s2 = 'Node.js';
var s3 = `Express (framework untuk Node.js)`;

console.log('s1: ' + s1);
console.log('s2: ' + s2);
console.log('s3: ' + s3);


// EXAMPLE II : 
var nama  = 'Herdiyan Adam Putra';
var alamat = 'Jalan Jati Kelapa No 31';
var profesi = 'IT Developer';

console.log('nama: ' + nama);
console.log('alamat: ' + alamat);
console.log('profesi: ' + profesi);


/*
    String yang dibuat menggunakan tanda tick merupakan fitur baru dalam ECMAScript 6 dan dapat digunakan untuk melakukan interpolasi variabel, yaitu
    proses memanggil  nilai variabel dari dalam string.
    Dalam Javascript, interpolasi variable dilakukan denganb menyertakan tanda ${NamaVariable} atau ${ekpresi} ke dalam string. 

*/

// EXAMPLE : 
var a = 8, b = 9, c = a + b;

console.log(a + ' + ' + b + ' = ' + c); // 8 + 9 = 17 

// kode diatas akan menghasilkan tampilan 8 + 9 = 17. Dengan menggunakan interpolasi variable, kode diatas dapat di sederhanakan menjadi seperti berikut :
console.log(`${a} + ${b} = ${c}`);

console.log("========================================================================")

// EXAMPLE - INTERPOLASI VARIABLE DI DALAM JAVASCRIPT
var a = 8, b = 9, c = a + b;

console.log(`${a} + ${b} = ${c}`);
console.log(`${a} * ${b} = ${a / b}`);
console.log(`${c}`);
/* 
8 + 9 = 17
8 * 9 = 0.8888888888888888
17
*/


//Selain untuk melakukan interpolasi varible, string yang dibuat menggunakan tanda tick juga dapat ditulis dalam beberapa baris .
// sebagai contoh :

var s = 'dengan adanya NodeJS, \n' + 'Javascript dapat digunakan untuk membuat\n' + 'beragam tipe aplikasi';

console.log(s);

/*
    Output :
dengan adanya NodeJS,
Javascript dapat digunakan untuk membuat
beragam tipe aplikasi
*/

console.log("=======================================================================================");
//PADA KODE DIATAS, STRING PADA MASING-MASING BARIS PERLU DISAMBUNG MENGGUNAKAN OPERATOR +.  DENGAN MENGGUNAKAN TANDA TICK, KITA DAPAT MENYEDERHANAKAN NYA, MENJADI SEPERTI BERIKUT :
var s = `Dengan adanya Node.js, Javascript dapat digunakan untuk membuat beragam tipe aplikasi`;
console.log(s); // Dengan adanya Node.js, Javascript dapat digunakan untuk membuat beragam tipe aplikasi


// Untuk membutikan nya , kita dapat mengeksekusi kode dibawah ini 
var s1 = 'Dengan adanya Node.js,\n' + 'Javascript dapaat digunakan untuk membuat\n' + 'beragam tipe aplikasi';
/* 
    s1: Dengan adanya Node.js,
Javascript dapaat digunakan untuk membuat
beragam tipe aplikasi

*/

var s2 = `Dengan adanya Node.js, 
Javascript dapat digunakan untuk membuat beragam tipe aplikasi`; // s2: Dengan adanya Node.js, Javascript dapat digunakan untuk membuat beragam tipe aplikasi

console.log('s1: ' + s1);
console.log('\ns2: ' + s2);

// sama seperti bahasa pemograman keluarga C lain nya (C++, C#, Java, dan PHP), String didalam Javascript juga dapat disisipi karakter escape sequence, seperti \n (new line) , \t (horizontal tab) dan sebagainya .


console.log("Pemograman\nJavascript");
// Pemograman 
// Javascript


// ==================================================================================================================================

console.log("==========================================================================================");


// TIPE BOOLEAN 
// Variable yang diisi dengan nilai logika , true(benar) atau false (salah). akan bertipe boolean.
var ketemu = false;
while (!ketemu) {
        // ...
        ketemu = true;
}
console.log(ketemu); // true 


//================================================================================================================================

// MENGENAL ARRAY DI DALAM JAVASCRIPT 
/*  
    Array adalah variable yang digunakan untuk menampung data berkelmpok . Artinya, variable bertipe array dapat menampung lebih dari satu nilai.
    Dalam Javascript, array dibedakan menjadi dua , yaitu : array berindeks dan array  asosiatif.
    Array berindeks di buat menggunakan tanda [] sedangkan array asositif di buat menggunakan tanda {}

*/


// array berindeks
var a = [10,20,30,40,50,60,70];

// akses elemen menggunakan indeks 0,1,2,.....
console.log(a[0]); // menampilkan : 10
console.log(a[1]); // menampilkan : 20

//======================================================================================================
// array asosiatif 
var b = {'jkt': 'Jakarta', 'bdg': 'Bandung', 'sby': 'Surabaya', 'smg': 'Semarang'};

// akses element menggunakan kunci 
console.log(b['jkt']); // Menampilkan : 'Jakarta'
console.log(b['bdg']); // menampikan : 'Bandung'
console.log(b['smg']); // menampilkan : 'Semarang'


// ====================================================================================================


/*
    VARIABLE BERTIPE ARRAY DIKATEGORIKAN SEBAGAI TIPE OBJEK, LEBIH TEPATNYA OBJEK DAN TIPE ARRAY.
    UNTUK MEMBUKTIKAN NYA, ANDA DAPAT MENULIS KODE BERIKUT KE DALAM TERMINAL REPL.

*/
 var a = [10,20,30,40,50]; // undefined 

 typeof a; // object

 a instanceof Array // true 
 
a // [10,20,30,40,50]



// =====================================================================================

// OPERATOR 
// Operator adalah simbol khusus yang digunakan untuk melakukan operasi operasi tertentu, seperti perhitungan, perbandingan dua buah nilai, penyambungan, string , dan sebagainya .


// OPERATOR PENUGASAN (ASSIGNMENT)
// Operator penugasan (assignment) adalah operator yang digunakan untuk mengisi nilai ke dalam suatu variable.
// Dalam Javascript, operator penugasan di nyatakan dengan tanda sama dengan (=)

// mendeklarasikan variable a
var a;

// mengisi nilai 1 ke dalam variable a 
a = 1;


// DALAM PEMOGRAMAN , SERING JUGA DIJUMPAI PERINTAH SEPERTI BERIKUT :
 a = a + 1;

 // PERINTAH  DIATAS ARTINYA MENAMBAH NILAI A DENGAN 1, KEMUDIAN HASILNYA DIISIKAN KEMBALI KE VARIBLE A .
 // DALAM  JAVASCRIPT, KODE DIATAS DAPAT DISEDERHANAKAN MENJADI BERIKUT :

 a += 1;



 // OPERATOR PENUGASAN YANG DITULIS SINGKAT SEPERTI INI JUGA BERLAKU UNTUK OPERATOR YANG LAIN, MISALNYA *,/,%

 var a = 1;
 var b = 2;
 var c = 3;

 a += 1; // a = a + 1
 b *= 3; // b = b * 2
c /= 2; //  c = c : 2

 console.log(a); // 2
 console.log(b); //6
 console.log(c);  // 1.5


 // ===================================================================================================

 console.log("========================================================================");

 // EXAMPLE  USAGE OPERATOR PENUGASAN DIDALAM JAVASCRIPT 
 var a = 1;
 console.log('Nilai awal a: ' + a); // Nilai awal a : 1


 a += 1;
 console.log('Setelah ditambah 1, nilai a: ' + a); // Setelah ditambah 1, nilai a : 2
 

 a *= 3;
 console.log('Setelah dikali 3, nilai a: ' + a); // Setelah dikali 3, nilai a : 6

 a /= 2;
 console.log('Setelah dibagi 2, nilai a: ' + a); // Setelah dibagi 2, nilai a : 3





// OPERATOR ARITMETIKA 
/*
OPERATOR ARITMETIKA DIGUNAKAN UNTUK MELAKUKAN OPERASI - OPERASI PERHITUNGAN TERHADAP BILANGAN . 
TABEL BERIKUT INI MENUNJUKAN DAFTAR OPERATOR ARITMETIKA DI DALAM JAVASCRIPT : 

+ : OPERATOR UNTUK OPERASI PENJUMLAHAN 
- : OPERATOR UNTUK OPERASI PENGURANGAN 
* : OPERATOR UNTUK OPERASI PERKALIAN 
/ : OPERATOR UNTUK OPERASI PEMBAGIAN 
** : OPERATOR UNTUK OPERASI PERPANGKATAN 
%   : OPERATOR UNTUK OPERASI MODULUS ( PERHITUNGAN SISA BAGI)
++ : OPERATOR UNTUK MENJUMLAHKAN SUATU VARIABEL DENGAN NILAI 1
-- : OPERATOR UNTUK MENGURANGI SUATU VARIABEL  DENGAN NILAI 1 


*/

console.log("================================================================================")


// PENGGUNAAN OPERATOR - OPERATOR  DIATAS 
var  readline = require('readline-sync');


var a = parseInt(readline.question('Masukan nilai a: ')); // example : asukan nilai a: 10
var b = parseInt(readline.question('Masukan nilai b: ')); // example : Masukan nilai b: 20

console.log(`${a} + ${b} = ${a + b}`); //10 + 20 = 30
console.log(`${a} - ${b} = ${a - b}`); // 10 - 20 = -10
console.log(`${a} *${b} = ${a * b}`); // 10 *20 = 200
console.log(`${a} / ${b} = ${a / b}`); //10 / 20 = 0.5
console.log(`${a} % ${b} = ${a % b}`); // 10 % 20 = 10
console.log(`${a} ** ${b} = ${a ** b}`); // 10 ** 20 = 100000000000000000000


//=====================================================================================================================================================================================================================================================

console.log("======================================================================");

/* Perlu diperhatikan bahwa javascript operator pembagian (/) selalu menghasilkan bilangan rill, meskipun dua operand-nya  bertipe bilangan bulat.
Perilaku ini agak berbeda dengan bahasa C,C++ maupun Java. Dalam bahasa bahasa pemograman tersebut, operator / akan menghasilkan bilangan bulat jika 
kedua operan bertipe bilangan bulat . Jika Salah satu atau kedua operand bertipe bilangan rill, maka operator / akan menghasilkan bilangan rill .
Lantas, bagaimana cara nya agar javascript dapat melakukan pekerjaan ini, kita dapat memanfaatkan metode MATH .
floor() dan Math.ceil() 


*/

function intdiv (a, b) {
    var c = a / b;
    if(c >= 0) {
            return Math.floor(c);
    } else {
        return Math.ceil(c);
    }
}

var readline = require('readline-sync');


var a = parseInt(readline.question('Masukan Nilai a: ')); // example : 10
var b = parseInt(readline.question('Masukan Nilai b: ')); // example : 20 

console.log(`${a}  / ${b} = ${intdiv(a, b)}`); // 20 / 10 = 2 


/* 
    Pada kode diatas, kita mendefinisikan fungsi intdiv() untuk melakukan pembagian bilangan yang menghasilkan bilangan bulat. 
    agar kodenya lebih sederhana, fungsi tersebut dapat ditulis seperti berikut : 

*/

// EXAMPLE II : 
function intdiv(a, b) {
        var c = a / b;
        return (c >= 0) ?Math.floor(c) : Math.ceil(c);
}
var readline = require('readline-sync');


var a = parseInt(readline.question('Masukan Nilai a: ')); // example : 10
var b = parseInt(readline.question('Masukan Nilai b: ')); // example : 29 

console.log(`${a}  / ${b} = ${intdiv(a, b)}`); // 10 /29  = 0 

