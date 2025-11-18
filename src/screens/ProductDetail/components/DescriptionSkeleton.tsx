import React from 'react';
import { View, StyleSheet } from 'react-native';

export const DescriptionSkeleton: React.FC = () => {
  return (
    <>
      <View style={styles.skeletonLine} />
      <View style={[styles.skeletonLine, { width: '90%' }]} />
      <View style={[styles.skeletonLine, { width: '85%' }]} />
      <View style={[styles.skeletonLine, { width: '95%' }]} />
      <View style={[styles.skeletonLine, { width: '80%' }]} />
    </>
  );
};

const styles = StyleSheet.create({
  skeletonLine: {
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 12,
    width: '100%',
  },
});

