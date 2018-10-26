import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './components/Button.component';
import styles from './styles/App.component.style';

export default class App extends Component {

  render() {
    return (
      <View>
        <Button />
        <View style={styles.firstBtn}>
          <Text style={styles.text1}>First button</Text>
        </View>
        <View style={styles.secondBtn}>
          <Text style={styles.text2}>Second button</Text>
        </View>
      </View>

    );
  }
}

