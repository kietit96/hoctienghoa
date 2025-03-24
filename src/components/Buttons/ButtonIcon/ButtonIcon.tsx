
import { Tchildren } from '@/types'
import { StyleSheet, TouchableOpacity } from 'react-native'
interface TbuttonIconProps extends Tchildren {
    onPress?: () => void | unknown
}
export default function ButtonIcon(props: TbuttonIconProps) {
    const { children, onPress } = props
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        fontSize: 15,
        paddingLeft: 10,
    }
})