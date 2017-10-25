import React, { Component } from 'react';
import { View, Text, TextInput} from 'react-native';

export default class LoanForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      email:'',
      mobile: ''
    }
  }
  render(){
    const {input, view} = styles;
    return (
      <View style={view}>
        <TextInput
          style={input}
          placeholder="Name"
          onChangeText={(name) => this.setState({name})}
        />
        <Text style={{padding: 10, fontSize: 22}}>
          {this.state.name}
        </Text>
        <TextInput
          style={input}
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
        />
        <Text style={{padding: 10, fontSize: 22}}>
          {this.state.email}
        </Text>
        <TextInput
          style={input}
          placeholder="Mobile"
          onChangeText={(mobile) => this.setState({mobile})}
        />
        <Text style={{padding: 10, fontSize: 22}}>
          {this.state.mobile}
        </Text>
      </View>
    )
  }
}

const styles = {
  view : {
    padding : 20,
    margin : 50,
    marginLeft : 20,
    marginRight : 20,
    backgroundColor: '#fff',
    borderRadius: 5
  },
  input : {
    height : 50,
    paddingLeft : 3,
  }
}