import { View, Text, Image, Pressable, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { CATEGORIES } from '@/assets/categories'

const ListHeader = () => {
    return (
        <View className='gap-4'>
            <View className='flex-row justify-between items-center'>
                <View className='flex-row items-center'>
                    <View className='flex-row items-center'>
                        <Image source={require('../assets/images/profile.png')} className='w-10 h-10 rounded-full mr-4' />
                        <Text className='text-lg font-semibold'>Hello Avijit</Text>
                    </View>
                </View>
                <View className='flex-row items-center gap-3'>
                    <Link href={'/cart'} asChild className='p-4'>
                        <Pressable>
                            {({ pressed }) => (
                                <View className=''>
                                    <FontAwesome name='shopping-cart' size={25} color={'gray'} className='' />
                                    <View className='absolute bg-[#1BC464] w-4 h-4 rounded-full justify-center items-center -top-1.5 -right-2'>
                                        <Text className='text-white font-semibold text-sm'>1</Text>
                                    </View>
                                </View>
                            )}
                        </Pressable>
                    </Link>
                    <TouchableOpacity>
                        <FontAwesome name="sign-out" size={26} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
            <View className='w-full h-48 rounded-xl overflow-hidden bg-yellow-400'>
                <Image source={require('../assets/images/hero.png')} className='w-full h-full' resizeMode='cover' />
            </View>
            <View className=''>
                <Text className='font-semibold text-2xl'>Categories</Text>
                <FlatList data={CATEGORIES}
                    renderItem={({ item }) => (
                        <Link asChild href={`/categories/${item.slug}`}>
                            <Pressable className='w-24 mb-4 items-center'>
                                <Image source={{ uri: item.imageUrl }} className='w-16 h-16 rounded-full mb-2' resizeMode='cover' />
                                <Text className=''>{item.name}</Text>
                            </Pressable>
                        </Link>
                    )}
                    keyExtractor={(item) => item.name}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default ListHeader