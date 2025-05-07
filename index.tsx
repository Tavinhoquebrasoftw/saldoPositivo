import { Image, ImageBackground } from "react-native";
import { View } from "react-native-animatable";
const im = require("../assets/splash-icon.png");

export function Index(){
    return(
       <ImageBackground source={im}>

       </ImageBackground>
    );
}

export default Index;