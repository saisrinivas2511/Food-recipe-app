import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from 'react-native';
import {images,COLORS,FONTS,SIZES} from "../constants";
import LinearGradient from 'react-native-linear-gradient';
import { CustomButton } from '../components/';
const Login = ({ navigation }) => {

    function renderHeader(){
        return(
            <View style={{height:SIZES.height>700 ? '65%':'60%'}}>

            <ImageBackground
            source={images.loginBackground} style={{flex:1,justifyContent:'flex-end'}} resizeMode="cover"
            >
                <LinearGradient start={{x:0,y:0}}
                end={{x:0,y:1}}
                colors={[COLORS.transparent,COLORS.black]}
                style={{height:200,
                justifyContent:'flex-end',
                paddingHorizontal:SIZES.padding
                }}
                >
                <Text style={{
                    width:'80%',
                    color:COLORS.white,
                    ...FONTS.largeTitle,
                    lineHeight:45
                }}>Cook Amazingly Delicious Food Easily</Text>

                </LinearGradient>
            </ImageBackground>
            </View>
        )
    }

    function renderDetail(){
        return(
            <View style={{flex:1,paddingHorizontal:SIZES.padding}}>
                {/* description */}
                <Text style={{
                            marginTop:SIZES.radius,
                            width:'70%',
                            color:COLORS.gray,
                            ...FONTS.body3

                }}>discover more than 1000 recipes in your hands and cook it easily!
                </Text>
                <View style={{flex:1,justifyContent:'center'}}>
                    {/* login button */}
                    <CustomButton buttonText="Login"
                    buttonContainerStyle={{
                        paddingVertical:18,
                        borderRadius:20
                        }}
                        colors={[COLORS.darkGreen,COLORS.lime]}
                        onPress={()=> navigation.replace('Home')}
                    />
                    {/* sign up button */}
                    <CustomButton buttonText="Sign Up"
                     buttonContainerStyle={{
                        marginTop:SIZES.radius,
                        paddingVertical:18,
                        borderRadius:20,
                        borderColor:COLORS.darkLime,
                        borderWidth:1 
                        }}
                        colors={[]}
                        onPress={()=> navigation.replace('Home')}
                    />
                </View>

            </View>
        )
    }
    return (
        <View
        style={{flex:1,backgroundColor:COLORS.black}}
        >
        <StatusBar barStyle={'light-content'}/>
        {renderHeader()}
        {renderDetail()}
        </View>
    )
}

export default Login;