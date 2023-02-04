import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BasicJavascript = () => {

   // Primitive 
    const nama = 'Calvin'; // String
    let usia = 24; // Number
    const apakahLakiLaki = true; // Boolean

    // Complex
    const hewanPeliharaan = {
        nama : 'Miaw',
        jenis : 'Kucing',
        usia : '2',
        apakahHewanLokal : true,
        warna: 'Kuning',
        orangTua : {
            jantan: 'Mew',
            Betina: 'Mow',
        },
    };

const sapaOrang = (nama, age) => {
    return console.log ('Hello ${nama} usia anda ${age}'); // function
};

sapaOrang('Prawito,24');

const namaOrang = ['Calvin', 'Indah', 1]; //object - array
    typeof namaOrang; // object


// Jika hujan turun makan kerja bawa payung
// Jika perut lapar maka harus makan

//  if(hewanPeliharaan.nama === 'Miaw') {
//     console.log('Hallo Miaw');
//  } else {
//     console.log('Hewan Siapa Ini?');
//  }

 const sapaHewan = objectHewan => {
    // let hasilSapa = '';
    // if (objectHewan.nama === 'Pusi') {
    //     hasilSapa = 'Hallo Miaw';
    //  } else {
    //     hasilSapa = 'Hewan Siapa Ini?';
    //  }
    //  return hasilSapa;
    return objectHewan.nama === 'Miaw' ? 'Hallo Miaw' : 'Ini Hewan Siapa?';
};
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Basic Java Script</Text>
       <Text>Nama: {nama}</Text>
       <Text>Usia: {usia}</Text>
        <Text>=======</Text>
       <Text>{sapaHewan(hewanPeliharaan)}</Text>
       <Text>{namaOrang[0]}</Text>
       <Text>{namaOrang[1]}</Text>
       <Text>{namaOrang[2]}</Text>
       <Text>=======</Text>
       {namaOrang.map(orang => (
        <Text>{orang}</Text>
        ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'},
});