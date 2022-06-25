/*

var jmlAngkot=10;
var angkotBeroperasi=6;

for (var noAngkot=1; noAngkot<=jmlAngkot; noAngkot++){
    if(noAngkot<=6){
        console.log('Angkot no.' +noAngkot+ 'beroperasi dengan baik.');
    } else{
        console.log('Angkot no.' +noAngkot+ ' tidak beroperasi.');
    }

}
*/

var angka=prompt('Masukan Angka:');
if (angka%2 === 0){
    alert(angka+ ' adalah bilangan GENAP');
}else if (angka%2 === 1){
    alert(angka+ ' adalah bilangan GANJIL');
} else{
    alert(angka+ ' adalah bukan ANGKA!');

}
