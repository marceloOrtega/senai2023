import React from 'react';
import { View, FlatList, StyleSheet, Text, Image,TouchableOpacity } from 'react-native';
import Clientes from '../mocks/clientesMock'
import ItemLista from '../components/itemLista';

export default function ClientesScreen({ navigation }) {

    const abrirDetalhes = (dados) => {
        navigation.navigate('detalhes',{dados});
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={Clientes}
                style={styles.list}
                renderItem={({ item }) => <TouchableOpacity style={styles.item} onPress={() => abrirDetalhes (item)}>
                    <Image style={styles.img} source={item.avatar}></Image>
                    <View>
                        <Text style={styles.text}>CPF: {item.cpf}</Text>
                        <Text style={styles.text}>Nome: {item.nome} {item.sobrenome}</Text>
                        <Text style={styles.text}>E-mail: {item.email}</Text>
                    </View>
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
        width: '70%',
        paddingHorizontal: 20,
        
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: 'rgb(169,169,169)', 
      
    },
    img: {
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 20,

    },
    text: {
        fontSize: 11,
        margin: 8,
    }
});