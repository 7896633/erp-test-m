import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, ImageBackground, Pressable, SafeAreaView, Text, View} from 'react-native';
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Lists from "./components/Lists";
import Await from "./components/Await";
import Board from "./components/Board";

export default function App() {
    return (
        <View className="bg-[#f2f2f2]">
            <StatusBar style="auto" />
            <Text></Text>
            <SafeAreaView/>
           <Navbar/>
            <Search/>
            <View className='bg-white rounded-xl'>
                <Lists/>
            </View>
            <View className='bg-white rounded-xl my-4'>
                <Await/>
            </View>
            <View className='bg-white rounded-xl my-4'>
                <Board/>
            </View>
        </View>
    );
}
