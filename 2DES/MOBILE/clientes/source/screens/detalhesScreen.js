import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function detalhesScreen({ navigation, route }){
    const cliente = route.params.dados
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={cliente.avatar}></Image>
            <View>
            <Text style={styles.text}>CPF: {cliente.cpf}</Text>
            <Text style={styles.text}>Nome: {cliente.nome} {cliente.sobrenome}</Text>
            <Text style={styles.text}>Email: {cliente.email}</Text>
            <Text style={styles.text}>telefone: {cliente.telefone}</Text>
            <Text style={styles.text}>CEP: {cliente.cep}</Text>
            <Text style={styles.text}>Número: {cliente.numero}</Text>
            <Text style={styles.text}>Complemento: {cliente.complemento}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        border: '2px solid black',
        backgroundColor: 'rgb(211,211,211)', 
    },
    img:{
        width: '50vw',
        height: '95vh',
        borderRadius: '25px',
        maxHeight: 300,

       
    },
    textos:{
        width: '85%',
        
    },
    text: {
        fontSize: 16,
        margin: 5,
    }
});