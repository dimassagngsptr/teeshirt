import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
export function NavMenu() {
   const [openMenu, setOpenMenu] = useState<number>(null);
   interface Menu {
      title: string;
      subs: string;
      description: string;
   }
   const menuItems: Menu[] = [
      {
         title: "Home",
         subs: "@material-tailwind/html",
         description:
            "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
      },
      {
         title: "Shop",
         subs: "@material-tailwind/react",
         description:
            "Learn how to use @material-tailwind/react, packed with rich components for React.",
      },
      {
         title: "Pages",
         subs: "Material Tailwind PRO",
         description:
            "A complete set of UI Elements for building faster websites in less time.",
      },
   ];

   return (
      <main>
         <div className="flex px-[3%] mt-[30px] font-primary justify-between">
            <div className="flex gap-10">
               {menuItems.map((menu, idx) => (
                  <div
                     key={idx}
                     onMouseEnter={() => setOpenMenu(idx)}
                     onMouseLeave={() => setOpenMenu(null)}>
                     <div className="flex items-center gap-2 cursor-pointer hover:text-main-green">
                        <p className="font-semibold text-[14px]">
                           {menu?.title}
                        </p>
                        <ChevronDownIcon
                           className={`${
                              openMenu === idx
                                 ? "rotate-180 w-3 h-3"
                                 : "w-3 h-3"
                           } transition-transform font-semibold`}
                        />
                     </div>
                     <div
                        className={
                           openMenu === idx
                              ? "absolute h-[200px] max-w-[500px] mt-[20px] bg-white shadow-[1px_1px_2px_1px_rgba(0,0,0,0.3)] px-4 py-2 rounded-lg"
                              : "hidden"
                        }>
                        <p className="font-bold">{menu?.subs}</p>
                        <p className="text-[14px]">{menu?.description}</p>
                     </div>
                  </div>
               ))}
            </div>
            <div className="flex gap-2 items-center">
               <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_8360_21432)">
                     <g clip-path="url(#clip1_8360_21432)">
                        <path
                           d="M14.9733 8.39673C14.9733 7.53756 14.8204 6.71381 14.54 5.95173C14.3483 8.19714 13.1512 9.35048 11.9004 8.81339C10.7287 8.31006 11.5183 6.34798 11.5766 5.41173C11.675 3.82464 11.5716 2.00798 8.68872 0.497559C9.88664 2.78923 8.82747 4.21298 7.71664 4.29964C6.48414 4.39589 5.35539 3.24048 5.77206 1.36548C4.42289 2.35964 4.38372 4.03298 4.79997 5.11548C5.23414 6.24381 4.78247 7.18131 3.72372 7.28548C2.54039 7.40214 1.88289 6.01839 2.48914 3.81339C1.43997 5.04881 0.806641 6.64881 0.806641 8.39673C0.806641 12.3088 3.97789 15.4801 7.88997 15.4801C11.8021 15.4801 14.9733 12.3088 14.9733 8.39673Z"
                           fill="#F4900C"
                        />
                        <path
                           d="M12.2215 10.4795C12.2831 11.7645 11.1544 12.2682 10.5469 12.0249C9.66937 11.6736 9.90479 11.0703 9.67896 9.82031C9.45312 8.57031 8.58521 7.7024 7.30062 7.32031C8.23812 9.95906 6.78104 10.9316 6.01729 11.1053C5.23729 11.2828 4.45354 11.1049 4.36396 9.43573C3.45396 10.3416 2.89062 11.5949 2.89062 12.9799C2.89062 13.1332 2.90021 13.2841 2.91354 13.4341C4.19271 14.6982 5.94979 15.4799 7.89062 15.4799C9.83146 15.4799 11.5885 14.6982 12.8677 13.4341C12.881 13.2841 12.8906 13.1332 12.8906 12.9799C12.8906 12.0686 12.6473 11.2149 12.2215 10.4795Z"
                           fill="#FFCC4D"
                        />
                     </g>
                  </g>
                  <defs>
                     <clipPath id="clip0_8360_21432">
                        <rect
                           width="15"
                           height="15"
                           fill="white"
                           transform="translate(0.390625 0.47998)"
                        />
                     </clipPath>
                     <clipPath id="clip1_8360_21432">
                        <rect
                           width="15"
                           height="15"
                           fill="white"
                           transform="translate(0.390625 0.47998)"
                        />
                     </clipPath>
                  </defs>
               </svg>
               <p className="font-bold">
                  Extra <span className="text-main-green">Sale 30%</span> off
               </p>
            </div>
         </div>
      </main>
   );
}
