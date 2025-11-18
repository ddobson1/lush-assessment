import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '../../../types';
import { formatPrice } from '../../../helpers/formatPrice';
import { FavoriteButton } from './FavoriteButton';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onPress, 
  isFavorite = false,
  onToggleFavorite,
}) => (
  <View style={styles.card}>
    <TouchableOpacity style={styles.cardContent} onPress={onPress} activeOpacity={0.6}>
      <Image source={{ uri: product.thumbnail.url }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
        <Text style={styles.price}>{formatPrice(product)}</Text>
      </View>
    </TouchableOpacity>
    {onToggleFavorite && (
      <View style={styles.favoriteButtonContainer}>
        <FavoriteButton isFavorite={isFavorite} onPress={onToggleFavorite} />
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    position: 'relative',
  },
  cardContent: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 14,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 3,
  },
  favoriteButtonContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  image: {
    aspectRatio: 1.2,
    backgroundColor: '#f1f1f1',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    resizeMode: 'cover',
  },
  info: {
    padding: 12,
    gap: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
  },
});

