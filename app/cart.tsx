import { View, Text, Alert, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { CartItemType, useCartStore } from '@/store/cartStore'
import CartItem from '@/components/CartItem';


export type CartItemPropesType = {
  item: CartItemType,
  onRemove: (id: number) => void,
  onIncrement: (id: number) => void,
  onDecrement: (id: number) => void,
}

const cart = () => {

  const { items, removeItem, incrementItem, decrementItem, getTotalPrice } = useCartStore();

  const handleCheckout = () => {
    Alert.alert("Processing to Checkout", `Total ammount: ₹${getTotalPrice()}`);
  }

  return (
    <View className='flex-1 bg-[#fff]'>
      <FlatList data={items}
        renderItem={({ item }) => (<CartItem item={item} onRemove={removeItem} onDecrement={decrementItem} onIncrement={incrementItem} />)}
        keyExtractor={(item) => item.id.toString()}
        className='py-4'
      />

      <View className='border-t-2 border-[#ddd] p-4 items-center'>
        <Text className='font-semibold pb-4 text-xl'>Total: ₹{getTotalPrice()}</Text>
        <TouchableOpacity onPress={handleCheckout} className='bg-[#28a745] py-3 px-6 rounded-md '>
          <Text className='text-white font-semibold text-lg'>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default cart