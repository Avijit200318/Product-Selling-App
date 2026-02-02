import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const CategoriesLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="[slug]"
                options={{
                    headerShown: true,
                    headerLeft: () => (
                        <TouchableOpacity onPress={router.back}>
                            <Ionicons name="arrow-back" size={24} color='black'/>
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack>
    )
}

export default CategoriesLayout;