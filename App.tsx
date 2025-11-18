import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductList } from './src/screens/ProductList/ProductList';
import { ProductDetail } from './src/screens/ProductDetail/ProductDetail';
import { WebViewScreen } from './src/screens/WebViewScreen';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ProductList" 
          component={ProductList}
          options={{ title: 'Products' }}
        />
        <Stack.Screen 
          name="ProductDetail" 
          component={ProductDetail}
          options={{ title: 'Product Details' }}
        />
        <Stack.Screen 
          name="WebView" 
          component={WebViewScreen}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
