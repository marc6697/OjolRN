import React from 'react';
import {View, Text, Image} from 'react-native';
import ActionButton from './ActionButton';
import {colors} from '../../utils';
import {welcomeAuth} from '../../assets';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper.page}>
      <Image source={welcomeAuth} style={styles.wrapper.illustration} />
      <Text style={styles.text.TitleApps}>O K E - J E X</Text>
      <ActionButton
        // descrpt="Silahkan masuk, jika anda sudah memiliki akun"
        title="Masuk"
        onPress={() => handleGoTo('Login')}
      />
      <ActionButton
        // descrpt=" Silahkan daftar, jika anda belum memiliki akun"
        title="Daftar"
        onPress={() => handleGoTo('Register')}
      />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    illustration: {
      // width: 280,
      // height: 180,
      marginBottom: 10,
    },
  },

  text: {
    TitleApps: {
      marginBottom: 200,
      fontWeight: 'bold',
      fontSize: 30,
      color: colors.default,
    },
  },
};

export default WelcomeAuth;
