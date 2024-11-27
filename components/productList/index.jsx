import { FlatList, Text, View, StyleSheet } from 'react-native';
import ProductCard from '../productCard/index.jsx'

const ProductList = ({ products }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
});

export default ProductList;
