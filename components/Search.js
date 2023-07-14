import React from 'react';
import { TextInput, View,FlatList} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Search = () => {
    return (
        <View className=' mx-4 py-4 '>
            <View className='flex-row items-center rounded-sm bg-gray-200 gap-1'>
                <Icon name='search1' size={20} color='#c5cace'/>
                <TextInput placeholder='搜索' className='flex-1 text-lg pb-1'/>
            </View>
        </View>
    );
};

export default Search;