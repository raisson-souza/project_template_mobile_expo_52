import { Drawer } from 'expo-router/drawer'
import {Tabs, Stack } from "expo-router"
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {

    return (
        <Stack initialRouteName='(tabs)'>
            <Stack.Screen name='(tabs)' />
            <Stack.Screen name='index3' />
        </Stack>
    )
}