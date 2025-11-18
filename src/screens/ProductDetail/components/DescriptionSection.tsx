import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
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

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  description,
}) => {
  const navigation = useNavigation<NavigationProp>();
  const { height, isLoading, handleMessage } = useWebViewHeight(navigation);

  if (!description) {
    return null;
  }

  const htmlContent = generateHtmlContent(description);
  const injectedJavaScript = getHeightMeasurementScript();

  return (
    <View style={styles.container}>
      <View style={{ height: isLoading ? 200 : height, position: 'relative' }}>
        {isLoading && <DescriptionSkeleton />}
        <WebView
          source={{ html: htmlContent }}
          scrollEnabled={false}
          onMessage={handleMessage}
          injectedJavaScript={injectedJavaScript}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          originWhitelist={['*']}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
