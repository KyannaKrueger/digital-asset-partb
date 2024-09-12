import { View } from "react-native";

export default function Pic({ pic }: { pic: string }) {
  return (
    <View>
      <img src={pic} alt="Profile Picture" 
      style={{ width: 100, height: 100 }}
      />
    </View>
  );
}
