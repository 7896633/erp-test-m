import React from 'react';
import {FlatList, Pressable, Text, View} from "react-native";


const list=[
    {
        id:1,
        title:'销售金额',
        mun:'0.00',
        percent:'环比0.00%'
    },
    {
        id:2,
        title:'毛利',
        mun:'0.00',
        percent:'毛利率0.0%'
    },
    {
        id:3,
        title:'订单金额',
        mun:'0.00',
        percent:'环比0.00%'
    },
    {
        id:4,
        title:'销售收款',
        mun:'0.00',
        percent:'毛利率0.0%'
    },
    {
        id:5,
        title:'毛利',
        mun:'0.00',
        percent:'环比0.00%'
    },
    {
        id:6,
        title:'毛利',
        mun:'0.00',
        percent:'毛利率0.0%'
    },
]

const Board = () => {
    return (
        <View className=' '>
            <Text className='text-2xl font-[700] pl-4 py-2'>
                销售看板
            </Text>
            <FlatList
                numColumns={2}
                columnWrapperStyle={{justifyContent:'space-between'}}
                data={list}
                renderItem={({item,index})=>(
                    <Pressable key={item.id} className='rounded-2xl flex items-center justify-center border m-2 w-[160px] h-20'>
                        <Text className=''>
                            {item.title}
                        </Text>
                        <Text className='text-2xl font-[700]'>
                            {item.mun}
                        </Text>
                        <Text className=''>
                            {item.percent}
                        </Text>
                    </Pressable>
                )}
            />

        </View>
    );
};

export default Board;