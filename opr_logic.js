// OPERATOR LOGIKA 
/*
    OPERATOR LOGIKA DIGUNAKAN UNTUK MEMBANDINGKAN DUA BUAH NILAI LOGIKA. 
    HASIL DARI OPERASI JUGA AKAN BERUPA NILAI LOGIKA .

    OPERATOR      || KETERANGAN 
    &&             : OPERASI LOGIKA AND  -> MENGEMBALIKAN NILAI TRUE HANYA JIKA  KEDUA OPERAN YANG DIBERIKAN  BERNILAI TRUE. 
                                           JIKA SALAH SATU ATAU KEDUA OPERAN  BERNILAI FALSE, MAKA OPERAN && (AND) AKAN MENGEMBALIKAN NILAI FALSE.
    ||             : OPERASI LOGIKA OR ->  MENGEMBALIKAN NILAI TRUE JIKA SALAH SATU ATAU KEDUA OPERAN  YANG DIBERIKAN BERNILAI TRUE. 
                                            JIKA KEDUA OPERAN BERNILAI FALSE, MAKA OPERATOR || (OR) AKAN MENGEMBALIKAN NILAI FALSE
    !              : OPERASI LOGIKA NOT ->  DIGUNAKAN UNTUK MEMBALIK NILAI BOOLEAN  DARI SEBUAH OPERAN. JIKA NILAI  OPERAN AWAL ADALAH TRUE, MAKA OPERATOR  !(NOT)  AKAN 
                                            MENGEMBALIKAN NILAI FALSE DAN SEBALIKNYA 


*/

// EXAMPLE  OPERAN &&(AND) -> keduanya harus nilai nya true, apabila salah satu ada yang false maka hasilnya akan false 
var a =  true;
var b = false;

console.log(a && b);  // output :  false
console.log(a && true); // output : true 
console.log(a && false); // output : false 



// EXAMPLE OPERAN || (OR) -> salah satu nilai harus ada yang true, maka hasilnya akan true. jika keduanya false maka akan false 
var c = false;
var d = true;

console.log(c || d); //  true 
console.log(false || false); // false 
console.log(true || true); // true 
console.log(c || true);// true 
console.log(c || false); // false 



// EXAMPLE OPERAN !(NOT) -> membolak nilai boolean , apabila true menjadi false, dan apabila false menjadi true 
var x = true;
var y = false;

console.log(!x); // output : false 
console.log(!y); // output  : true 
console.log(!false); // output :  true
console.log(!true); // output : false 



// OVERVIEW EXAMPLE IN REPL (READ EVAL PRINT LOOP)
/*
    REPL adalah sebuah lingkungan interaktif yang memungkinkan pengguna untuk mengevaluasi perintah-perintah kode secara langsung melalui baris perintah, yang kemudian akan mengevaluasi, mengeksekusi, dan mencetak hasil keluarannya pada baris berikutnya. REPL sangat berguna dalam pengembangan dan pengujian kode karena memungkinkan pengguna untuk secara cepat mencoba perintah-perintah kecil atau mengevaluasi kode secara iteratif. Node.js menyertakan REPL bawaan yang dapat diakses melalui terminal dengan mengetikkan perintah "node" dan akan membuka lingkungan REPL di mana pengguna dapat mengevaluasi kode JavaScript secara interaktif.

*/

 /*
    true  || true 
    > true 

    true || false 
    > trie 

    false  || true
    > true
    
    false || false 
    > false

    */



    // LOGIKA NOT 
    /*
    LOGIKA  NOT (!) symbol 
    OPERASI NOT MERUPAKAN OPERASI NEGASI .
    NILAI YANG DI HASILKAN OLEH OPERASI INI ADALAH KEBALIK DARI NILAI OPERAND .
    SAMA SEPERTI BAHASA PEMOGRAMAN KELUARGA C LAIN NYA . 
    JAVASCRIPT  JUGA MENGGUNAKAN OPERATOR ! UNTUK MELAKUKAN OPERASI NOT . 


    A             || B             || C                || D
    TRUE           TRUE              FALSE                FALSE
    TRUE           FALSE             FALSE                TRUE
    FALSE          TRUE              TRUE                 FALSE
    FALSE          FALSE             TRUE                 TRUE


    */

    /*
            EXAMPLE IN REPL ( READ EVAL PRINT LOOP) : NODE 
            > !true
            false
            > !false
            true 

    */





