import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Color from '@/constants/color'
import Hamburger from '@comps/Buttons/Hamburger'
interface Iprops {
  title: string
}
export default function Header(props: Iprops) {
  const { title } = props
  const navigation = useNavigation()
  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.hamburger}>
          <Hamburger onPress={toggleDrawer} />
        </View>
        <View style={styles.titleContent}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: Color.primary_blue
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburger: {
    flex: 1,
  },
  titleContent: {
    flex: 4,
  },
  title: {
    color: '#FFF',
    fontSize: 20
  }
})