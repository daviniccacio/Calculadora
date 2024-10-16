import { Keyboard, TouchableWithoutFeedback, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Home } from './pagina_inicial';
import React, { useState } from 'react'
import styles from '../components/_layout';


export function TelaLogin(){

    const navigation = useNavigation();
    
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    
    function Login(){
        const validLogin = 'davi@gmail.com';
        const validSenha = '123';

        if(validLogin == login && validSenha == senha){
            Alert.alert('Login bem sucedido');
            navigation.navigate(Home);
        }else{
            Alert.alert('Login ou senha inválidos');
        }
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.viewStyle}>
                <Text>Usuário:</Text>
                <TextInput style={styles.inputText} placeholder="Login" value={login} onChangeText={setLogin}/>
                <Text>Senha:</Text>
                <TextInput style={styles.inputText} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry/>
                <TouchableOpacity style={styles.othersButtons} onPress={Login}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}




