import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Tts from 'react-native-tts'
import { LogBox } from 'react-native';

export const HomeScreen = () => {

    const [text, settext] = useState('')
    LogBox.ignoreLogs(['new NativeEventEmitter'])
    LogBox.ignoreAllLogs();


    Tts.setDefaultLanguage('es-ES')
    Tts.setDefaultVoice('es-us-x-sfb#female_1-local')
    Tts.setDefaultRate(0.8, true)
    Tts.setDucking(true);

    const startSpeech = () => {

        if (text.length > 0) {
            Tts.speak(text);
        } else {
            Tts.speak('Debes escribir algo para que yo lo diga');
        }
    }

    const deleteAll = () => {
        settext('')
    }

    const stopSpeech = () => {
        Tts.stop()
    }

    return (

        <View style={styles.container}>

            <TextInput style={styles.boxTxt}
                multiline
                scrollEnabled
                placeholder='Escribe lo que quieres decir'
                onChangeText={settext} value={text}  >
            </TextInput>

            <TouchableOpacity style={styles.button} onPress={startSpeech} >
                <Text style={styles.btnTxt}>Hablar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={stopSpeech} >
                <Text style={styles.btnTxt}>Parar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={deleteAll} >
                <Text style={styles.btnTxt}>Borrar todo</Text>
            </TouchableOpacity>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    button: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        width: '70%',
        padding: 20,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 24,

    },
    boxTxt: {
        backgroundColor: 'white',
        color: '#C40C69',
        height: '50%',
        width: '90%',
        textAlign: 'left',
        justifyContent: 'flex-start',
        borderRadius: 25,
        fontSize: 20,
        fontWeight: '600',
        padding: 10,
        textAlignVertical: 'top',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 24,
    },
    btnTxt: {
        textTransform: 'uppercase',
        fontWeight: '800',
        color: '#C40C69'
    }
});