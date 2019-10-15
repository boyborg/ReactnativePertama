import React from 'react';
import{
    View,
    TextInput, // menginput text
    Text,
    Button
    }from 'react-native';

    class Persegi extends React.Component{
        state={panjang:0,lebar:null,luas:null};

        hitungLuas(){
            let panjang=this.state.panjang; //menampung nilai 'state' diatas
            let lebar=this.state.lebar;
            let luas=parseInt(panjang)*parseInt(lebar); //perhitungan
            this.setState({luas:luas}) //'{}' untuk menampung variabel
        }

        render(){
            let currentValue=this.state.value;
            return(
                <View>
                    <Text>Hitung Luas Persegi Panjang</Text>
                    <TextInput
                    style={{height:40}}
                    placeholder="masukan panjang"
                    onChangeText={(inputPanjang)=> this.setState({panjang:inputPanjang})} 
                    // kalau ada perubahan langsung berubah
                    value={this.state.panjang}/>

                    <TextInput
                     style={{height:40}}
                     placeholder="masukan lebar"
                     onChangeText={(inputlebar)=> this.setState({lebar:inputlebar})} 
                     value={this.state.lebar}
                    />

                    <Button
                    title="Hitung Luas"
                    onPress={()=>{
                        this.hitungLuas()
                    }}
                    />
                    <Text>{this.state.luas}</Text>
                </View>
            )
        }
    }

    export default Persegi;