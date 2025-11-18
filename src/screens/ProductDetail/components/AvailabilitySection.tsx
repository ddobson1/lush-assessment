import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AvailabilitySectionProps {
  isAvailable: boolean;
}

export const AvailabilitySection: React.FC<AvailabilitySectionProps> = ({
  isAvailable,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Availability:</Text>
      <Text
        style={[
          styles.status,
          isAvailable ? styles.available : styles.unavailable,
        ]}
      >
        {isAvailable ? 'In Stock' : 'Out of Stock'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    marginRight: 12,
  },
  status: {
    fontSize: 16,
    fontWeight: '600',
  },
  available: {
    color: 'green',
  },
  unavailable: {
    color: 'red',
  },
});

