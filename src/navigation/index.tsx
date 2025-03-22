import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Home } from '@/srceens'
import { public_link } from './router'
import { Header } from '@comps/export'
const Drawer = createDrawerNavigator()
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                {public_link.map((item, index) => {
                    return <Drawer.Screen key={index} name={item.name} component={item.component} options={{
                        header: () => <Header />
                    }} />
                })}

            </Drawer.Navigator>
        </NavigationContainer>
    )
}