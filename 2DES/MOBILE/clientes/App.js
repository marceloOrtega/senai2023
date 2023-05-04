import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientesScreeen from './source/screens/clientesScreen';
import detalhesScreen from './source/screens/detalhesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ClientesScreeen"
          component={ClientesScreeen}
          options={{ title: 'Lista de Clientes' }} />
          <Stack.Screen
            name="detalhes"
            component={detalhesScreen}
            options ={{ title: 'Detalhes do Cliente' }} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}