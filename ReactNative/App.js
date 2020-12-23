import React, { useState } from 'react';
import Auth from './app/screens/Auth'
import Application from './app/screens/Application'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as SecureStore from 'expo-secure-store';

const Stack = createStackNavigator()


export default function App() {
  const [hasToken, setHasToken] = useState(false) 
    //will change to grabbing from local storage once connections have been fixed and figured out
    //once set up to check from local storage, will no longer need to pass down function????!!!
    

    //secure store is not quite moving the info how I want it. is it not sending? is it not grabbing? find youtube tutorial, perhaps. maybe other way to store.

    // SecureStore is one way I have been trying to securely store info (hopefully token eventually)

  return (
    <NavigationContainer>
      {
        !hasToken //will be grabbed from storage
        ?
        <Auth />
        :
        <Application />
      }
    </NavigationContainer>
  );
}


// holds navigation between auth file and Application file
//switch nav
//check if you have token (logged in). if yes, display Application, if not, display Auth
//have log in buttons switch to Application. Have log out buttons switch to Auth