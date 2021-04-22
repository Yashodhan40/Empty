import * as React from 'react';
import {View,TextInput, Alert,TouchableOpacity,Text,StyleSheet,ScrollView,KeyboardAvoidingView,Modal} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import SantaScreen from '../components/Santa.js';


export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            isModalVisible:'false',
            Name:'',
            name2:'',
            phone:'',
            password:'',
            cP:'',
            add:''
        }
    }
    
    signUp=(email,password,cP)=>{
        if (password !== cP){
            Alert.alert("Password Doesn't Match");
        }else{
        firebase.auth().createUserWithEmailAndPassword(email,password).then((response)=>{
            db.collection("User").add({
                FirstName:this.state.Name,
                LastName:this.state.name2,
                Email:this.state.email,
                Address:this.state.address
            })
            return Alert.alert("User added successfully",
            '',
            [
                {text:'OK', onPress:()=> this.setState({'isModalVisible':false})}
            ]
            );
        })
        .catch ((error)=>{
            var errorCode = error.code
            var errorMessage = error.message
            return Alert.alert(errorMessage);
        })
        }
    }

    logIn=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then((response)=>{
            this.props.navigation.navigate('Donate');

        }).catch ((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message
            return Alert.alert(errorMessage);
        })
    }

    showModal=()=>{
        return(
            <Modal 
            animationType='fade' 
            transparent={true} 
            visible={this.state.isModalVisible} 
            >
                <View>
                    <ScrollView style={{width:'100%'}}>

                    <TextInput 
                    placeholder="First Name"
                    maxLength={8}
                    onChangeText={text=>{this.setState({Name:text})}}
                    
                    />
                    <TextInput 
                    placeholder="Last Name"
                    maxLength={10}
                    onChangeText={text=>{this.setState({name2:text})}}
                   
                    /> 
                    <TextInput 
                    placeholder="Contact no."
                    maxLength={10}
                    keyboardType='numeric'
                    onChangeText={text=>{this.setState({phone:text})}}
                    />

                    <TextInput placeholder="Address"
                    multiline={true}
                    onChangeText={text=>{this.setState({add:text})}}
                    
                    />
                    <TextInput 
                    placeholder="email ID"
                    keyboardType='email-address'
                    onChangeText={text=>{this.setState({email:text})}}
                    
                    />
                    <TextInput placeholder="password"
                    secureTextEntry={true}
                    onChangeText={text=>{this.setState({password:text})}}
                    />
                    <TextInput 
                    placeholder="confirm password"
                    secureTextEntry={true}
                    onChangeText={text=>{this.setState({cP:text})}}
                    />

                    <TouchableOpacity onPress={()=>this.signUp(this.state.email,this.state.password,this.state.cP)}>
                        <Text>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.setState({'isModalVisible':false})}>
                        <Text>Go Back</Text>
                    </TouchableOpacity>
                        
                    </ScrollView>
                     
                </View>

            </Modal>
        )
    }
    render(){
        return(
            <View>
               
               <View style={{justifyContent: 'center',alignItems: 'center'}}>

                </View>   
                {
                    this.showModal()
                }      

                <View style={{justifyContent:'center'}}>
                    <SantaScreen/> 
                    <Text>Book Santa</Text>
                </View>
                

                
                <KeyboardAvoidingView behavior='padding' enabled>
                    <TextInput 
                    style={styles.a}
                    placeholder="email Id"
                    keyboardType="email-address"
                    onChangeText={(text)=>{this.setState({email:text})}}
                    />
                    <TextInput 
                    style={styles.b}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(text)=>{this.setState({password:text})}}
                    />

                    <TouchableOpacity 
                    style={styles.l}
                    onPress={()=>{this.logIn(this.state.email,this.state.password)}}>
                             <Text>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.s}
                    onPress={()=>this.setState({isModalVisible:true})}>
                           <Text>Sign Up</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </View>
                   
                    
               

                


                    

        )
    }
}

const styles=StyleSheet.create({
    a:{
        marginTop:90,
        alignSelf:'center',
       // textAlign:'center',
        backgroundColor:'#99AAFF',
        padding:10,
        borderWidth:2,
        borderColor:'black',
        borderRadius:0,
        width:290
    },
    b:{
        backgroundColor:'#99AAFF',
        alignSelf:'center',
        padding:10,
        borderWidth:2,
        borderColor:'black',
        borderRadius:0,
        width:290,
        marginTop:15
    },
    c:{
        backgroundColor:'#77EE00',
        alignSelf:'center',
        padding:10,
        width:290,
        borderColor:'black',
        borderWidth:2,
        borderRadius:2,
        marginTop:60

    },
    d:{
        backgroundColor:'#77EE00',
        alignSelf:'center',
        padding:10,
        borderRadius:0,
        borderWidth:2,
        borderColor:"black",
        width:290,
        marginTop:15 
    },
    s:{
        backgroundColor:'#AACC00',
        width:90,
        alignSelf:'center',
        margin:10,
        textAlign:'center',
        paddingLeft:20,
        borderRadius:20,
        borderWidth:2,
        paddingTop:5,
        paddingBottom:5
    },
    l:{
        backgroundColor:'yellow',
        borderWidth:2,
        borderRadius:20,
        borderColor:'black',
        alignSelf:'center',
        width:90,
        paddingLeft:25,
        paddingTop:5,
        paddingBottom:5, 
        marginTop:10
    }
})