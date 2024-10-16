import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import styles from "../components/_layout";

export function Calculadora() {
    const navigation = useNavigation();

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    function Soma() {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        setResult(n1 + n2);
    }
    
    function Subtracao() {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        setResult(n1 - n2);
    }
    
    function Multiplicacao() {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        setResult(n1 * n2);
    }
    
    function Divisao() {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if (n2 !== 0) {
            setResult(n1 / n2);
        } else {
            setResult('Erro: Divisão por zero');
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.viewStyle}>
                <Text style={styles.textCalculadora}>Calculadora</Text>
                <Text>Primeiro número:</Text>
                <TextInput 
                    style={styles.inputTextNumber} 
                    placeholder="Digite o primeiro número" 
                    value={num1} 
                    onChangeText={setNum1} 
                    keyboardType='numeric'              
                />
                <Text>Segundo número:</Text>
                <TextInput 
                    style={styles.inputTextNumber} 
                    placeholder="Digite o segundo número" 
                    value={num2} 
                    onChangeText={setNum2} 
                    keyboardType="numeric"
                />

                <View style={styles.buttonColumn}>
                    <TouchableOpacity style={styles.buttonOperationsStyle} onPress={Soma}>
                        <Text style={styles.textButton}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOperationsStyle} onPress={Subtracao}>
                        <Text style={styles.textButton}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOperationsStyle} onPress={Multiplicacao}>
                        <Text style={styles.textButton}>*</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOperationsStyle} onPress={Divisao}>
                        <Text style={styles.textButton}>/</Text>
                    </TouchableOpacity>
                </View>
                <Text>Resultado:</Text>
                <Text style={styles.textResult}>{result}</Text>
                <TouchableOpacity style={styles.othersButtons} onPress={() => navigation.goBack()}>
                    <Text style={styles.textButton}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
