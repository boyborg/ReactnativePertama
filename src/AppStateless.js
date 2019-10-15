import React from 'react';
import{
    View,    
    Text
    }from 'react-native';

    const AppStateless =(props) =>( //bukan fungsi dan class
        //js 6 terbaru
        <View>
            <Text> Components Stateless</Text>
            <Text>Nama : {props.nama}</Text>
            <Text>Alamat :{props.alamat}</Text>
            <Text>Telp : {props.telp}</Text>
            <Text>Email :{props.email}</Text>
            <Text></Text>
        </View>
    )

    export default AppStateless;