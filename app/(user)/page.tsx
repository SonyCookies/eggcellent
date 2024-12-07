import { WhiteSection } from "@/app/components/user/home/WhiteSection";
import { OrangeSection } from "@/app/components/user/home/OrangeSection";
import { BlueSection } from "@/app/components/user/home/BlueSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <WhiteSection />
      <OrangeSection />
      <BlueSection />
    </div>
  );
}
