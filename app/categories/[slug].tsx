import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { Href, Redirect, Stack, useLocalSearchParams } from 'expo-router'
import { CATEGORIES } from '@/assets/categories';
import { PRODUCTS } from '@/assets/products';
import ProductCard from '@/components/ProductCard';

const Category = () => {
  const {slug} = useLocalSearchParams<{slug: string}>();

  const category = CATEGORIES.find((item) => item.slug === slug);

  if(!category) return <Redirect href={'/+not-found' as Href} />

  const products = PRODUCTS.filter((product) => product.category.slug === slug)
  console.log(products)

  return (
    <View className='flex-1 bg-[#fff] p-4'>
      <Stack.Screen options={{ title: category.name, headerTitleAlign: "center" }} />
      <Image source={{uri: category.imageUrl}} className='w-full h-48 rounded-lg mb-6' resizeMode='cover' />
      <Text className='text-xl font-semibold mb-4'>{category.name}</Text>
      <FlatList data={products}
        renderItem={({item}) => ( <ProductCard product={item} />)}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between"
        }}
      />
    </View>
  )
}

export default Category