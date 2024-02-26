import { Headers } from "../../components/header/main";
import { Hero } from "../../components/hero/main";

export function Home() {
   return (
      <main className="h-[1000px]">
         <Headers />
         <Hero />
      </main>
   );
}
