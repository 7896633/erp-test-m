import React from 'react';
import {FlatList, ImageBackground, Pressable, Text, View} from "react-native";
import Lists from "./Lists";

const list=[
    {
        id:1,
        title:'待审核销售订单',
        mun:'1'
    },
    {
        id:2,
        title:'待出库',
        mun:'2'
    },
    {
        id:3,
        title:'待审出库',
        mun:'0'
    },
    {
        id:4,
        title:'待审核售后退货',
        mun: '0'
    },
    {
        id:5,
        title:'待审销售换货申请',
        mun:'0'
    },
    {
        id:6,
        title:'待审采购订单',
        mun:'1'
    },
]

const Await = () =>{

    return(
        <View className=' '>
            <Text className='text-2xl font-[700] pl-4 py-2'>
                我的待办
            </Text>
            <FlatList
                numColumns={3}
                columnWrapperStyle={{justifyContent:'space-between'}}
                data={list}
                renderItem={({item,index})=>(
                    <Pressable key={item.id} className='rounded-2xl flex items-center justify-center border m-2 w-[104px] h-20'>
                        <Text className='font-[700] text-3xl'>
                            {item.mun}
                        </Text>
                        <Text className={`${item.title.length>7 ? 'text-xs':'text-md'}`}>
                            {item.title}
                        </Text>
                    </Pressable>
                )}
            />

        </View>
    )
};
export default Await;