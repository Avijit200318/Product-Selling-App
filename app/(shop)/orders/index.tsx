import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import { ORDERS } from '@/assets/orders'
import { Href, Link } from 'expo-router'
import OrderCard from '@/components/OrderCard'

const order = () => {
  return (
    <View className='flex-1 pb-4'>
      <FlatList data={ORDERS}
        renderItem={({item}) => (<OrderCard item={item} />)}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default order