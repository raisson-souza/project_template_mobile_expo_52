import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View style={{ gap: 15 }}>
            <Text>INDEX 2</Text>
            <Link href="/">index1</Link>
        </View>
    )
}