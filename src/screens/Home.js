import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { database } from '../config/fb';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Product from '../components/Product';

export default function Home() {
    const [products, setProducts] = React.useState([]);
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <RN.Button title='Agregar' onPress={() => navigation.navigate('Add')} />
        })
    },[navigation])

    React.useEffect(() => {
        const collectionRef = collection(database, 'products');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, querySnapshot => {
            console.log('querySnapshot unsusbscribe');
              setProducts(
                querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                    ubicacion: doc.data().ubicacion,
                    descripcion: doc.data().descripcion,
                    price: doc.data().price,
                    isSold: doc.data().isSold,
                    createdAt: doc.data().createdAt,
                }))
              );
            });
        return unsubscribe;

    },[])
    return (
        <>
        <RN.Text style={styles.title}>Muro de Solicitudes</RN.Text>
        {products.map(product => <Product key={product.id} {...product} />)}
        </>
    )
}

const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F3F9',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        margin: 16,
    },
});