import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types';
import { generateHtmlContent, getHeightMeasurementScript } from '../../../helpers/webViewHelpers';
import { useWebViewHeight } from '../../../hooks/useWebViewHeight';
import { DescriptionSkeleton } from './DescriptionSkeleton';

interface DescriptionSectionProps {
  description: string;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const createLinkClickHandler = (navigation: NavigationProp) => {
  return (request: any) => {
    if (request.navigationType === 'click' && request.url) {
      navigation.navigate('WebView', { url: request.url });
      return false;
    }
    return true;
  };
};

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  description,
}) => {
  const navigation = useNavigation<NavigationProp>();
  const { height, isLoading, opacity, handleHeightMessage } = useWebViewHeight();

  if (!description) {
    return null;
  }

  const htmlContent = generateHtmlContent(description);
  const injectedJavaScript = getHeightMeasurementScript();
  const handleShouldStartLoadWithRequest = createLinkClickHandler(navigation);

  return (
    <View style={styles.container}>
      <View style={{ height: isLoading ? 200 : height, position: 'relative' }}>
        {isLoading && <DescriptionSkeleton />}
        <Animated.View style={[styles.webviewContainer, { opacity }]}>
          <WebView
            source={{ html: htmlContent }}
            scrollEnabled={false}
            onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
            onMessage={handleHeightMessage}
            injectedJavaScript={injectedJavaScript}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  webviewContainer: {
    flex: 1,
  },
});
