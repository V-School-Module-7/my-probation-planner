import React, { useState } from 'react'
import { Text, View } from 'react-native'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import ForgotPasswordScreen from './ForgotPasssWordScreen'
import Application from './Application'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function Auth(props) {

    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} {...props} />
            <Stack.Screen name="DashboardScreen" component={Application}/> 
            {/* will delete this path once other method is set up <3 */}
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
        </Stack.Navigator>
    )
}

// this file is set aside to help in organizing the log in sites in a smoother capacity. It is so that the auth and the actual application can truly be set on two seperate screens, allowing being logged in and profile to be much more user friendly

//might change so that login and signup are two seperate screens that display depending on which is clicked (use state). if so, might have to remove stack navigator and just use dynamic rendering
