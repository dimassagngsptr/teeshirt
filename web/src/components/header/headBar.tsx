export function Headbar() {
   return (
      <main className="w-full h-[50px] px-[5%] bg-main-light font-primary">
         <div className="flex justify-between items-center h-[100%]">
            <div className="flex gap-2 text-main-gray cursor-pointer">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4">
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
               </svg>
               <small>Find our store</small>
            </div>
            <div className="flex gap-4 items-center">
               <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0,0,256,256">
                  <g
                     fill="#9b9b9b"
                     fill-rule="nonzero"
                     stroke="none"
                     stroke-width="1"
                     stroke-linecap="butt"
                     stroke-linejoin="miter"
                     stroke-miterlimit="10"
                     stroke-dasharray=""
                     stroke-dashoffset="0"
                     font-family="none"
                     font-weight="none"
                     font-size="none"
                     text-anchor="none">
                     <g transform="scale(5.12,5.12)">
                        <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
                     </g>
                  </g>
               </svg>
               <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0,0,256,256">
                  <g
                     fill="#9b9b9b"
                     fill-rule="evenodd"
                     stroke="none"
                     stroke-width="1"
                     stroke-linecap="butt"
                     stroke-linejoin="miter"
                     stroke-miterlimit="10"
                     stroke-dasharray=""
                     stroke-dashoffset="0"
                     font-family="none"
                     font-weight="none"
                     font-size="none"
                     text-anchor="none">
                     <g transform="scale(3.55556,3.55556)">
                        <path d="M36,13c13.25,0 24,11.369 24,23.5c0,13 -9.5,23 -21,24.25v-17.75h4l2,-5.029l-6,0.029v-4.73c0,-1.254 1.016,-2.27 2.27,-2.27c0.902,0 1.73,0 1.73,0v-4h-4.255c-1.524,0 -2.985,0.605 -4.062,1.683c-1.078,1.077 -1.683,2.538 -1.683,4.062c0,2.653 0,5.226 0,5.226h-4v5.029h4v17.75c-11.5,-1.25 -21,-11 -21,-24.25c0,-12.131 10.5,-23.5 24,-23.5z"></path>
                     </g>
                  </g>
               </svg>
               <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0,0,256,256">
                  <g
                     fill="#9b9b9b"
                     fill-rule="nonzero"
                     stroke="none"
                     stroke-width="1"
                     stroke-linecap="butt"
                     stroke-linejoin="miter"
                     stroke-miterlimit="10"
                     stroke-dasharray=""
                     stroke-dashoffset="0"
                     font-family="none"
                     font-weight="none"
                     font-size="none"
                     text-anchor="none">
                     <g transform="scale(5.12,5.12)">
                        <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                     </g>
                  </g>
               </svg>
            </div>
         </div>
      </main>
   );
}
