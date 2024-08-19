import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Plant Classification",
        }}
      />
      <Stack.Screen name="imageHandle" options={{
        title: "Get Image and permissions?"
      }} />
    </Stack>
  );
};

export default RootLayout;
