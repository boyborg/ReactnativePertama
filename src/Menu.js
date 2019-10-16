import React from 'react';
import{
    View,
    StyleSheet,
    Text,
    TouchableOpacity
    }from 'react-native';

    import Pajak from './Pajak';
    import Persegi from './Persegi';

    class Menu extends React.Component{
        state={menu:null};

        getMenu(){
            if(this.state.menu=='Pajak'){
               return(<Pajak/>); 
            }
            else if(this.state.menu=='Ruang'){
                return(<Persegi/>);
            }
            

        }

        render(){

            return(
                <View>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => this.setState({menu:'Pajak'}) }> 
                    <Text>pajak</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => this.setState({menu:'Ruang'}) }> 
                    <Text>Ruang</Text>
            </TouchableOpacity>













            
            {this.getMenu()}
                    </View>
            );
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
    export default Menu;