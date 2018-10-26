import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/Button.component.style.android';

class Button extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText}> Press Me! </Text>
      </View>
    );
  }
}

export default Button;
