import React  from 'react';
import{
    View,
    StyleSheet, // menginput text
    Text,
    Button
    }from 'react-native';

    export default class AlignItemBasic extends React.Component{
        render(){
            return(
                <View style={styles.container}>
                    <Text style={styles.headerStyle}>Align Item:Flex center</Text>
                    <View
                    style={[{flexDirection: 'column',alignItems:'center'}, styles.elementsContainer]}>
                        <View style={styles.red}/>
                        <View style={styles.green}/>
                        <View style={styles.yellow}/>
                    </View>
                </View>
            );

            
            }
            
        }
    const styles =StyleSheet.create({
        green :{
        backgroundColor: '#32B76C',
        height: 50,
        width:100
                },

        yellow :{
        backgroundColor: '#FAA030',
        height: 50,
        width:100
                },
        red :{
        backgroundColor: '#EE2C38',
        height: 50,
        width:80
                },
        container: {
            marginTop:48,
            flex:1
        },
        headerStyle: {
            fontSize: 24,
            textAlign: 'center',
            fontWeight: '300',
            marginBottom: 24
        },
        elementsContainer: {
            flex:1,
            backgroundColor: '#ecf5fd',
            marginLeft:24,
            marginRight:24,
            marginBottom:24
        }

       
    
    });

    