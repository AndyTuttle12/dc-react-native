import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      amount: 0
    }
  }

  handleChange(e) {
    console.log(e)
    this.setState({
      amount: e
    })
  }

  render() {
    const goodTip = parseFloat(this.state.amount * .2).toFixed(2)
    const okayTip = parseFloat(this.state.amount * .15).toFixed(2)
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <TextInput
            style={styles.amount}
            placeholder = "Enter Bill Amount"
            placeholderTextColor = "#9A73EF"
            keyboardType = "numeric"
            onChangeText = {this.handleChange}
          />
        </View>
        <View>
          <Text>${goodTip} - for great service</Text>
          <Text>${okayTip} - for okay service</Text>
          <Text>No Tip - for really bad service</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    margin: 20,
    height: 40,
    width: 80,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10
  }
});