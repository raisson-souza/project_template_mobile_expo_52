import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View style={{ gap: 15 }}>
            <Text>INDEX 4</Text>
            <Link href="/">index</Link>
            <Link href="/index3">index 3</Link>
        </View>
    )
}