import React from 'react';
import {Text, Dimensions, StyleSheet, View, Image, FlatList, Pressable, ImageBackground} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const list=[
    {
        id:1,
        title:'销售订单',
        image:require('../assets/image/list1.png')
    },
    {
        id:2,
        title:'销售出库',
        image:require('../assets/image/list2.png')
    },
    {
        id:3,
        title:'销售退货',
        image:require('../assets/image/list3.png')
    },
    {
        id:4,
        title:'采购订单',
        image:require('../assets/image/list4.png')
    },
    {
        id:5,
        title:'采购订单',
        image:require('../assets/image/list5.png')
    },
    {
        id:6,
        title:'科目余额',
        image:require('../assets/image/list6.png')
    },
    {
        id:7,
        title:'客户列表',
        image:require('../assets/image/list7.png')
    },
    {
        id:8,
        title:'移仓单',
        image:require('../assets/image/list8.png')
    },
]


const Lists = () => (
    <View className='flex items-center justify-center'>
       <FlatList
           numColumns={4}
           columnWrapperStyle={{justifyContent:'space-between'}}
           data={list}
           renderItem={({item,index})=>(
               <Pressable key={index} className='p-4 flex items-end justify-center'>
                   <ImageBackground
                       imageStyle={{borderRadius:8}}
                       style={{width:50,height:50}}
                       source={item.image}
                   />
                   <Text className='pt-1 pl-1'>
                       {item.title}
                   </Text>
               </Pressable>
           )}
       />

    </View>
);



export default Lists;