// OPERATOR BITWISE 
/*
    OPERATOR BITWISE ADALAH OPERATOR YANG DIPERGUNAKAN UNTUK MELAKUKAN OPERASI LOGIKA TERHADAP BILANGAN BULAT DAN PROSES PERGESERAN BIT.
    SAAT OPERASI INI BERLANGSUNG, OPERAND YANG BERUPA BILANGAN BULAT AKAN DI KONVERSI KE DALAM BENTUK BILANGAN BINER (BASIS 2) TERLEBIH DAHULU .
    DAN OPERASINYA DILAKUKAN BIT-DEMI BIT (BIT = BINARY DIGIT ATAU DIGIT BINER).
    SELANJUTNYA, HASIL YANG DI PEROLEH AKAN DI KONVERSI KEMBALI KE DALAM BENTUK BILANGAN DESIMAL (BASIS 10)

    UNTUK DAPAT MEMAHAMI CARA KERJA OPERATOR BITWISE, ANDA HARUS MEMAHAMI KONSEP BILANGAN DALAM BENTUK BINER TERLEBIH DAHULU .
    DALAM BILANGAN  BINER, MASING-MASING BIT HANYA BISA BERNILAI 0 ATAU 1 .
    BILANGAN 0 MEREPRESENTASIKAN NILAI FALSE DAN 1 MEREPRESENTASIKAN NILAI TRUE. ANDA JUGA PERLU MENGETAHUI BAHWA 1 BYTE SAMA DENGAN 8 BIT 
    DAN MASING-MASING BIT DITANDAI DENGAN SATU KOTAK . SEBAGAI CONTOH NILAI 12 DALAM BENTUK DESIMAL APABILA DI KONVERSI KE DALAM BENTUK BINER
    MAKA HASILNYA ADALAH 00001100 .

    0 0 0 0 1 1 0 0
    2.7 2.6 2.5 2.4 2.3 2.2 2.1 2.0  (PANGKAT)

    NILAI 12 BERASAL DARI 23 + 2 2 , BIT BIT LAIN DENGAN NILAI 0 TIDAK DISERTAKAN DALAM PROSES PERHITUNGAN NYA . 


    #TABEL DAFTAR OPERATOR BITWISE DIDALAM JAVASCRIPT : 
    OPERATOR           ||   KETERANGAN          ||   CONTOH 
    &                    OPERASI BITWISE AND      12 & 10 MENGHASILKAN 8 
    |                    OPERASI BITWISE OR       12 | 10 MENGHASILKAN 14 
    ^                    OPERASI BITWISE XOR      12 ^ 10 MENGHASILKAN  6
    ~                    OPERASI BITWISE NOT      ~ 12 MENGHASILKAN -13
    >>                   OPERASI BITWISE SHIFT RIGHT   12 >> 2 MENGHASILKAN 3 
    <<                   OPERASI BITWISE SHIFT LEFT    12 << 2 MENGHASILKAN  48


    CARA KERJA DARI OPERATOR & (AND), | (OR) , ^ (XOR), DAN ~ (NOT).
    MULAI-MULA NILAI  12 DAN 10 AKAN DI KONVERSI KE DALAM BENTUK BINER MENJADI 00001100 DAN 00001010.
    SETELAH ITU, OPERASI LOGIKANYA AKAN DILAKUKAN UNTUK MASING-MASING BIT.  
    GAMBAR DIBAWAH INI AKAN MENGILUSTRASIKAN CARA KERJA OPERASI BITWISE YANG TERDAPAT PADA CONTOH DIATAS :


     0 0 0 0 1 1 0 0 = 12
     0 0 0 0 1 0 1 0 = 10
     0 0 0 0 1 0 0 1  12 & 10 = 8


     0 0 0 0 1 1 0 0 = 12 
     0 0 0 0 1 0 1 0 = 10 
     0 0 0 0 1 1 1 1 = 12 & 10 = 14

     0 0 0 0 1 1 0 0 = 12 
     0 0 0 0 1 0 1 0 = 10
     0 0 0 0 0 1 1 0 = 12 | 10 = 14

    0 0 0 0 1 1 0 0 = 12
    0 0 0 0 1 0  1 0 = 10
    0 0 0 0 0 1 1 0 = 12 ^ 10 = 6 

    0 0 0 0  1 1 0 0 = 12 
    1 1 1 1 0 0  1 0 = ~12 = -13 

    DALAM OPERASI BITWISE NOT, ~X AKAN MENGHASILKAN -X 1 . UNTUK MEMBUKTIKAN KONSEP DIATAS LIHAT CONTOH BERIKUT : 

*/ 
console.log("===============================================================================");


var a = 12, b = 10;

