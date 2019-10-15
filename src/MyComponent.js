import React from 'react';
import{
    View,    
    Text
    }from 'react-native';

    class MyComponent extends React.Component{//Life Cycle React Native

        constructor(){ //#1
            super()
            this.name="My Cool Component"
        }
        
        componentWillMount(){
            this.name="Ubah Nama Komponen"; //#2
        }

        render(){ //view on device
            return(
                <View>
                    <Text>{this.name}</Text>
                </View>
            );
        }
    }
    export default MyComponent;