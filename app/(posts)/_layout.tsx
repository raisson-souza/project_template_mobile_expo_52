import { Stack } from "expo-router"
import AuthRoute from "@/components/auth/Auth"

const StackScreensStyle = {
    /** Cor do header */
    headerStyle: { backgroundColor: "darkblue" },
    /** Cor do título do header */
    headerTintColor: "white",
}

export default function RootLayout() {
    return (
        <AuthRoute>
            <Stack
                initialRouteName='posts'
                screenOptions={ StackScreensStyle }
            >
                <Stack.Screen name='posts' options={{ headerShown: false }} />
                <Stack.Screen name='[id]/post' options={{ headerShown: true }} />
            </Stack>
        </AuthRoute>
    )
}