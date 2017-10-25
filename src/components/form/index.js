import React, { Component } from 'react';
import { View, Text, TextInput, Button} from 'react-native';

const fields = {
  name : {
    required : true,
  },
  email : {
    required : true,
    pattern : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  phone : {
    required : true,
  }
}

export default class LoanForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      email:'',
      mobile: '',
      nameError : '',
      emailError:'',
      mobileError: '',
      submitted: true,
      showFormValues : false
    }
    this.onPressLearnMore = this.onPressLearnMore.bind(this);
  }

  onPressLearnMore(){
    this.setState({
      submitted: true,
      showFormValues : true
    })
  }

  onValueChange(value, type){
    const typeCheck = fields[type];
    let isPattern = typeCheck.pattern? true : false;
    const patternChecked = isPattern ? value.match(typeCheck.pattern) : false;
    const isEmpty = value.length<1;
    if(typeCheck.required && isEmpty){
      this.setState({[`${type}Error`] : `${type} is required!!` , submitted : true})
      return;
    }
    if(isPattern && !patternChecked){
      this.setState({[`${type}Error`] : `${type} is not valid!!` , submitted : true})
      return;
    }
    this.setState({[`${type}`] : value , [`${type}error`] : '', submitted : false})
  }

  render(){
    const {input, view, button} = styles;
    const {submitted} = this.state;
    return (
      <View style={view}>
        <TextInput
          style={input}
          placeholder="Name"
          onChangeText={(name) => this.onValueChange(name, 'name')}
        />
        <Text style={{padding: 10, fontSize: 22}}>
          {this.state.nameError}
        </Text>
        <TextInput
          style={input}
          placeholder="Email"
          onChangeText={(email) => this.onValueChange(email, 'email')}
        />
        <Text style={{padding: 10, fontSize: 22}}>
          {this.state.emailError}
        </Text>
        <TextInput
          style={input}
          placeholder="Mobile"
          onChangeText={(mobile) => this.setState(mobile, 'mobile')}
        />
        <Text style={{padding: 10, fontSize: 22}}>
          {this.state.mobileError}
        </Text>
        <Button
          onPress={this.onPressLearnMore}
          title="Submit"
          color="#283593"
          accessibilityLabel="Submit form for loan application"
          disabled={submitted}
        />
      </View>
    )
  }
}

const styles = {
  view : {
    padding : 20,
    margin : 50,
    marginLeft : 30,
    marginRight : 30,
    backgroundColor: '#fff'
  },
  input : {
    height : 50,
    paddingLeft : 3,
  }
}