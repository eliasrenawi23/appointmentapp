import Headr from "@/components/Headr";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      {/* <Headr /> */}
      <Navbar />
    </main>
  );
}
