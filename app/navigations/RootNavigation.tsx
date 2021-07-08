import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogInScreen } from '../screens/log-in'
const Stack = createStackNavigator();

const RootNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false, headerBackTitleVisible: false }}
            >
                <Stack.Screen
                    name="LogInScreen"
                    component={LogInScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;