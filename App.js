import React from 'react';
import { Alert, FlatList, Text, View, Button, StyleSheet } from 'react-native';

// import t from 'tcomb-form-native'; // 0.6.9

// const Form = t.form.Form;

// const Message = t.struct({
//   "": t.String,
// });

// const options = {
//   fields: {
//     "": {
//       error: "Must type a message"
//     }
    
//   }
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { FlatListItems: [
      {key: 'One'},
      {key: 'Two'},
      {key: 'Three'},
      {key: 'Four'},
      {key: 'Five'},
      {key: 'Six'},
      {key: 'Seven'},
      {key: 'Eight'},
      {key: 'Nine'},
      {key: 'Ten'},
      {key: 'Eleven'},
      {key: 'Twelve'}    ]};
  }

  // GetItem (item) {
  //   Alert.alert(item);
  // }

  // handleSubmit = () => {
  //   const value = this._form.getValue(); // use that ref to get the form value
  //   console.log('value: ', value);
  // }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data = {this.state.FlatListItems}
          ItemSeparatorComponent = {this.renderFlatListItemSeparator}
          renderItem={this.renderFlatListItem}
        />
        <Form ref={c =>  this._form = c} type={Message} options={options}/> 
        <Button title="Send" onPress = {this.handleSubmit}/>
      </View>
    );
  }
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

renderFlatListItemSeparator = () => {
  return (
      <View
          style={{
              height: 1,
              width: "100%",
              backgroundColor: "#607D8B",
          }}
      />
  );
}

onPressItem(itemKey) {
  Alert.alert(itemKey);
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

