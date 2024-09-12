import { View } from "react-native";

export default function Name({ name }: { name: string }) {
  return (
    <View>
      <h1>{name}</h1>
    </View>
  );
}
