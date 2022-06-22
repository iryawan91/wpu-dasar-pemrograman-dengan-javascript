/*
var x =10;
console.log('Hello Bandung');
console.log('Isi dari variabel x :' + x);
*/

/*
var nama = prompt('Masukan Nama:');
alert(nama);
confirm('Apa anda yakin?');

var tes = confirm('Apa Anda Yakin?');
if (tes == true){
    alert('User Menekan OK!');
}else{
    alert('User Menekan CANCEL!');
}
*/

alert('Selamat Datang');
var lagi = true;

while (lagi == true){
    var nama = prompt('Masukan Nama');
    alert('Halo' + nama);

    lagi = confirm('Coba Lagi?');
}