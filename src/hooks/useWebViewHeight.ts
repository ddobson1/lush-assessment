import { useState, useRef } from 'react';
import { Animated } from 'react-native';

const INITIAL_HEIGHT = 200;
const FADE_IN_DELAY = 100;
const FADE_IN_DURATION = 300;

export const useWebViewHeight = () => {
  const [height, setHeight] = useState(INITIAL_HEIGHT);
  const [isLoading, setIsLoading] = useState(true);
  const opacity = useRef(new Animated.Value(0)).current;

  const handleHeightMessage = (event: any) => {
    const contentHeight = parseInt(event.nativeEvent.data, 10);
    if (contentHeight && contentHeight > 0) {
      setHeight(contentHeight);

      setTimeout(() => {
        setIsLoading(false);
        Animated.timing(opacity, {
          toValue: 1,
          duration: FADE_IN_DURATION,
          useNativeDriver: true,
        }).start();
      }, FADE_IN_DELAY);
    }
  };

  return {
    height,
    isLoading,
    opacity,
    handleHeightMessage,
  };
};