console.log(`a \t:  ${a}`); // 12 
console.log(`b \t: ${b}`); // 10
console.log(`a & b \t: ${a & b}`); // 8
console.log(`a | b \t: ${a | b}`); // 14
console.log(`a ^ b \t: ${a ^ b}`); // 6
console.log(`~a \t: ${~a}`); // -13 

/*
    UNTUK MELAKUKAN OPERASI PERGESERAN BIT DARI SUATU BILANGAN BULAT, KITA PERLU MENGGUNAKAN OPERATOR >> ATAU << .
    PERBEDAAN ANTARA KEDUA OPERATOR TERSEBUT TERLETAK PADA ARAH PERGESERAN NYA . OPERATOR >> DIGUNAKAN UNTUK MENGGESER BIT KE ARAH KANAN, 
    SEDANGKAN OPERATOR << KE ARAH KIRI . 
*/
var a = 12 >> 2  // 3  ( 12 : 4) PERGESERAN KE KANAN DAN SETIAP PERGESERAN AKAN DI BAGI 2 SEHINGGA 12 DI BAGI 4 
var b = 12 << 2  // 48  (12 x 4) PERGESERAN KE KIRI DAN SETIAP PERGESERAN AKAN DI KALI 2 SEHINGGA 12 DI KALI 4 
console.log(a); // 3
console.log(b); // 48


