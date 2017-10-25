import React, { Component } from 'react';
import { View , Text} from 'react-native';

export default class Header extends Component{
  render(){
    const {headerText, headerView} = styles
    return (
      <View style={headerView}>
        <Text style={headerText} >flexiloans</Text>
      </View>
    )
  }
}

const styles = {
  headerView : {
    height: 90,
    justifyContent : 'center',
    alignItems : 'center',
    alignContent: 'center',
    paddingTop : 10,
    backgroundColor : '#3F51B5'    
  },
  headerText: {
    color: '#fff',
    fontWeight: '300',
    letterSpacing : 1,
    fontSize : 30
  },
}