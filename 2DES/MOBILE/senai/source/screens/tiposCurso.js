import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Mock from '../mocks/mocks'
import ItemTipo from '../components/itemTipo'

export default function tipoScreen({ navigation }) {

    const abrirDetalhes = (dados) => {
        navigation.navigate('Cursos', { dados });
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
            <FlatList
                data={Mock}
                style={styles.list}
                renderItem={({ item }) => <TouchableOpacity style={styles.item} 
                onPress={() => abrirDetalhes(item)}>
                    <ItemTipo item={item} />
                </TouchableOpacity>}
            />
        </View >);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        border: '1px solid black',
    },
    logo: {
        width: '100%',
        height: 100,
        margin: 20
    }
});
