import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { Redirect, Stack, useLocalSearchParams } from 'expo-router'
import { ORDERS } from '@/assets/orders';
import { statusDisplayText, statusDisplayTextStyle } from '@/components/OrderCard';

type statusDisplayTextType = keyof typeof statusDisplayText
type statusDisplayTextStyleType = keyof typeof statusDisplayTextStyle

const OrderDetails = () => {

    const {slug} = useLocalSearchParams<{slug: string}>();

    const order = ORDERS.find((order) => order.slug === slug);

    if(!order) return <Redirect href={"/+not-found"} />

  return (
    <View className='flex-1 p-4 bg-[#fff]'>
        <Stack.Screen options={{title: order.item, headerTitleAlign: "center"}} />
        <Text className='font-semibold text-xl'>{order.item}</Text>
        <Text className='mb-2'>{order.details}</Text>
        <View className='items-start'>
            <Text className="font-semibold py-1 px-2 text-white rounded-md" style={{backgroundColor: statusDisplayTextStyle[order.status as statusDisplayTextStyleType]}}>{statusDisplayText[order.status as statusDisplayTextType]}</Text>
        </View>
        <Text className='text-[#555] mt-2'>{order.date}</Text>
        <Text className='font-semibold mt-4 mb-2 text-xl'>Items Ordered:</Text>
        <FlatList data={order.items}
        renderItem={({item}) => (
            <View className='flex-row justify-between items-center mt-2 p-4 bg-[#f8f8f8] rounded-md'>
                <Image source={item.heroImage} className='w-[40%] h-36 rounded-md' resizeMode='cover' />
                <View className=''>
                    <Text className='font-semibold text-lg'>{item.title}</Text>
                    <Text className='mt-1'>Price: ₹{item.price}</Text>
                </View>
            </View>
        )}
        keyExtractor={(item)=> item.id.toString()}
        />
    </View>
  )
}

export default OrderDetails