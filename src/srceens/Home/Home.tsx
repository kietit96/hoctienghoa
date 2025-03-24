import ButtonIcon from '@comps/Buttons/ButtonIcon'
import { View, StyleSheet, TextInput } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import Color from '@/constants/color';
export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <View style={styles.button}>
                    <ButtonIcon>
                        <Feather name="search" size={24} color="#FFF" />
                    </ButtonIcon>
                </View>
                <View style={styles.search_input_form}>
                    <TextInput placeholderTextColor={"#FFF"} style={styles.search_input} placeholder='Search....' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        backgroundColor: Color.light_primary_blue,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        flex: 1
    },
    search_input_form: {
        flex: 6,
    },
    search_input: {
        color: '#FFF',
    }
})