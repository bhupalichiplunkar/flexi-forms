import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import LoanForm from './src/components/form';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <LoanForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02629A',
  },
});