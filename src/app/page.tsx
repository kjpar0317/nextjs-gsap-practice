import TestCard from "@/components/card/TestCard";
import DivBorderLine from "@/components/animation/DivBorderLine";
import Camera from "@/components/3d/Camera";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DivBorderLine>
        <TestCard />
      </DivBorderLine>
      <Camera />
    </main>
  );
}
