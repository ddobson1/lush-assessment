import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useWebViewHeight = (navigation: NavigationProp) => {
  const [height, setHeight] = useState(200);
  const [isLoading, setIsLoading] = useState(true);

  const handleMessage = (event: any) => {
    const data = JSON.parse(event.nativeEvent.data);
    if (data.type === 'link' && data.url) {
      navigation.navigate('WebView', { url: data.url });
      return;
    }
    if (data.type === 'height' && data.value) {
      setHeight(parseInt(data.value, 10));
      setIsLoading(false);
    }
  };

  return { height, isLoading, handleMessage };
};

