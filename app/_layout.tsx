import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(shop)" 
        options={{ headerShown: false, title: "Shop"}} 
      />
      <Stack.Screen name="categories"
        options={{ headerShown: false, title: "Categories"}}
      />
      <Stack.Screen name="auth"
        options={{ headerShown: false, title: "Auth"}}
      />
      <Stack.Screen name="cart" options={{ presentation: "modal", title: "Shopping Cart"}} />
    </Stack>
  )
}
