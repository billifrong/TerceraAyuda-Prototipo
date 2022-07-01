import * as React from 'react';
import * as RN from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { database } from '../config/fb';

export default function SignIn() {
  const navigation = useNavigation();
  const [newItem,setNewItem] = React.useState({
    mail:'',
    contraseña:'',

  })

  const onSend = async () =>{
    await addDoc(collection(database,'Usuarios'),newItem);
    navigation.navigate('Home')
  }
  return(
    <RN.View style={styles.container}>
      <RN.Text style={styles.title}>Correo electronico</RN.Text>
      <RN.TextInput
        style={styles.inputContainer}
        placeholder='Ingrese su email' 
      />
      <RN.Text style={styles.title}>Contraseña</RN.Text>
      <RN.TextInput
        style={styles.inputContainer}
        placeholder='Ingrese su contraseña' 
        secureTextEntry={true}
      />
      <RN.Button title='Iniciar Sesión' onPress={onSend} />
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