var a = 8, b = 9, c = a +b;

console.log(`${a} + ${b} = ${c}`);
console.log(`${a} + ${b} = ${a * b}`);
console.log(`${a}+ ${b} = ${a / b}`);

// Hasil Program 

/* 
 8 + 9 = 17
8 + 9 = 72
8+ 9 = 0.8888888888888888
*/


//==================================================================================================
console.log("========================================================================-=");


var  a = 9;
var b = 10;
var c = a* b;

console.log(`${a} + ${b} = ${c}`); // 9 + 10 = 90
console.log(`${a} * ${b} = ${a * b}`); //9 *10 = 90
console.log(`${a} / ${b} = ${a / b}`);  // 9 / 10 = 0.9
console.log(`${a} - ${b} = ${a = b}`); // 9 - 10 = 10
console.log(`${c}`); // 90 


// TIPE DATA 
/* 
    JAVASCRIPT MENGELOMPOKKAN  TIPE DATA MENJADI 2 JENIS : 
    DATA TIPE PRIMITIF 
    DATA TIPE OBJEK

    BERIKUT INI DAFTAR TIPE DATA YANG TERMASUK KE DALAM TIPE DATA PRIMITIF 
    A. NUMBER : TIPE DATA INI MENYATAKAN NILAI YANG BERUPA BILANGAN, BAIK BILANGAN BULAT MAUPUN BILANGAN RILL.

    B. STRING : TIPE INI MENYATAKAN NILAI YANG BERUPA TEKS ( KUMPULAN DARI KARAKTER)
    C. BOOLEAN : TIPE INI MENYATAKAN NILAI LOGIKA, YAITU TRUE ATAU FALSE 
    D. UNDEFINED: TIPE INI MENYATAKAN NILAI YANG BELUM DI DEFINISIKAN . JIKA ANDA MAKA NILAI AWAL YANG AKAN
    DIISIKAN ADALAH UNDEFINED.
    NULL : TIPE INI MENYATAKAN NILAI KOSONG (NULL) . JAVASCRIPT MERUPAKAN BAHASA YANG CASE-SENSITIVE SEHINGGA NULL TIDAK  SAMA DENGAN NULL.

    DALAM ECMAJAVASCRIPT 6 : TERDAPAT SATU TIPE DATA BARU YANG DITAMBAHKAN KE DALAM JAVASCRIPT SEBAGAI TIPE OBJECT , YANG AKAN DI BAHAS SECARA TERPISAH PADA SUB-SUB LAIN.


    JAVASCRIPT JUGA MENYEDIAKAN TIPE TIPE PEMBUNGKUS (WRAPPER) UNTUK TIPE NUMBER, STRING , DAN BOOLEAN.
    TIPE-TIPE PEMBUNGKUS TERSEBUT ADALAH NUMBER ( NURUF 'N' DITULIS DALAM HURUF KAPITAL), STRING (HURUF 'S' DITULIS DALAM HURUF KAPITAL) .
    DAN BOOLEAN (HURUF 'B' DITULIS DALAM HURUF KAPITAL) TIPE-TIPE PEMBUNGKUS DIGUNAKAN DALAM MEMPERLAKUKAN BILANGAN, TEKS, DAN NILAI LOGIKA SEBAGAI OBJEK (BERTIPE OBJECT)

*/


// EXAMPLE :
var a = 9; // tipe data primitif 
// Undefined 

typeof a;
'number'

var b = new Number(9); // tipe object
// undefined

typeof b;
'object'

// Pada Kode ditas, a merupakan variabel non-object yang bertipe number (tipe primitif) sedangkan b merupakan referewsi yang menunjuk ke object dari tipe number (tipe object.
// Objek adalah suatu entitas didalam memory komputer yang memiliki daftar property dan metode. 
// Sebagai contoh , untuk mengkonversi nilai a ke string, kita dapat memanggil metode toSring() dari objek bersangkutan.

// example : 
b.toString() // '9'


// Hal yang membingungkan didalam javascript adalah kita dapat memanggil metode toString() dari variabel a, padahal variable tersebut  dideklarasikan menggunakan tipe primitif.

a.toString() // '9'

/*
    Pada Situasi ini, Javascript secara otomatis akan mengkonversi a (tipe number) menjadi objek temporary yang bertipe Number.
    Dari  objek inilah metode toString() dipanggil . setelah pemanggilan metode selesai, objek temporary akan dibuang kemnbali dari memory komputer .

*/



//=======================================================================================================================================

console.log("========================================================================================");


// TIPE NUMBER 
/*
    BERBEDA DENGAN SEBAGIAN BESAR BAHASA PEMOGRAMAN LAIN, JAVASCRIPT TIDAK MEMBEDAKAN TIPE BILANGAN BULAT DENGAN  TIPE BILANGAN RILL.
    KEDUA NILAI TERSEBUT (MISALNYA 123 DAN 123.456) AKAN DINYATAKAN KE DALAM SATU TIPE YANG SAMA, YAITU NUMBER.

    DALAM BAHASA PEMOGRAMAN LAIN, PADA UMUM NYA NILAI 123  AKAN DI NYATAKAN KE DALAM TIPE INT; SEDANGKAN 123.456 AKAN DINYATAKAN DALAM TIPE FLOAT.

    DALAM JAVASCRIPT, NILAI BILANGAN BULAT DAPAT DITULIS DALAM FORMAT DESIMAL (BASIS 10), BINER (BASIS 2), OKTAL (BASIS 8), DAN HEKSADESIMAL (BASIS 16).

    NILAI DALAM FORMAT  DESIMAL DITULIS TANPA AWALAN, NILAI DALAM FORMAL BINER DITULIS DENGAN  AWALAN 0b, Nilai dalam format oktal ditulis dengan awalan 0o, dan nilai dalam format heksadesimal ditulis dengan awalan 0x.
    
*/

var desimal = 255;
var biner = 0b1111111111111;
var oktal = 0o377;
var heksadesimal = 0xff;



// Untuk bilangan rill, nilainya dapat ditulis seperti  berikut :

var a = 123.456;
var b = 1.2e3;



// Contoh kode dibawah ini menunjukan penggunaan tipe number :
var readline = require('readline-sync');

const PI = 3.14784626876432;

var radius;
var luas, keliling;

radius =  parseFloat(
        readline.question('Masukan Jari-Jari lingkaran: '));

        luas = PI * radius * radius;
        keliling = 2 * PI * radius;

        console.log('Luas Lingkaran\t\t: ' + luas);
        console.log('Keliling lingkaran\t: ' + keliling);

        /*
Masukan Jari-Jari lingkaran: ....isi : contoh -> 20
Luas Lingkaran          : 1259.138507505728
Keliling lingkaran      : 125.91385

        */


        
