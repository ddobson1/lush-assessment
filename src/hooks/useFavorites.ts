import { useState, useCallback } from 'react';

export const useFavorites = () => {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  const toggleFavorite = useCallback((productId: string) => {
    setFavoriteIds((previousFavoriteIds) => {
      const updatedFavoriteIds = new Set(previousFavoriteIds);
      if (updatedFavoriteIds.has(productId)) {
        updatedFavoriteIds.delete(productId);
      } else {
        updatedFavoriteIds.add(productId);
      }
      return updatedFavoriteIds;
    });
  }, []);

  const isFavorite = useCallback((productId: string) => {
    return favoriteIds.has(productId);
  }, [favoriteIds]);

  const getFavoriteCount = useCallback(() => {
    return favoriteIds.size;
  }, [favoriteIds]);

  return {
    favoriteIds,
    toggleFavorite,
    isFavorite,
    getFavoriteCount,
  };
};

