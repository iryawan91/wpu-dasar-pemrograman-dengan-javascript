/*
var angka=3;
var angka=prompt('Masukang Angka:');

if (angka==1){
    alert('Anda memasukan angka 1');
}else if (angka==2){
    alert('Anda memasukan angka 2');
}else if (angka==3){
    alert('Anda memasukan angka 3');
}else {
    alert('Anda memasukan angka yang salah');
}
*/

/*
var angka=prompt('Masukan Angka :');

switch(angka){
    case '1':
        alert('Anda memasukan angka 1');
        break;
    case '2':
        alert('Anda memasukan angka 2');
        break;
    case '3':
        alert('Anda memasukan angka 3');
        break;
    default:
        alert('Angka yang dimasukan salah!');
        break;
}
*/

/*
var item=prompt('Masukan Nama Makanan/Minuman : \n (contoh: nasi, daging, susu, hamburger, softdrin)');

switch(item){
    case 'nasi':
        alert('Makanan / Minuman SEHAT');
        break;
    case 'daging':
        alert('Makanan / Minuman SEHAT');
        break;
    case 'susu':
        alert('Makanan / Minuman SEHAT');
        break;
    case 'hamburger':
        alert('Makanan / Minuman TIDAK SEHAT');
        break;
    case 'softdrink':
        alert('Makanan / Minuman SEHAT');
        break;
    default:
        alert('Pilihan Salah');
        break;
}
*/

var k= '';
for (var a=0; a<10; a++){
    for (var b=0; b<=a; b++){
        k += '*';
    }
    k += '\n';
}

console.log(k);

var s= '';
for (var i=9; i>0; i--){
    for (var j=0; j<i; j++){
        s += '*';
    }
    s += '\n';
}

console.log(s);



