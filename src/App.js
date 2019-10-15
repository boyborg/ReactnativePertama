import React from 'react';
import{
    View,
    ScrollView,
    SafeAreaView,
    Text
    }from 'react-native';

    import ProEx from './Propex';
    import Pros from './Ruang';
    import AppStateless from './AppStateless';

class App extends React.Component{

    render(){
        
        console.log("Hello World")
        alert("myboy")
        return(
        <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
                <ProEx nama="pro" alamat="bandung" email="pro89@yahoo.com" telp="083837372"/>
                <ProEx nama="bram" alamat="bogor" email="pbarmos89@yahoo.com" telp="0823322372"/>
                <ProEx nama="jarpos" alamat="padang" email="jaris@yahoo.com" telp="083823322"/>
                <ProEx nama="jintos" alamat="NTT" email="nusajin@yahoo.com" telp="08834452"/>
                <ProEx nama="lars" alamat="serpong" email="lars989@yahoo.com" telp="08566337372"/>
                <Pros namaRuang="Segitiga" rumusLuas="1/2 x alas x tinggi" rumusKeliling="a + b + c"/>
                <Pros namaRuang="Persegi" rumusLuas="s × s" rumusKeliling="4 × s"/>
                <Pros namaRuang="Persegi Panjang" rumusLuas="p x l" rumusKeliling="2 x ( p + l )"/>
                <Pros namaRuang="Segi Delapan" rumusLuas="(2+2√2)s²" rumusKeliling="8s"/>
                <Pros namaRuang="Segi Enam" rumusLuas="(3√3 s2)/2" rumusKeliling="6s"/>
                <AppStateless nama="Randy" alamat="Bogor" email="ranforit@yahoo.com" telp="083232372"/>
                                
            </View>

            </ScrollView>
            </SafeAreaView>
        );

        


    } 

}

export default App;


