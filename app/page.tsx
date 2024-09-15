import Me from "@/components/HomeSections/Me";
import Math from "@/components/HomeSections/Math";
import CreativeWorks from "@/components/HomeSections/CreativeWorks";
import Misc from "@/components/HomeSections/Misc";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Me/>
      <Math/>
      <CreativeWorks/>
      <Misc/>
    </main>
  );
}
