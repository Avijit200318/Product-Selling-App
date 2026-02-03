import { FlatList, Text, View } from "react-native";
import { PRODUCTS } from "@/assets/products";
import ProductCard from "@/components/ProductCard";

export default function Index() {
  return (
    <View>
      <FlatList data={PRODUCTS}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={<Text>Products</Text>}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          paddingBottom: 30
        }}
        className="py-3 px-4"
      />
    </View>
  );
}
