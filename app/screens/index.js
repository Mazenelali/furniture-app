import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Shop from './Shop';


const Stack = createStackNavigator();

const App = () =>{
    <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Shop" component={Shop} />
         </Stack.Navigator>
    </NavigationContainer>
}

export default App