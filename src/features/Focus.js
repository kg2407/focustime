import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { fontSizes } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = (props) => {
  const [subject, setSubject] = useState();
  const { addSubject } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setSubject}
          label="What would you like to focus on?"
          style={styles.textInput}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
