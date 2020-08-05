import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../utils';
import {Button} from '../../components';

const ActionButton = ({title, onPress}) => {
  return (
    <View style={styles.wrapper.component}>
      {/* <Text style={styles.text.desc}>{descrpt}</Text> */}
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = {
  wrapper: {
    component: {
      marginBottom: 20,
      width: 350,
    },
  },
  text: {
    desc: {
      fontSize: 13,
      textAlign: 'center',
      paddingHorizontal: '15%',
      marginBottom: 6,
      color: colors.text.default,
    },
  },
};

export default ActionButton;
