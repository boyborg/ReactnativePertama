import React from 'react'; //contoh state
import{
    View,
    TouchableOpacity,    //agar text dapat disentuh
    Text
    }from 'react-native';

    //component state bersifat private
    class ComponentState extends React.Component{//Life Cycle React Native

        constructor(){ //#1
            super()
            this.state={name:"boy"} //inisialisasi state
        }
        
        componentWillMount(){
            this.setState({name:"jack"}); //#2
        }

        render(){ //3 read component state menggukan this.state.<nama state>
            return(
                <View>
                    <TouchableOpacity> 
                    <Text>{this.state.name}</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
    export default ComponentState;