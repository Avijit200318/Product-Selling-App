import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Href, Link } from 'expo-router'
import { Order, OrderStatus } from '@/interfaces/interfaces'

export const statusDisplayText: Record<OrderStatus, string> = {
    Pending: "Pending",
    Completed: "Completed",
    Shipped: "Shipped",
    InTransit: "In Transit"
};

export const statusDisplayTextStyle: Record<OrderStatus, string> = {
    Pending: "#ffcc00",
    Completed: "#4caf50",
    Shipped: "#2196f3",
    InTransit: "#ff9800"
}

const OrderCard = ({item}: {item: Order}) => {
    return (
        <Link href={`/orders/${item.slug}` as Href} asChild>
            <Pressable className='bg-[#f8f8f8] p-4 my-3 rounded-md'>
                <View className='flex-row justify-between items-center'>
                    <View className='flex-1'>
                        <Text className='font-semibold text-lg'>{item.item}</Text>
                        <Text className='text-[#555]'>{item.details}</Text>
                        <Text className='text-sm text-[#888] mt-2'>{item.date}</Text>
                    </View>
                    <View className=''>
                        <Text className="font-semibold py-1 px-2 text-white rounded-md" style={{backgroundColor: statusDisplayTextStyle[item.status]}}>{statusDisplayText[item.status]}</Text>
                    </View>
                </View>
            </Pressable>
        </Link>
    )
}

export default OrderCard