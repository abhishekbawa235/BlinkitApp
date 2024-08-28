import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '@features/auth/SplashScreen';
import { navigationRef } from '@utils/NavigationUtils';
import CustomerLogin from '@features/auth/CustomerLogin';
import DeliveryLogin from '@features/auth/DeliveryLogin';
const Stack = createNativeStackNavigator();
const Navigation: FC = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='SplashScreen'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='SplashScreen' component={SplashScreen} />
                <Stack.Screen name='CustomerLogin' component={CustomerLogin} />
                <Stack.Screen name='DeliveryLogin' component={DeliveryLogin} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation