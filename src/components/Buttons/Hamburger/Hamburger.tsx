import { TouchableOpacity, StyleSheet } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Color from '@/constants/color';
export default function Hamburger({ onPress }: { onPress: () => void }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <FontAwesome6 style={styles.icon} name="bars" color="black" />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: Color.primary_yellow,
        width: 46,
        height: 46,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: '#f2f2f2',
        fontSize: 30,
    }
})