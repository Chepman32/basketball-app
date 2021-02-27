import React, {
  Component,
} from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Settings from './Settings';
import { NavigationContainer } from '@react-navigation/native';
import Basketball from './Basketball';
import MainMenu from './MainMenu';
import { constants } from './constants';
const Stack = createStackNavigator();
class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="MainMenu" component={MainMenu} options={{
        headerShown: false,
        height: constants.MAX_HEIGHT * 0.05
      }} />
      <Stack.Screen name="Basketball" component={Basketball} options={{
        headerBackTitleVisible: false,
        height: constants.MAX_HEIGHT * 0.05,
        title: "",
        headerStyle: {
          height: constants.MAX_HEIGHT * 0.1,
        }
      }} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App