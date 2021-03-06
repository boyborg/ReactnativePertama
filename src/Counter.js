import React from 'react';
import{
    View,
    TouchableOpacity,    //agar text dapat disentuh
    StyleSheet, //memanipulasi tulisan
    // TextInput, menginput text
    Text
    }from 'react-native';

    class Counter extends React.Component{
        // #1 inisialisai state 
        state = {value:0};        
        // #2 method untuk merubah state
        minus=()=>{
            let currentValue = this.state.value;
            this.setState({value:currentValue -1})
        }
        // #2 method untuk merubah state
        plus=()=>{
            let currentValue=this.state.value;
            this.setState({value:currentValue+1})
        }

        render(){
            let currentValue=this.state.value;
                if (currentValue%6==0 && currentValue !=0 ) { //kondisi pada React-native
                    currentValue='kucing';
                }
                
            return(
                <View>
                    <Text>Nilai state saat ini: {currentValue}</Text>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.plus() }
                    >
                        <Text style={{color:"#7FFF00"}}>
                            Tambah
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.minus() }
                    >
                        <Text style={{color:"#FF000"}}>
                            Kurang
                        </Text>
                    </TouchableOpacity>
                </View>

            )
        }
    }

    const styles=StyleSheet.create({
        button: {
            alignItems: "center",
            backgroundColor: "#808080",
            padding: 20,
            margin: 4,
        },
    });

    export default Counter;