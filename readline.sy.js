
var readline = require('readline-sync');

// membaca data
var nama = readline.question("What your name?"); // Herdiyan Adam Putra

// menampilkan data yang di baca 
console.log("Hello Developer! " + nama + ", apa kabar?"); // Baik !



// example II : 
var readline = require('readline-sync');

// membaca data 
var a = readline.question('Masukan nilai a: '); // Nilai : 1 
var b = readline.question('Masukan nilai b: '); // Nilai : 2

var c = a * b;

console.log(a + ' x ' + b + ' = ' + c); // hasil pnjumlahan a * b 


//================================================================================================================================


// Jika kita membutuhkan data bilangan maka data dapat di konversi secara manual menggunakan fungsi parseInt () atau parseFloat ()
var readline = require('readline-sync');

// membaca data 
var a = readline.question('Masukan Bilangan bulat: ');
var b = readline.question('Masukan Bilangan rill:');


console.log('\nSebelum konversi tipe data');
console.log('Tipe a: ' + typeof a);
console.log('Tipe b: ' + typeof b);

// Konversi a dari tipe string ke bilangan bulat
a = parseInt(a);


// konversi b dari tipe string  ke bilangan rill
b = parseFloat(b);


console.log('\nSetelah konversi tipe data'); // setelah konversi tipe data
console.log('Tipe a: ' + typeof a); // tipe a : number
console.log('Tipe b: ' + typeof b); // tipe b : number

