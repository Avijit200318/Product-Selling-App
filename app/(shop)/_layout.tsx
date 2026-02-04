import Ionicons from "@expo/vector-icons/Ionicons"
import { Tabs } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const TabsLayout = () => {
    return (
        <SafeAreaView edges={["top"]} className="flex-1">
            <Tabs screenOptions={{
                tabBarActiveTintColor: "#1BC464",
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: {fontSize: 13},

                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 6,
                    height: 110
                }
            }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Shop",
                        headerShown: false,
                        tabBarIcon: ({color}) => <FontAwesome6 name="shop" size={24} color={color} />
                    }}
                />
                <Tabs.Screen
                    name="orders"
                    options={{
                        title: "orders",
                        headerShown: false,
                        tabBarIcon: ({color}) => <FontAwesome6 name="box" size={23} color={color} />
                    }}
                />
            </Tabs>
        </SafeAreaView>
    )
}

export default TabsLayout