import Name from "@/components/atoms/Name";
import Bio from "@/components/atoms/Bio";
import Pic from "@/components/atoms/Pic";

export default function Profile() {
  return (
    <div
    style={{  }}
    >
      <Pic pic="https://upload.wikimedia.org/wikipedia/commons/f/fe/Macaca_fuscata_juvenile_yawning.jpg" />
      <Name name="Kyanna" />
      <Bio bio="Welcome to chaos" />
    </div>
  );
}
