import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../utils';
import {IconBack, RegisterIll} from '../../assets';
import {Input} from '../../components/atoms';

const Register = () => {
  return (
    <View style={styles.wrapper.page}>
      <IconBack width={25} height={25} marginTop={40} />
      <RegisterIll width={500} height={150} marginTop={8} />
      <Text style={styles.text.desc}>
        Mohon mengisi data untuk proses registrasi anda
      </Text>

      <View style={styles.space(40)} />
      <Input placeholder="Nama Lengkap" />
      <View style={styles.space(40)} />
      <Input placeholder="Email" />
      <View style={styles.space(40)} />
      <Input placeholder="Nomor Telepon" />
      <View style={styles.space(40)} />
      <Input placeholder="Password" />
    </View>
  );
};

const styles = {
  wrapper: {page: {padding: 20}},

  illustration: {
    width: 106,
    height: 115,
    backgroundColor: 'purple',
    marginTop: 8,
  },
  text: {
    desc: {
      fontSize: 15,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
    },
  },
  space: (value) => {
    return {
      height: value,
    };
  },
};

export default Register;
