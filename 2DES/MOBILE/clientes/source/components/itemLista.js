import { View, Image } from "react-native";

export default function ItemLista() {

    return(
        <View>
            <Image style={styles.img} source={item.avatar}></Image>
        <View>
            <Text style={styles.text}>CPF: {item.cpf}</Text>
            <Text style={styles.text}>Nome: {item.nome} {item.sobrenome}</Text>
            <Text style={styles.text}>E-mail: {item.email}</Text>
        </View>
        </View>
    )
}