import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import z, { file } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from '@/schemas/signUpSchema';

const auth = () => {

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSignIn = async (data: z.infer<typeof signUpSchema>) => {
    console.log("data: ", data)
  }

  const onSignUp = async (data: z.infer<typeof signUpSchema>) => {
    console.log("data: ", data)
  }

  return (
    <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1603163768210-60e522c7e1a5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} className='flex-1 justify-center items-center' resizeMode='cover'>
      <View className='bg-black absolute z-0 w-full h-full top-0 left-0 opacity-30' />
      <View className='items-center justify-center p-4 w-full mb-4'>
        <Text className='text-white font-bold text-4xl mb-2'>Welcome</Text>
        <Text className='text-[#ddd] text-lg font-semibold'>Please Authenticate to continue</Text>
      </View>

      <Controller control={form.control} name='email' render={({ field, fieldState }) => (
        <>
          <TextInput placeholder='Email'
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            placeholderTextColor="#aaa"
            autoCapitalize='none'
            editable={!form.formState.isSubmitting}
            className='w-[90%] p-4 rounded-md bg-[#ffffffe6] text-[#000] mb-4 '
          />
          {fieldState.error && <Text className='font-semibold text-red-600 text-start w-[90%] mb-2'>{fieldState.error.message}</Text>}
        </>
      )} />
      <Controller control={form.control} name='password' render={({ field, fieldState }) => (
        <>
          <TextInput placeholder='Pasword'
            secureTextEntry={true}
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            placeholderTextColor="#aaa"
            autoCapitalize='none'
            editable={!form.formState.isSubmitting}
            className='w-[90%] p-4 rounded-md bg-[#ffffffe6] text-[#000] mb-4 '
          />
          {fieldState.error && <Text className='font-semibold text-red-600 text-start w-[90%] mb-2'>{fieldState.error.message}</Text>}
        </>
      )} />
      <TouchableOpacity onPress={form.handleSubmit(onSignIn)} disabled={!form.formState.isSubmitting} className='bg-[#6a1b9a] p-4 rounded-md w-[90%] items-center mb-4'>
        <Text className='text-white font-semibold text-lg'>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={form.handleSubmit(onSignUp)} disabled={!form.formState.isSubmitting} className='bg-transparent border-2 border-white rounded-md w-[90%] px-4 py-3 items-center'>
        <Text className='text-white font-semibold text-lg'>Sign up</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default auth