import { View, Text, Button } from 'react-native'
import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'
export default function Header() {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Header</Text>
      <Button title="Header" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
    </View>
  )
}