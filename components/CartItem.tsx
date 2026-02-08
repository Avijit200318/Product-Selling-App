import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CartItemPropesType } from '@/app/cart'

const CartItem = ({ item, onRemove, onDecrement, onIncrement }: CartItemPropesType) => {
    return (
        <View className='flex-row items-center mb-4 p-4 rounded-md bg-[#f9f9f9]'>
            <Image source={item.image} className='w-20 h-20 rounded' />
            <View className='flex-1 ml-4'>
                <Text className='font-semibold text-lg mb-1'>{item.title}</Text>
                <Text className='text-[#888]'>₹{item.price}</Text>
                <View className='flex-row items-center gap-2 mt-2'>
                    <TouchableOpacity onPress={()=> onDecrement(item.id)} className='w-8 h-8 bg-[#ddd] rounded-full items-center justify-center'>
                        <Text className='font-bold text-lg'>-</Text>
                    </TouchableOpacity>
                    <Text className='text-lg'>{item.quantity}</Text>
                    <TouchableOpacity onPress={()=> onIncrement(item.id)}  className='w-8 h-8 bg-[#ddd] rounded-full items-center justify-center'>
                        <Text className='font-bold text-lg'>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={()=> onRemove(item.id)} className='bg-[#ff5252] px-4 py-2 rounded-md'>
                <Text className='text-white font-semibold'>Remove</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartItem