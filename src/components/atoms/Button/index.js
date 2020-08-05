import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../utils';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
      <Text style={styles.wrapper.text}> {title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  wrapper: {
    component: {
      borderRadius: 10,
      backgroundColor: colors.default,
      paddingVertical: 13,
    },
    text: {
      fontSize: 15,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  },
};

export default Button;
