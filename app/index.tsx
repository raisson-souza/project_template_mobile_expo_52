import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View style={{ gap: 15 }}>
            <Text>INDEX</Text>
            <Link href="/index2">index2</Link>
        </View>
    )
}