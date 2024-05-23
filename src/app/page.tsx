import TestCard from "@/components/card/TestCard";
import DivBorderLine from "@/components/animation/DivBorderLine";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DivBorderLine>
        <TestCard />
      </DivBorderLine>
    </main>
  );
}