/*
    BARIS PERTAMA PADA KODE DI ATAS AKAN MENGGESER 00001100 (12 DALAM BENTUK BILANGAN BINER) KE ARAH KANAN SEBANYAK 2 BIT.
    DENGAN DEMIKIAN, HASIL OPERASINYA ADALAJ 00000011 (3 DALAM BENTUK BILANGAN BINER) . BARIS KEDUA AKAN MENGGERSER 00001100 KE AEAH KIRI SEBANYAK 2 BIT
    SEHINGGA AKAN MENGHASILKAN 00110000 ( 48 DALAM BENTUK BILANGAN BINER ).

    CARA KERJA DARI OPERATOR >> DAN << SEBENARNYA MUDAH DI PAHAMI . 
    ANDA HANYA PERLU MENGINGAT BAHWA SETIAP PERGESERAN 1 BIT KE ARAH KANAN AKAN MENGHASILKAN NILAI OPERAND DI BAGI 2 DAN SETIAP PERGESERAN 1 BIT 
    KE ARAH KIRI AKAN MENGHASILKAN NILAI OIPERAND DI KALI 2 .

    EXAMPLE II : 

*/
    var a1 = 12 >> 1 // sama dengan 12 dibagi 2 , menghasilkan 6
    var a2 = 12 >> 2 // sama dengan 12 dibagi 4, menghasilkan 3 
    var b1 = 12 << 1 // sama dengan 12 dikali 2, menghasilkan 24
    var b2 = 12 << 2 // sama dengan 12 dikali 4, menghasilkan 48 

    console.log(a1);  // 6
    console.log(a2); // 3 
    console.log(b1); // 24
    console.log(b2); // 48

    console.log("===================================================================");

    // BERIKUT INI ADALAH KODE YANG AKAN MEMBUKTIKAN KONSEP DIATAS : 
    // OPERATOR BITWISEL

    var a = 12;

    console.log(`a \t: ${a}`); // 12 {angka awal}
    console.log(`a >> 1 \t: ${a >> 1 }`); // 12 dibagi 2 (geser 1 bit ke kanan : 2) menjadi 6 
    console.log(`a >> 2 \t: ${a >> 2}`); //  12 dibagi 4 (geser 2 bit ke kanan : 4) menjadi 3
    console.log(`a << 1 \t: ${a << 1}`); // 12 dikali 2 (geser 1 bit ke kiri : 2) menjadi 24
    console.log(`a << 2 \t: ${a << 2}`); // 12 dikali 4 (geser 2 bit ke kiri : 4) menjadi 48





    // OPERATOR STRING
    /*
    SELAIN UNTUK MELAKUKAN PENJUMLAHAN TERHADAP BILANGAN, DALAM JAVASCRIPT , OPERATOR + JUGA DAPAT DI TERAPKAN TERHADAP STRING, YANG BERFUNGSI
    UNTUK MENYAMBUNG DUA BUAH STRING

    */
    var  namaDepan = 'Herdiyan';
    var  namaBelakang = 'Adam Putra';

    var namaLengkap = namaDepan + ' ' + namaBelakang;
    console.log(namaLengkap); // Herdiyan Adam Putra



    //CONTOH PENERAPAN OPERATOR + YANG DIGUNAKAN UNTUK MENYAMBUNG STRING DAPAT DILIHAT PADA KODE DIBAWAH INI .
    var data = ['Anggur', 'Durian', 'Pisang', 'Apel'];

    var s = '[';
    for (let i=0; i < data.length; i++) {
            s += '\'' + data[i] + '\'';
            if (i < data.length -1) s += ', ';

    }

         s += ']';

         console.log('s:  ' + s);  // s: ['Anggur', 'Durian', 'Pisang', 'Apel'];
         // Kode diatas berfungsi untuk menampilkan seluruh element array ke dalam bentuk string.





         console.log("===================================OPERATOR CONDITIONAL=====================================");

         // OPERATOR KONDISIONAL 
         /*
            SAMA SEPERTI BAHASA KELUARGA C LAIN NYA, JAVASCRIPT JUGA MENDUKUNG OPERATOR KONDISIONAL (?:). 
            OPERATOR INI JUGA SERING DISEBUT OPERATOR TERNARY KARENA MEMILIKI TIGA OPERAND .
            CARA KERJA OPERATOR INI DAPAT DILIHAT PADA POTONGAN KODE :

         */
        var a = 10;
        var b = 20;

        var maks;

        // mencari nilai maksimum dari a dan b 
        maks = (a > b) ? a : b;
        console.log(maks); // 20 


        /*
        PADA KODE DIATAS, MULA-MULA JAVASCRIPT AKAN MEMERIKSA EKPRESI A > B. 
        JIKA EKPRESI TERSEBUT BERNILAI TRUE, MAKA NILAI A AKAN DIISIKAN KE DALAM  VARIABEL MAKS.
        JIKA EKPRESI BERNILAI FALSE, MAKA NILAI B YANG AKAN DIISIKAN KE DALAM VARIABLE MAKS .

        KODE DI ATAS SEBENARNYA MERUPAKAN BENTUK SEDERHANA DARI IF-ELSE.
        DENGAN IF-ELSE, KITA DAPAT MENULISNYA SEPERTI BERIKUT : 

        */

        if (a > b) {
                maks = a;

        } else {
                maks = b;
        }
        console.log(a); // 10
        console.log(b); // 20 


        console.log("==================================================================================");
        // CONTOH LAIN PENGGUNAAN OPERATOR KONDISIONAL DAPAT DILIHAT PADA KODE DIBAWAH INI : 

        // OPERATOR KONDISIONAL 

        var readline = require('readline-sync');


        var a = parseInt (readline.question(`Masukan bilangan Bulat: `)); // contoh 10 dimasukan, 10 adalah bilangan bulat . 
                                                                          // Jika Angka 1 yang dimasukan maka 1 adalah nilangan ganjil

        process.stdout.write(`${a} adalah Bilangan`);
        console.log((a % 2 == 0) ? 'genap' : 'ganjil');


        


        // OPERATOR IN 
        /*
            Operator in digunakan untuk memeriksa apakah suatu property  terdapat didalam objek tertentu atau tidak .
            Jika property yang diperiksa di temukan dalam objek bersangkutan, maka operator in akan menghasilkan nilai true.
            Jika sebaliknya, maka hasil yang diberikan adalah false. 
            Sebagai contoh, untuk memeriksa apakah objek String memiliki property length atau tidak, tuliskan kode berikut :

            > 'length' in String
            true
            >

            Selain untuk memeriksa property , operator in juga dapat digunakan untuk memeriksa keberadaan suatu indeks dalam array tertentu,
            seperti yang ditujukkan oleh kode berikut :

            > bahasa = ['Javascript', 'Python', 'Ruby'];
[ 'Javascript', 'Python', 'Ruby' ]
> 0 in bahasa
true
> 1 in bahasa
true
> 2 in bahasa
true
> 3 in bahasa
false
> data = {'one': 'satu', 'two': 'dua', 'three': 'tiga'}
{ one: 'satu', two: 'dua', three: 'tiga' }
> 'one' in data
true
> 'two' in data
true
> 'three' in data
true
> 'four' in data
false
> 'five' in data
false
>

PADA ARRAY BAHASA KITA MEMERIKSA INDEKS YANG BERTIPE BILANGAN  (0,1,2, DAN 3) SEDANGKAN PADA ARRAY DATA DATA KITA MEMERIKSA INDEKS YANG BERTIPE STRING ('ONE', DAN 'FIVE').


        */


console.log("========================OPERATOR TYPEOF==================================================");

