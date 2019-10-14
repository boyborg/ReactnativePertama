import React from 'react';
import{
    View,
    ScrollView,
    SafeAreaView,
    Text
    }from 'react-native';

    class Ruang extends React.Component{
        render(){
            return(
            <View>
                <Text>Perhitungan Bangun Ruang</Text>
                <Text>Nama:{this.props.namaRuang}</Text>
                <Text>Rumus Luas:{this.props.rumusLuas}</Text>
                <Text>Rumus Keliling:{this.props.rumusKeliling}</Text>
                <Text></Text>
            </View>
                );
        }
    }

    export default Ruang;