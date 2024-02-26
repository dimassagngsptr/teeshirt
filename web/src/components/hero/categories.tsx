import hero from "../../assets/hero.png";
export function Categories({ items }: { items: any[] }) {
   return (
      <main className="font-primary">
         <div>
            <h1 className="font-bold text-[20px] text-center">
               Shopping by Categories
            </h1>
            <div className="grid grid-cols-3 gap-3 max-w-[70%] mx-auto items-center mt-[20px]">
               {items?.map((item) => (
                  <div className="flex flex-col items-center gap-2">
                     <img
                        src={item?.url}
                        className="h-[130px] w-[130px] object-fill rounded-full cursor-pointer"
                     />
                     <p className="font-semibold">{item?.title}</p>
                  </div>
               ))}
            </div>
            <div className="flex justify-between gap-3 items-center mt-[100px]">
               <div className="relative">
                  <img src={hero} alt="" className="w-[100%] rounded-lg" />
                  <button className="absolute top-[50%] left-[12%] bg-main-green text-white rounded-lg px-[20px] py-1">
                     Learn more
                  </button>
               </div>
               <div className="relative">
                  <img src={hero} alt="" className="w-[100%] rounded-lg" />
                  <button className="absolute top-[50%] left-[12%] bg-main-green text-white rounded-lg px-[20px] py-1">
                     Learn more
                  </button>
               </div>
            </div>
         </div>
      </main>
   );
}
