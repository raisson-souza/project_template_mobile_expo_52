import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View style={{ gap: 15 }}>
            <Text>INDEX 3</Text>
            <Link href="/">index</Link>
            <Link href="/index4">index4</Link>
        </View>
    )
}