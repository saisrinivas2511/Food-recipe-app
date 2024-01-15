import React from 'react'
import { View,TouchableOpacity,Text,Image } from 'react-native'
import { COLORS,FONTS,SIZES } from '../constants'

const CategoryCard=({containerStyle,categoryItem,onPress})=> {
  return (
    <TouchableOpacity style={{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        marginTop:10,
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.gray2,
        ...containerStyle

    }}onPress={onPress}>
    <Image source={categoryItem.image}
        resizeMode="cover"
        style={{
            width:100,
            height:100,
            borderRadius:SIZES.radius
        }}
    />
        <View style={{
            width:"65%",
            paddingHorizontal:20
        }}>
            <Text style={{flex:1,
            ...FONTS.body2,
            
            color:COLORS.black}}>{categoryItem.name}</Text>

            <Text style={{
                color:COLORS.black,
                ...FONTS.body4
            }}>{categoryItem.duration} | {categoryItem.serving} Serving</Text>
        </View>
    </TouchableOpacity>
  )
}
export default CategoryCard;