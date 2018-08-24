import React, { Component } from 'react';
import { FlatList, Text, TextInput, View, Button, StyleSheet } from 'react-native';

class MessageTextinput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

export default class App extends Component {
  constructor(props) {
      super(props);

      this.state = { 
        Placeholder: 'Useless Multiline Placeholder',     
        FlatListItems: [
        {key: 'One'},
        {key: 'Two'},
        {key: 'Three'},   
      ]};
  }

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }

  renderFlatListItem = ({item}) => {
    return(
        <Text 
            style = {styles.item} 
            onPress = {(itemKey) => this.onPressItem(item.key)}
        > 
            {item.key} 
        </Text>
    );
}

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data = {this.state.FlatListItems}
          renderItem={this.renderFlatListItem}
        />
        <MessageTextinput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(Placeholder) => this.setState({Placeholder})}
         value={this.state.Placeholder}
       />
        <Button title="Send" onPress = {this.handleSubmit}/>
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