// OPERATOR TYPEOF 
// OPERATOR TYPEOF DIGUNAKAN UNTUK MENGETAHUI TIPE DATA DARI SUATU VARIABEL ATAU NILAI TERTENTU .

/*
EXAMPLE IN REPL (READ EVAL PRINT LOOP)
VARIABLE NAME TANPA KURUNG -> 
> var a = 10 
undefined
> typeof a 
'number'
> typeof 10
'number'
> typeof 'Pemograman Jaman Now'
'string'
> typeof [1,2,3,4,5]
'object'
> typeof (1,2,3,4,4,5)
'number'
> typeof 'Pemograman 2023'
'string'

*/
   

// OPERATOR TYPEOF JUGA DAPAT DITULIS MENGGUNAKAN TANDA KURUNG, MISAL NYA SEPERTI BERIKUT : 

/*
        EXAMPLE : 

> var a  = 10 
undefined
> typeof (a)
'number'
> typeof (10)
'number'
> typeof ('Pemograman Jaman Now')
'string'
> typeof ([1,2,3,4,5])
'object'
>

*/ 



// ===============================================================================================================================

console.log("==============================OPERATOR INSTACEOF================================");

// OPERATOR INSTANCEOF DIGUNAKAN UNTUK MEMERIKSA APAKAH SUATU VARIABLE (INSTANCE) MERUPAKAN OBJEK DARI TIPE TERTENTU ATAU BUKAN.

/*
        EXAMPLE : 
        > var name
undefined
> name = new String ('Hello, Herdiyan Adam Putra!')
[String: 'Hello, Herdiyan Adam Putra!']
> var number 
undefined
> var number = [1,2,3,4,5]
undefined
> number  instanceof Array
true
> number
[ 1, 2, 3, 4, 5 ]
> number instanceof Number
false

*/


//===============================================================================================================================

//PEMILIHAN 
/*
    PEMILIHAN ADALAH SUATU BLOK PROGRAM YANG DAPAT MENENTUKAN PERINTAH MANA YANG SEHARUSNYA DILAKSANAKAN OLEH BERDASARKAN KONDISI-KONDISI 
    TERTENTU YANG DI DEFINISIKAN. 
    DALAM JAVASCRIPT, BLOK PEMILIHAN DAPAT DIBUAT MENGGUNAKAN DUA PERINTAH, YAITU IF DAN SWITCH.

*/


// =========================================================================================================================

console.log("==========================PERINTAH IF============================================");


/*
    PERINTAH IF 
    Bentuk umum penggunaan perintah if yang paling sederhana adalah sebagai berikut :
    if(kondisi) aksi 

    KONDISI YANG DIDEFINISIKAN DIATAS MERUPAKAN EKPRESI BOOLEAN, YAITU EKPRESI YANG MENGHASILKAN NILAI TRUE ATAU FALSE.
    AKSI YANG TERDAPAT DIDALAM BLOK PEMILIHAN HANYA AKAN DI EKSEKUSI JIKA KONDISI BERNILAI TRUE. JIKA FALSE,AKSI AKAN DIABAIKAN.

    DALAM JAVASCRIPT, EKPRESI JUGA DAPAT BERUPA BILANGAN , STRING , MAUPUN NILAI LAIN (MISALNYA ARRAY). 
    JAVASCRIPT SECARA OTOMATIS AKAN MENGONVERSI NILAI TERSEBUT KE TIPE BOOLEAN .
    BILANGAN SELAIN 0 AKAN DI KONVERSI KE TRUE, SEDANGKAN 0 AKAN DI KONVERSI KE FALSE.
    STRING YANG MEMILIKI MINIMAL SATU KARAKTER AKAN DI KONVERSI KE TRUE, SEDANGKAN STRING KOSONG AKAN DI KONVERSI KE FALSE.
    
    PERHATIKAN POTONGAN KODE BERIKUT :


*/
var i = 1;
var s = 'Javascript';
var a = [1,2,3];

if (i) println('true'); // Benar
if (s) println('true'); // Benar 
if (a) println('true'); // Benar



/*
    Jika aksi akan dilakukan ketika kondisi benar berjumlah lebih dari satu maka kita perlu menempatkan aksi-aksi tersebut ke dalam
    blok kode program yaitu dengan mengapitnya menggunakan tanda {dan} , sbb :
*/
if (kondisi) {
        aksi1 
        aksi2
     //   ...
}


// Kita tetap dapat mengapit aksi yang di eksekusi dengan tanda {dan} meskipun aksi tersebut  hanya berjumlah 1 .

if (kondisi) {
        aksi
}



//===============================================================================================================


    

    

 







