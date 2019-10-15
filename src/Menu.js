import React from 'react';
import{
    View,
    TextInput, // menginput text
    Text,
    Button
    }from 'react-native';

    import Pajak from './Pajak';
    import Persegi from './Persegi';

    class Menu extends React.Component{
        state={menu:null};

        getMenu(){
            if(menu=='ruang'){
                
            }

        }

        render(){

            return(
                <View>
            <TouchableOpacity> 
                    <Text>{this.state.name}</Text>
            </TouchableOpacity>
                    </View>
            );
        }

    }