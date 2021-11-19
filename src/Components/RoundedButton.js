import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { fontSizes, paddingSizes } from '../utils/sizes';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => (
  <TouchableOpacity
    style={[styles(size).radius, style]}
    onPress={props.onPress}>
    <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = (size) => 
  StyleSheet.create({
    radius: {
      borderRadius: size / 3,
      width: size,
      height: size,
      alignItems: 'center',
      borderColor: '#fff',
      justifyContent: 'center',
      borderWidth: 2,
    },

    text: { color: '#fff', fontSize: size / 3 },
  });
