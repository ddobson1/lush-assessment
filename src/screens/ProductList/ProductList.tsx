import React, { useState, useMemo } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProductCard } from './components/ProductCard';
import { CategoryFilter } from './components/CategoryFilter';
import { Product, RootStackParamList } from '../../types';
import { useProducts } from '../../hooks/useProducts';
import { useFavorites } from '../../hooks/useFavorites';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductList'>;

export const ProductList: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const { products: categoryFilteredProducts, allProducts, categories } = useProducts(selectedCategory);
  const { isFavorite, toggleFavorite, favoriteIds, getFavoriteCount } = useFavorites();

  const filteredProducts = useMemo(() => {
    if (showFavorites) {
      return allProducts.filter((product) => favoriteIds.has(product.id));
    }
    return categoryFilteredProducts;
  }, [categoryFilteredProducts, allProducts, showFavorites, favoriteIds]);

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetail', { productId: product.id });
  };

  const renderProduct = ({ item: product }: { item: Product }) => (
    <View style={styles.productContainer}>
      <ProductCard
        product={product}
        onPress={() => handleProductPress(product)}
        isFavorite={isFavorite(product.id)}
        onToggleFavorite={() => toggleFavorite(product.id)}
      />
    </View>
  );

  return (
    <>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => {
          setSelectedCategory(selectedCategory === category ? null : category);
          setShowFavorites(false);
        }}
        showFavorites={showFavorites}
        onToggleFavorites={() => {
          setShowFavorites(!showFavorites);
          setSelectedCategory(null);
        }}
        favoriteCount={getFavoriteCount()}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(product) => product.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listContent: {
    padding: 10,
    marginBottom: 16,
  },
  productContainer: {
    flex: 1,
    maxWidth: '49%',
    margin: 4,
  },
  row: {
    justifyContent: 'space-between',
  },
});

