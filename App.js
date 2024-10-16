import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TelaLogin } from './src/app/tela_login';
import { Calculadora } from './src/app/calculadora';
import { Home } from './src/app/pagina_inicial';

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin}/>   
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Calculadora" component={Calculadora}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}