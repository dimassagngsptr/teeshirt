import { useState } from "react";
import new_arivals_1 from "../../assets/new_arivals_1.jpg";
import new_arivals_2 from "../../assets/new_arivals_2.jpg";
import new_arivals_3 from "../../assets/new_arivals_3.jpg";
import new_arivals_4 from "../../assets/new_arivals_4.jpg";
export function NewArivals() {
   const [openTabs, setOpenTabs] = useState<string>("New Arivals");
   interface Images {
      name: string;
      price: string;
      desc: string;
      title: string;
   }
   interface Tabs {
      title: string;
      path: string;
   }
   const image: Images[] = [
      {
         name: new_arivals_1,
         price: "IDR 50.000",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quae!",
         title: "Green tshirt",
      },
      {
         name: new_arivals_2,
         price: "IDR 50.000",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quae!",
         title: "Green tshirt",
      },
      {
         name: new_arivals_3,
         price: "IDR 50.000",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quae!",
         title: "Green tshirt",
      },
      {
         name: new_arivals_4,
         price: "IDR 50.000",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quae!",
         title: "Green tshirt",
      },
   ];
   const tabs: Tabs[] = [
      {
         title: "New Arivals",
         path: "#",
      },
      {
         title: "Best Seller",
         path: "#",
      },
      {
         title: "Big Sale",
         path: "#",
      },
   ];
   return (
      <main className="mt-[50px] ">
         <div className="flex gap-3 font-primary">
            {tabs?.map((tab) => (
               <h2
                  key={tab?.path}
                  className={`${
                     openTabs === tab?.title
                        ? "font-bold cursor-pointer text-main-green"
                        : "font-bold cursor-pointer text-gray-500"
                  } transition duration-500`}
                  onClick={() => setOpenTabs(tab?.title)}>
                  {tab?.title}
               </h2>
            ))}
         </div>
         <div className="grid grid-cols-4 gap-2 mt-[30px] py-5">
            {image?.map((image) => (
               <div
                  className="flex flex-col gap-5 rounded-lg border max-w-[250px] p-2"
                  key={image?.name}>
                  <img src={image?.name} className="rounded-lg" />
                  <p className="font-bold">{image?.title}</p>
                  <small>{image?.desc}</small>
                  <p>{image?.price}</p>
               </div>
            ))}
         </div>
      </main>
   );
}
