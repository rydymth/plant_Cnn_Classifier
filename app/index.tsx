import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import styles from "../styleSheet";

const index = () => {
  return (
    <View style={styles.centerViews}>
      <Text>Welcome to plant classification</Text>
      <Pressable onPress={() => router.push("/imageHandle")}>
        <Text>Click here to check the image library</Text>
      </Pressable>
    </View>
  );
};

export default index;
