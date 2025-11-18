import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProductCollection } from '../../../types';

interface CollectionsSectionProps {
  collections: ProductCollection[];
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  collections,
}) => {
  if (collections.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      {collections.map((collection, index) => (
        <View key={index} style={styles.tag}>
          <Text style={styles.text}>{collection.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  tag: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 6,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: 'grey',
  },
});

