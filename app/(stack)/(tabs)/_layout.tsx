import { Drawer } from 'expo-router/drawer'
import {Tabs, Stack } from "expo-router"
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {

    return (
        <Tabs initialRouteName='index4'>
            <Tabs.Screen name='index4' />
        </Tabs>
    )
}