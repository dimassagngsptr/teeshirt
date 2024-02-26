import banner from "../../assets/banner.png";
import oversize from "../../assets/tshirt_recomendation_2.jpg";
import tshirt from "../../assets/tshirt_recomendation.jpg";
import jacket from "../../assets/jacket_recomendation.jpg";
import hoodie from "../../assets/hoodie_recomendation.jpg";
import shoes from "../../assets/shoes_recomendation.jpg";
import bag from "../../assets/canvas_bag.jpg";
import { Categories } from "./categories";
export function Hero() {
   interface Items {
      url: string;
      title: string;
   }
   const items: Items[] = [
      {
         url: oversize,
         title: "T-shirt oversize",
      },
      {
         url: tshirt,
         title: "T-shirt",
      },
      {
         url: jacket,
         title: "Jacket",
      },
      {
         url: hoodie,
         title: "Hoodie",
      },
      {
         url: bag,
         title: "Canvas Bag",
      },
      {
         url: shoes,
         title: "Shoes",
      },
   ];
   return (
      <main className="font-primary px-[8%]">
         <div className="relative w-full  py-[3%]">
            <img
               src={banner}
               className="h-[500px] rounded-lg w-full object-fill"
            />
            <button className="absolute bottom-[32%] left-[22%] bg-main-green px-[20px] py-2 rounded-lg text-white hover:shadow-md transition duration-300 font-bold">
               Shop now
            </button>
         </div>
         <Categories items={items} />
      </main>
   );
}
