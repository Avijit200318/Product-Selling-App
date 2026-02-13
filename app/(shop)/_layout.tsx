import Ionicons from "@expo/vector-icons/Ionicons"
import { Redirect, Tabs } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useAuth } from "@/providers/auth-provider";
import { ActivityIndicator } from "react-native";

const TabsLayout = () => {
    // check
    const {session, mounting} = useAuth();

    if(mounting) return <ActivityIndicator />
    if(!session) return <Redirect href={'/auth'} />

    return (
            <Tabs screenOptions={{
                tabBarActiveTintColor: "#1BC464",
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: {fontSize: 13},

                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 6,
                    height: 70
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
    )
}

export default TabsLayout