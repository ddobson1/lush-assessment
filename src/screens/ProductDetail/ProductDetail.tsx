import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { useProduct } from '../../hooks/useProducts';
import { formatPrice } from '../../helpers/formatPrice';
import { DescriptionSection } from './components/DescriptionSection';
import { CollectionsSection } from './components/CollectionsSection';
import { AvailabilitySection } from './components/AvailabilitySection';

type RoutePropType = RouteProp<RootStackParamList, 'ProductDetail'>;

export const ProductDetail: React.FC = () => {
  const route = useRoute<RoutePropType>();
  const { productId } = route.params;
  const product = useProduct(productId);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        source={{ uri: product.thumbnail.url }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{formatPrice(product, true)}</Text>

        <View style={styles.availabilityContainer}>
          <AvailabilitySection isAvailable={product.isAvailable} />
        </View>
        <CollectionsSection collections={product.collections} />

        <DescriptionSection description={product.description} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 400,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  availabilityContainer: {
    marginBottom: 16,
  },
});

