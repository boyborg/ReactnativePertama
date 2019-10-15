import React from 'react';
import{
    View,
    TextInput, // menginput text
    Text,
    Button
    }from 'react-native';

    class Pajak extends React.Component{
        state={gajiBulanan:0,gajiTahunan:null,pajakBayar:null,pajak:""};

        hitungPajak(){
            let gajiBulanan=this.state.gajiBulanan; //menampung nilai 'state' diatas
            let gajiTahunan=parseInt(gajiBulanan)*12;

            if(gajiTahunan >= 50000000 && gajiTahunan<250000000){
                pajak="5%";
                pajakBayar=gajiTahunan*0.05;
            }
            else if(gajiTahunan>250000000){
                pajak="15%";
                pajakBayar=gajiTahunan*0.15;
            }
            else{
                pajak="0";
                pajakBayar=0;
            }
            this.setState({pajak:pajak,gajiTahunan:gajiTahunan,pajakBayar:pajakBayar}) //'{}' untuk menampung variabel
        }

        render(){
            //let currentValue=this.state.value;
            return(
                <View>
                    <Text>Hitung Pajak</Text>
                    <TextInput
                    style={{height:40}}
                    placeholder="Gaji Bulanan"
                    onChangeText={(inputGajiB)=> this.setState({gajiBulanan:inputGajiB})} 
                    // kalau ada perubahan langsung berubah
                    value={this.state.gajiBulanan}/>

                    <Text>Gaji Tahunan: {this.state.gajiTahunan}</Text>
                    <Text>Pajak: {this.state.pajak}</Text>

                    <Button
                    title="Hitung Pajak"
                    onPress={()=>{
                        this.hitungPajak()
                    }}
                    />
                    <Text>Pajak di Bayar: {this.state.pajakBayar}</Text>
                </View>
            )
        }
    }

    export default Pajak;