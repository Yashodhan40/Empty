import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {AppHeader} from 'react-native-elements';

const AppHeader = props=>{
    return ( <AppHeader
    centerComponent={{
        text:props.title,
        style:{color:'blue'}
    }}
    />
    
    )
}

export default AppHeader;