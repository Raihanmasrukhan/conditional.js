// Manipulasi Array

// 1. Menambah isi array
// var arr = []
// arr[0] = "sandhika";
// arr[1] = "ghalih";
// arr[2] = "nofa";
// arr[3] = "daddy";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["sandhika", "galih", "nofa"]
// arr[1] = undefined;
// console.log(arr);

// 3. menampilkan isi array
// var arr = ["sandhika", "galih", "nofa","dono"];

// for( var i = 0; i < arr.length; i++ ) {
// 	console.log('mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }


// method pada array 
// 1. join
 var arr = ['sandhika', 'galih', 'nofa'];
// console.log(arr.join(' - '));

 // 2. push & pop
 // arr.push('dono', 'bambang');
 // arr.pop();
 // arr.pop();
 // console.log(arr.join(' - '));
 //untuk menambah dan menghilangkan kata akhir


 // 3. unshift & shift
 // arr.unshift('dono');
// arr.shift();
// console.log(arr.join(' - '));
//untuk menambah dan menghilangkan kata awal

var arr = ['sandika', 'galih', 'nofa'];
 //4. splice
// splice( indekAwal, mauDihapusberapa, elemenBaru1, elemenBaru2, ...)
arr.splice(2, 0, 'dody', 'fitri');
console.log(arr.join(' - '));



