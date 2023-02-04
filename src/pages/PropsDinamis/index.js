import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20, marginTop: 10}}>
      <Image source={{uri: props.gambar}} style={styles.iconLogo} />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story judul="Nama" gambar="https://dummyimage.com/600x400/000/fff" />
          <Story
            judul="Kelas"
            gambar="https://dummyimage.com/600x400/f700f7/fff"
          />
          <Story
            judul="Alamat"
            gambar="https://dummyimage.com/600x400/001aff/fff"
          />
          <Story
            judul="Umur"
            gambar="https://dummyimage.com/600x400/ff006a/fff"
          />
          <Story
            judul="Sekolah"
            gambar="https://dummyimage.com/600x400/6aff00/fff"
          />
          <Story
            judul="Sekolah"
            gambar="https://dummyimage.com/600x400/6aff00/fff"
          />
          <Story
            judul="Sekolah"
            gambar="https://dummyimage.com/600x400/6aff00/fff"
          />
          <Story
            judul="Sekolah"
            gambar="https://dummyimage.com/600x400/6aff00/fff"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({
  iconLogo: {width: 70, height: 70, borderRadius: 35},
});
