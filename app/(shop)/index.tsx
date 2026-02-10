import { FlatList, View } from "react-native";
import { PRODUCTS } from "@/assets/products";
import ProductCard from "@/components/ProductCard";
import ListHeader from "@/components/ListHeader";

export default function Index() {
  return (
    <View>
      <FlatList data={PRODUCTS}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        // this list header we created inside the components folder
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        contentContainerStyle={{
          paddingBottom: 30
        }}
        showsVerticalScrollIndicator={false}
        className="py-3 px-4"
      />
    </View>
  );
}
