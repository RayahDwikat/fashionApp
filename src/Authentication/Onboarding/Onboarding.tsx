import React from 'react';
import {View, StyleSheet, Dimentions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Slide from "./Slide";

const {width,height} = Dimentions.get("window");
const Onboarding = () =>{
    return(
        <View>
            <View style={styles.slider}
                <ScrollView 
                horezontal 
                snapToInterval={width} 
                decelerationRate="fast"
                 showsHorezentalScrollIndicator={false} 
                 bounces={false}
                 >
                    <Slide label= "Relaxed"/>
                    <Slide label= "Playful" right/>
                    <Slide label= "Excentric"/>
                    <Slide label= "Funkey" right/>

                </ScrollView>
            </View>
            <View style={styles.footer}>
              <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor:'cyan'}} ></View>
              <View style={{flex:1, backgroundColor:'white', borderTopLeftRadius:75}}></View>
            </View>
        </View>
    )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',

    },
    slider:{
        height:0.61 * height,
        backgroundColor:'cyan',
        borderBottomRightRadius:75,
    },
    footer:{
        flex:1,

    },

});


export default Onboarding;