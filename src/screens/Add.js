import * as React from 'react';
import * as RN from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../config/fb';
import { useNavigation } from '@react-navigation/native'

export default function Add() {

    const navigation = useNavigation();

    const [isOpen, setIsOpen] = React.useState(false);

    const [newItem, setNewItem] = React.useState({
        name: '',
        ubicacion: '',
        descripcion: '',
        price: 0,
        isSold: false,
        createdAt: new Date(),
    });

    const onSend = async () => {
        await addDoc(collection(database, 'products'), newItem);
        navigation.goBack();
    }

    return (
        <RN.View style={styles.container}>
            <RN.Text style={styles.title}>Solicitar Ayuda</RN.Text>

            <RN.TextInput
                onChangeText={(text) => setNewItem({...newItem, name: text})}
                style={styles.inputContainer}
                placeholder='Ingrese su solicitud' 
            />
            <RN.TextInput 
                onChangeText={(text) => setNewItem({...newItem, ubicacion: text})}
                style={styles.inputContainer} 
                placeholder='Ubicación'
            />
            <RN.TextInput 
                onChangeText={(text) => setNewItem({...newItem, descripcion: text})}
                style={styles.inputContainer} 
                placeholder='Explique su solicitud'
            />
            <RN.TextInput 
                onChangeText={(text) => setNewItem({...newItem, price: text})}
                style={styles.inputContainer} 
                placeholder='$ Monto a ofrecer'
                keyboardType="number-pad"
            />
            <RN.Button title='Enviar' onPress={onSend}/>
        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
    },
    inputContainer: {
        width: '90%',
        padding: 13,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
      }
});