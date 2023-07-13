import React from 'react';
import {Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Navbar = () => {
    return (
        <View className='flex-row items-center  justify-between px-4 pt-4'>
            <View className='flex-row items-center'>
                <Text className='text-2xl'>chaoliao专用</Text>
                <Icon name="menu-down" size={30} />
            </View>
            <View className='flex-row items-center gap-4'>
                <Icon name='line-scan' size={30}/>
                <Icon name="message-text-outline" size={30} />
            </View>
        </View>
    );
};

export default Navbar;