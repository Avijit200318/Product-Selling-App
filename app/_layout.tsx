import { Stack } from "expo-router";
import "./global.css";
import Toast, { BaseToast, ErrorToast, InfoToast, SuccessToast} from 'react-native-toast-message';

export default function RootLayout() {
  
  // custom toast message
  const toastConfig = {
    success: (props: any) => (
      <SuccessToast 
        {...props}
        style={{
          width: '70%',
          borderLeftColor: "#32CD32"
        }}
        text1Style={{
          fontSize: 15
        }}
      />
    ),
    info: (props: any) => (
      <InfoToast
        {...props}
        style={{
          width: '94%',
          borderLeftColor: "#1877F2"
        }}
        text1Style={{
          fontSize: 15
        }}
      />
    )
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="(shop)"
          options={{ headerShown: false, title: "Shop" }}
        />
        <Stack.Screen name="categories"
          options={{ headerShown: false, title: "Categories" }}
        />
        <Stack.Screen
          name='product'
          options={{ headerShown: false, title: 'Product' }}
        />
        <Stack.Screen name="auth"
          options={{ headerShown: false, title: "Auth" }}
        />
        <Stack.Screen name="cart" options={{ presentation: "modal", title: "Shopping Cart" }} />
      </Stack>
      <Toast config={toastConfig} />
    </>
  )
}
