import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

// navigators
import HomeStack from './navigation/HomeStack'

const App = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  )
}

export default App
