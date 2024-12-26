import { Screen } from "@/components/base/Screen"
import { useEffect } from "react"
import { useLocalSearchParams, useNavigation } from "expo-router"
import Box from "@/components/base/Box"
import TextBold from "@/components/base/TextBold"

export default function PostScreen() {
    const { id } = useLocalSearchParams<{ id: string }>()
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({ title: `Post ${ id }` })
    }, [])

    return (
        <Screen>
            <Box.Column>
                <TextBold>TELA DO POST</TextBold>
                <TextBold>POST { id }</TextBold>
            </Box.Column>
        </Screen>
    )
}