import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Product } from '@/interfaces/interfaces'
import { Link } from 'expo-router'

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Link asChild href={`/product/${product.slug}`}>
            <Pressable className='w-[48%] bg-white rounded-lg my-2 overflow-hidden'>
                <View className='w-full h-32 rounded-md'>
                    <Image source={product.heroImage} className='w-full h-full' resizeMode='cover' />
                </View>
                <View className='px-3 py-2 items-start gap-1'>
                    <Text className='text-[#888]'>{product.title}</Text>
                    <Text className='font-semibold'>₹{product.price}</Text>
                </View>
            </Pressable>
        </Link>
    )
}

export default ProductCard