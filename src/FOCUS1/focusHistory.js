import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
// import { colors } from '../utils/colors';

import { RoundedButton } from '../Components/RoundedButton';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyitem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things weve Focused On (: </Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />

            <View style={styles.clearContainer}>
              <RoundedButton
                size={70}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyitem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSizes: fontSizes.lg,
  }),
  title: {
    color: 'white',
    fontSize: 20,
  },

  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});
