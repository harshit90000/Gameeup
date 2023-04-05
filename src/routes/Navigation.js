import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';

export default function Navigation() {
  return (
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer>
  );
}