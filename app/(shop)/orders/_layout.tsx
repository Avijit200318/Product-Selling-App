import { Stack } from "expo-router";

const OrdersLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{headerShown: true, title: "Orders", headerTitleAlign: "center"}}
            />
            <Stack.Screen
                name="[slug]"
                options={{headerShown: true, title: "Orderdetails"}}
            />
        </Stack>
    )
}

export default OrdersLayout;