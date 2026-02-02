import Ionicons from "@expo/vector-icons/Ionicons"
import { Tabs } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

const TabsLayout = () => {
    return (
        <SafeAreaView className="flex-1">
            <Tabs>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "index",
                        headerShown: false,
                        tabBarIcon: () => <Ionicons name="home" size={28} />
                    }}
                />
                <Tabs.Screen
                    name="orders"
                    options={{ title: "orders", headerShown: false }}
                />
            </Tabs>
        </SafeAreaView>
    )
}

export default TabsLayout