import React, { useState } from 'react'
import { Text, View } from 'react-native'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import ForgotPasswordScreen from './ForgotPasssWordScreen'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function Auth() {
    const [authPage, setAuthPage] = useState('LoginScreen')

    return (
        <View>
            <Text>Auth page</Text>

            {/* this file is set aside to help in organizing the log in sites in a smoother capacity. It is so that the auth and the actual application can truly be set on two seperate screens, allowing being logged in and profile to be much more user friendly */}
            
            {
                //if authPage === 'login, display login
                //switch between login, signup, and forgot password
                //stack nav for forgot password?
            }
            {/* <Stack.Navigator initialRouteName='LoginScreen'>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
            </Stack.Navigator> */}
        </View>
    )
}