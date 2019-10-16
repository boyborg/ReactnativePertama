import React, {Component} from 'react'
import{
    View,
    StyleSheet, // menginput text
    Image,
    Text,
    }from 'react-native';

    export default class AlignItemBasic extends React.Component{
        render(){
            return(
                <View style={Styles.container}>
                    <View style={Styles.cardContainer}>
                    <View style={Styles.cardImageContainer}>
                        <Image style={Styles.cardImage}
                        source={require('../src/Asset/tes.png')}/>
                    </View>
                    </View>
                    
                </View>
            );
        }
    }

    const profileCardColor ='dodgerblue';
    const Styles =StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'

        },
        cardContainer:{
            borderColor: 'black',
            backgroundColor: profileCardColor,
            borderStyle:'solid',
            borderRadius:20,
            borderWidth:3,
            width:300,
            height:400,
            alignItems:"center"
        },
        cardImageContainer:{
            backgroundColor: 'white',
            borderWidth: 3,
            borderColor:'black',
            width:130,
            height:130,
            borderRadius:70, //biar buled
            alignItems:"center",
            padding:20
        },
        cardImage:{
            width:80, height:80
        }
    });