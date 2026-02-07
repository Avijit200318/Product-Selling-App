import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Redirect, Stack, useLocalSearchParams } from 'expo-router'
import Toast from 'react-native-toast-message';
import { PRODUCTS } from '@/assets/products';
import { useCartStore } from '@/store/cartStore';

const ProductDetails = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>()

  const product = PRODUCTS.find((product) => product.slug === slug);
  if (!product) return <Redirect href='/+not-found' />

  const { addItem, items, incrementItem, decrementItem } = useCartStore();

  const cartItem = items.find((item) => item.id === product.id);

  const initialQuantity = cartItem ? cartItem.quantity : 1;

  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const totalPrice = (product.price * quantity).toFixed(2);

  const increaseQantity = () => {
    if(quantity < product.maxQuantity){
      setQuantity((prev) => prev + 1);
      incrementItem(product.id);
    }else{
      Toast.show({
        type: 'info',
        text1: 'Cannot add more than maximum quantity',
        position: 'top',
        autoHide: true
      })
    }
  }

  const decreaseQuantity = () => {
    if(quantity > 1){
      setQuantity((prev) => prev - 1);
      decrementItem(product.id);
    }
  }

  const addedToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      image: product.heroImage,
      price: product.price,
      quantity
    });
    Toast.show({
      type: "success",
      text1: "Added to Cart",
      position: "top",
      autoHide: true
    })
  }

  return (
    <View className='flex-1 bg-[#fff]'>
      <Stack.Screen options={{ title: product.title, headerTitleAlign: "center" }} />
      <Image source={product.heroImage} className='w-full h-[17rem]' resizeMode='cover' />
      <View className='flex-1 p-6'>
        <Text className='text-xl font-semibold mb-2'>Title: {product.title}</Text>
        <Text className='text-[#555] mb-4'>Slug: {product.slug}</Text>
        <View className='flex-row items-center justify-between mb-8'>
          <Text className='font-semibold'>Unit Price: ₹{product.price}</Text>
          <Text className='font-semibold'>Total Price: ₹{totalPrice}</Text>
        </View>

        <FlatList data={product.imagesUrl}
          renderItem={({ item }) => (<Image source={item} className='w-36 h-36 mr-4 rounded-md bg-gray-400' resizeMode='cover' />)}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsVerticalScrollIndicator={false}
          className='mb-4'
        />

        <View className='flex-row items-center px-2 gap-6'>
          <TouchableOpacity onPress={decreaseQuantity} disabled={quantity <= 1} className='w-8 h-8 bg-[#007bff] rounded-full items-center justify-center'>
            <Text className='text-white font-bold text-lg'>-</Text>
          </TouchableOpacity>
          <Text className='font-bold text-lg'>{quantity}</Text>
          <TouchableOpacity onPress={increaseQantity} disabled={quantity >= product.maximumQuantity} className='w-8 h-8 bg-[#007bff] rounded-full items-center justify-center'>
            <Text className='text-white font-bold text-lg'>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={addedToCart} disabled={quantity === 0} className={`${quantity === 0 ? 'opacity-50' : 'opacity-100'} flex-1 bg-[#28a745] rounded-md p-2 items-center justify-center`}>
            <Text className='text-white font-semibold text-lg'>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductDetails