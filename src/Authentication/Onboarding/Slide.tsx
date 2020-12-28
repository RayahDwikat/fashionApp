import React from "react";
import { View, Text } from "react-native";


interface SlideProps {}
label:string;
right?:boolean;
}
const Slide =({ label , right }:SlideProps)=>{
    return <View style={{width}}>
        <Text>{label}</Text>
        </View>

};
const styles =StyleSheet.create({
    container:{

    }
})

export default Slide;
