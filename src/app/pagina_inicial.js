import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Calculadora } from './calculadora';
import styles from '../components/_layout';
import React from 'react'

export function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textCalculadora}>Pagina Inicial</Text>
            <TouchableOpacity onPress={() => navigation.navigate(Calculadora)} style={styles.othersButtons}>
                <Text style={styles.textButton}>Calculadora</Text>
            </TouchableOpacity>
        </View>
  )
}