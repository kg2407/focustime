import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';
import { fontSizes } from './src/utils/sizes';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer'
import { FocusHistory } from './src/features/FocusHistory'

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [ history, setHistory ] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history}/>
        </>
      ) : (
        <View style={styles.timer}>
          <Timer 
            focusSubject = {currentSubject}
            onTimeEnd = {(subject) => {
              setHistory([...history, subject])
            }}
            clearSubject = {() => setCurrentSubject(null)}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  timer: {
    flex: 1
  }
});
