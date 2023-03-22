// OPERATOR ++ 
/*
    OPERATOR ++ (DISEBUT JUGA INCREMENT) DIGUNAKAN UNTUK MENJUMLAHKAN SUATU VARIABEL DENGAN NILAI 1. 
    SEBAGAI CONTOH, JIKA NILAI VARIABLE X BERNILAI 9, MAKA SETELAH PERINTAH X++ VARIABLE X AKAN BERNILAI 10 .

    ARTINYA, NILAI X AKAN DITAMBAH DENGAN  1 . 
    OPERATOR ++ DAPAT DITEMPATKAN SEBELUM ATAU SESUDAH VARIABEL.
    OPERATOR ++ YANG DI TEMPATKAN  SEBELUM VARIABLE DISEBUT PRE-INCREMENT, SEDANGKAN YANG DITEMPATKAN SETELAH VARIABLE DISEBUT POST- INCREMENT.


    JIKA OPERATOR ++ DITEMPATKAN SEBEUH VARIABLE, MAKA NILAI VARIABLE TERSEBUT AKAN DINAIKKAN (DITAMBAH 1) TERLEBOH DAHULU SEBELUM DI PROSES.
    SEBAGAI CONTOH : KITA AMBIL SALAH SATU PROSES SEDERHANA, MISALNYA MENAMPILKAN NILAI X KE LAYAR .
    JIKA KITA MENEMPATKAN OPERATOR ++ SEBELUM X , MAKA NILAI X AKAN DINAIKKAN TERLEBIH DAHULU SEBELUM DITAMPILKAN .
    NAMUN, JIKA OPERATOR ++ DITEMPATKAN SETELAH X, MAKA NILAI X AKAN DITAMPILKAN TERLEBIH DAHULU, BARU KEMUDIAN NILAINYA AKAN DI NAIKAN .


*/

// EXAMPLE :
var x;

// pre- increment 
console.log('Pre-increment');
x = 9;
console.log(`x \t: ${x}`); //  x       : 9
console.log(`++x \t: ${++x}`); //++x     : 10
console.log(`x \t: ${x}`); // x       : 10

// post increment 
console.log(`x \t: ${x}`); // x       : 10
console.log(`x++ \t: ${x++}`); // x++     : 10
console.log(`x \t: ${x}`); //x       : 11



// Seperti yang anda lihat pada hasil diatas, ++x akan bernilai 10 sedangkan x++ akan bernilai 9. setelah  proses increment (baik menggunakan ++x maupun x++ ) , nilai x akan berubah menjadi 10.


// ==========================================================================================================================================

console.log("==================================================================================================");

// OPERATOR --
/*
    operator -- ( disebut dengan operator decrement) merupakan kebalikan dari operator increment, yang digunakan untuk mengurangi nilai suatu variable dengan 1.
    Jika x bernilai 9, maka setelah perintah --x (pre-decrement) maupun  x-- (post decrement) , variable x akan bernilai 8 .

*/

// EXAMPLE : PRE-DECREMENT 
console.log('Pre-Decrement');

x = 9;
console.log(`x \t: ${x}`); // x       : 9
console.log(`--x \t: ${--x}`); // --x     : 8
console.log(`x \t: ${x}`); // x       : 8


// post - decrement 
console.log(`\nPost-decrement`);
x = 9;

console.log(`x \t: ${x}`); // x       : 9
console.log(`x-- \t: ${x--}`);  // x--     : 9
console.log(`x \t: ${x}`);  // x       : 8

// KONSEP DARI PRE-DECREMENT DAN POST-DECREMENT SEBENARNYA SAMA DENGAN PRE-INCREMENT DAN POST-INCREMENT
// PERBEDAAN NYA, INCREMENT UNTUK MENAIKKAN  NILAI, SEDANGKAN DECREMENT UNTUK MENURUNKAN NILAI.
// ANDA BISA LIHAT  PADA HASIL  DI ATAS, --X BERNILAI 8 SEDANGKAN X--  BERNILAI 9 .  SETELAH  PROSES DECREMENT (BAIK MENGGUNAKAN --X MAUPUN X--), 
// NILAI VARIABLE AKAN BERUBAH MENJADI  8 . 




//=======================================================================================================================================


