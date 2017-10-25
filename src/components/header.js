import React, { Component } from 'react';
import { View , Text} from 'react-native';

export default class Header extends Component{
  render(){
    const {headerText, headerView} = styles
    return (
      <View style={headerView}>
        <Text style={headerText} >Flexi Loans</Text>
      </View>
    )
  }
}

const styles = {
  headerView : {
    height: 100,
    justifyContent : 'center',
    alignItems : 'center',
    alignContent: 'center',
    paddingTop : 10,
    backgroundColor: '#0968A4'
  },
  headerText: {
    color: '#fff',
    fontSize : 30
  },
}