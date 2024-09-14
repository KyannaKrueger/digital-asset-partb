import Name from "@/components/atoms/Name";
import Bio from "@/components/atoms/Bio";
import Pic from "@/components/atoms/Pic";
import { View } from "react-native";

export default function Profile() {
  return (
    <View >
      <Pic pic="https://upload.wikimedia.org/wikipedia/commons/f/fe/Macaca_fuscata_juvenile_yawning.jpg" />
      <Name name="Kyanna" />
      <Bio bio="Welcome to chaos" />
    </View>
  );
}
