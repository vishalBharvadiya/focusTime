import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../Components/RoundedButton';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

// import Constants from 'expo-constants';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hey What Would you like a Focus On ?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ flex: 1, marginRight: spacing.md }}
          onSubmitEditing={({ nativeEvent }) => {
            addSubject;
            setSubject(nativeEvent.text);
          }}
        />
        <RoundedButton
          size={50}
          title=" + "
          onPress={() => {
            addSubject(subject);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: 50,
    justifyContent: 'center',
    color: 'red',
    backgroundColor: colors.darkBlue,
    paddingTop: spacing.md,
  },
  titleContainer: {
    // flex: 0.1,
    padding: spacing.mg,
     justifyContent: 'center',
    
  },
  title: {
    color: 'white',
    fontwidth: 'bold',
    fontSize: fontSizes.md,
    justifyContent: 'center',



  },

  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
  },
});
