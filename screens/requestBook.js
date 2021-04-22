import * as React from 'react';
import {Text,View,TouchableOpacity,TextInput,KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import AppHeader from '../components/appHeader';

export default class RequestBook extends React.Component{
    constructor(){
        super()
        this.state={
            bookName:'',
            reason:'',
            userId:firebase.auth().currentUser.email
        }
    }

    createUniqueId(){
        return Math.random.toString(36).substring(5);

    }
    addRequest=(bookName,Reason)=>{
            var UserId = this.state.userId;
            var requestId = this.createUniqueId();
            db.collection('UserR').add({
                'User_Id':UserId,
                'bookName':bookName,
                'Reason':Reason,
                'Request ID':requestId
            })
            this.setState({
                bookName:'',
                reason:''
            })
    }
    render(){
        return(
            <View>
                <AppHeader
                title='Request a Book'/>

                <KeyboardAvoidingView behavior='padding' enabled>

                    <TextInput
                    placeholder="enter book name"
                    onChangeText={text=>{this.setState({bookName:text})}}
                    value={this.state.bookName}
                    />
                    <TextInput
                    placeholder="reason for requesting book"
                    maxLength={100}
                    onChangeText={text=>{this.setState({reason:text})}}
                    value={this.state.reason}
                    />
                    <TouchableOpacity onPress={()=>{this.addRequest(this.state.bookName,this.state.reason)}}>
                            <Text>Request</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}