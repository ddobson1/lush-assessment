import React from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  showFavorites: boolean;
  onToggleFavorites: () => void;
  favoriteCount: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  showFavorites,
  onToggleFavorites,
  favoriteCount,
}) => {

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <TouchableOpacity
        style={[styles.button, !showFavorites && selectedCategory === null && styles.buttonActive]}
        onPress={() => onSelectCategory(null)}
      >
        <Text style={[styles.buttonText, !showFavorites && selectedCategory === null && styles.buttonTextActive]}>
          All
        </Text>
      </TouchableOpacity>

      {favoriteCount > 0 && (
        <TouchableOpacity
          style={[styles.button, showFavorites && styles.buttonActive]}
          onPress={onToggleFavorites}
        >
          <Text style={[styles.buttonText, showFavorites && styles.buttonTextActive]}>
            Favorites ({favoriteCount})
          </Text>
        </TouchableOpacity>
      )}
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, selectedCategory === category && styles.buttonActive]}
          onPress={() => onSelectCategory(category)}
        >
          <Text style={[styles.buttonText, selectedCategory === category && styles.buttonTextActive]}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    height: 60,
    flexShrink: 0,
    flexGrow: 0,
  },
  contentContainer: {
    paddingHorizontal: 16,
    alignItems: 'center',
    height: 60,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
    marginRight: 8,
  },
  buttonActive: {
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'grey',
  },
  buttonTextActive: {
    color: 'white',
  },
});