// OPERATOR RELASIONAL 
console.log("Operator Relasional");

/*
        Operator rekasional berfungsi untuk menyatakan relasi atau hubungan  antara dua operand; apakah sama, tudak sama, lebih besar, atau lebih kecil.
        Dalam kalimat yang lebih sederhana dapat dikatakan operator relasional  digunakan untuk melakukan perbandingan antara dua buah nilai atau variable.
        Hasil dari Operasi perbandingan selalu bernilai logika: Benar(true) atau salah(False).

        OPERATOR      || KETERANGAN 
        ==             : SAMA DENGAN -> nilai nya sama atau sesuai, jika nilai pembanding nya tidak sama maka akan bernilai false  
        !=             : IDENTIK, SAMA NILAI NYA DAN SAMA TIPENYA -> jika nilai nya sama bernilai false, jika nilai nya berbeda maka bernilai true 
        ===             : IDENTIK, SAMA NILAI NYA DAN SAMA TIPENYA -> jika tipe int dan bertemu dengan string maka nilai nya false 
        !==             : TIDAK IDENTIK  // jika nilai nya berbeda atau diatas value nya maka akan bernilai true, apabila value nya rendah atau sama dengan angka pembandingnya maka akan bernilai false.
        <               : LEBIH KECIL // jika 10 < 1 = maka hasilnya false, apabila 10 > 5 maka hasilnya true 
        >               : LEBIH BESAR // jika 10 > 2 = maka hasilnya true , apabila 10 < 5 maka hasilnya false 
        <=              : LEBIH KECIL ATAU SAMA DENGAN 
        >=              : LEBIH BESAR ATAU SAMA DENGAN 

        > -> lebih besar dari ... 
        < -> lebih kecil dari ....


        UNTUK MEMBANDINGKAN DUA BUAH NILAI APAKAH SAMA ATAU TIDAK KITA DAPAT MENGGUNAKAN DUA OPERATOR , YAITU  == DAN ===. OPERATOR ==  TIDAK
        MEMBEDAKAN TIPE DARI KEDUA NILAI YANG DIBANDINGKAN NYA . ARTINYA SELAMA NILAINYA SAMA, MAKA OPERATOR TERSEBUT AKAN MENGEMBALIKAN NILAI TRUE. SEBAGAI CONTOH , 3 == '3'
        AKAN MENGHASILKAN NILAI TRUE MESKIPUN OPERAND PERTAMA BERTIPE BILANGAN  DAN OPERAND KEDUA BERTIPE STRING. 
        JIKA ANDA MENGGUNAKAN OPERATOR === , MAKA HASIL YANG AKAN DI PEROLEH ADALAH FALSE. 
        OPERATOR === HANYA AKAN MENGHASILKAN NILAI TRUE JIKA KEDUA OPERAND MEMILIKI NILAI DAN TIPE YANG SAMA .
        SEBAGAI CONTOH, 3  == 3 AKAN MENGHASILKAN NILAI TRUE. 


*/

console.log("======================================================================================"); 
// EXAMPLE PENGGUNAAN OPERATOR RELASIONAL 
 var a = 10, b = 20;

 console.log(`a \t: ${a}`); // 10 
 console.log(`b \t: ${b}`); // 20
 console.log(`a == b \t: ${a == b}`); // false 
 console.log(`a != b \t: ${a != b}`); // true 
 console.log(`a < b \t: ${a < b}` ); // true 
 console.log(`a > b \t: ${a > b}`); // false 
 console.log(`a <= b \t: ${a <= b}`); // true 
 console.log(`a >= b \t : ${a >= b}`); // false 

 // operator relasional dalam blog pemilihan 
 if (a < b) {
        console.log(`a lebih kecil dari b`); // a lebih kecil dari b 
 }

 // Operator relasional dalam blok pengulangan 
 var i = a
 while (i <= b) {
        process.stdout.write(`${i}`); // 101214161820
        i += 2
 }

/*
    Perintah process.stdout.write() berfungsi untuk menampilkan data ke layar tanpa di sertai karakter baris baru (new line) . 
    Perlu anda ketahui bahwa console.log(s) sebenernya adalah bentuk singkat dari perintah process.
    stdout.write(s + '\n')


*/







