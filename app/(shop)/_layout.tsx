import Ionicons from "@expo/vector-icons/Ionicons"
import { Tabs } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const TabsLayout = () => {
    return (
        <SafeAreaView edges={["top"]} className="flex-1">
            <Tabs screenOptions={{
                tabBarActiveTintColor: "#1BC464",
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: {fontSize: 14},

                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 10,
                    height: 115
                }
            }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Shop",
                        headerShown: false,
                        tabBarIcon: ({color}) => <FontAwesome name="shopping-cart" size={24} color={color} />
                    }}
                />
                <Tabs.Screen
                    name="orders"
                    options={{
                        title: "orders",
                        headerShown: false,
                        tabBarIcon: ({color}) => <FontAwesome6 name="box" size={24} color={color} />
                    }}
                />
            </Tabs>
        </SafeAreaView>
    )
}

export default TabsLayout