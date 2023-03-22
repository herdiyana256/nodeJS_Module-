// Kata Kunci VAR : 
/*
    Kata Kunci var dapat digunakan untuk mendeklarasikan variable global maupun  lokal. 
    Variable global adalah variable yang di deklarasikan di luar fungsi , sedangkan variable local adalah variable yang di deklarasikan dalam fungsi.
    Bentuk umum penggunaan kata kunci vsr adalah sbb : 
    

*/
// example : 
var a;

//Pada kode diatas kita mendeklrasikan variable dengan  "namavariable" melalui  cara ini , variable tersebut masih bernilai undefined.
// Kita dapat menggunakan undefined untuk memeriksa apakah suatu variable sudah berisi nilai atau belum.


//example II : 
if (a === undefined) {
        console.log("a belum berisi nilai");
} else {
        console.log("a sudah berisi nilai");
}

// a belum berisi nilai 

//note : Pada kode diatas kita mendeklarasikan variable dengan nama a. Melalui cara ini, variable tersebut masih bernilai undefined.
//Kita dapat menggunakan undefined untuk memeriksa apakah suatu variable sudah berisi nilai atau belum .



// Setelah didekrasikan kita dapat mengisi nilai ke dalam variable a menggunakan operator penugasan , seperti berikut : 
a = 9;

// untuk mendeklarasikan beberapa variable gunakan kode berikut :
var a;
var b;
var c;


//atau 
var  a,b,c;

/*
sama seperti bahasa pemograman lain nha, Javascript jkuga mengizinkan kita untuk melakukan inisialisasi atau pengisian nilai awal ke dalam  variable
pada saat variable tersebut di deklarasikan . 

*/
var a = 9;

// atau 
// var a = 9, b =10, c = 11;


//Berikut ini contoh penggunaan variable yang di deklrasikan menggunakan kata kunci var : 

var globalVar = 100;


function f () {
        var localVar = 200;

        console.log('Memanggil Variable didalam Fungsi!');
        console.log('globalVar: ' + globalVar);
        console.log('localVar: ' + localVar);

}

// memanggil fungsi 
f();

console.log('\nMemanggil varible diluar fungsi');
console.log('globalVar: ' + globalVar);
// console.log('localVar: ' + localVar); // salah, localhost tidak di kenal 


/*  
    Memanggil Variable didalam Fungsi!
globalVar: 100
localVar: 200

Memanggil varible diluar fungsi
globalVar: 100
PS C:\HERDIYAN A

*/

/* 
        Pada contoh kode diatas kita mrnggunakan kata kunci var untuk mendeklarasikan variable globalVar dan localVar . 
        Variable globalVar dapat dikenal dari luar maupun dalamn fungsi karena variable tersebut dideklarasikan diluar fungsi, sedangkan localVar 
        hanya akan dikenal didalam fungsi . 

*/


// other example : 
var a = 100, b = 200;
var c; 
c = a + b;


console.log(a+ '+' + b + ' = ' + c); // 100 + 200 =  300 







