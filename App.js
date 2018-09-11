import React, { Component } from 'react';
import { FlatList, Text, TextInput, View, Button, StyleSheet, AppRegistry } from 'react-native';

export default class App extends Component {
  constructor(props) {
      super(props);
      const messages = [
          {key: 'One'},
          {key: 'Two'},
          {key: 'Three'},
          {key: 'pineapple'}   
      ];
      
      this.state = {
        messages: messages,
        counter: 0,   
      }
  }

  handleSubmit = () => {
    let messageIndex = this.state.counter + 1;
    const {messages} = this.state;
    messages.push({key: this.state.text});
    this.setState({ messages: messages.slice(0), counter: messageIndex });
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data = {this.state.messages}
          renderItem={({item}) => <Text>{item.key}</Text>}
          />
        <TextInput
         placeholder = {"placeholder text"}
         onChangeText={(text) => this.setState({text}) }
         />
        <Button title="Send" onPress = {this.handleSubmit.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});

