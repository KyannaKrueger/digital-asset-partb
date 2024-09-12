import { View } from "react-native";

export default function Bio({ bio }: { bio: string }) {
  return (
    <View>
      <p>{bio}</p>
    </View>
  );
}