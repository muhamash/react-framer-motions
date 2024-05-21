import { motion } from "framer-motion";
import { useState } from "react";
import useWrapperAnimation from "../hooks/useWrapperAnimation";

export default function Stagger({staggerName, data}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useWrapperAnimation( isOpen );
  
  console.log(data)


  return (
    <nav className="w-[400px]" ref={ ref }>
      <motion.button
        whileTap={ { scale: 0.97 } }
        onClick={ () => setIsOpen( !isOpen ) }
        className="bg-cyan-500 flex justify-between items-center my-2 p-3 w-full hover:shadow-md rounded-lg  text-xl text-white"
      >
        Menu
        <div className="arrow" style={ { transformOrigin: "50% 55%" } }>
          <svg fill="white" width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <ul
        className="w-full bg-cyan-500 flex flex-col gap-5 p-5"
        style={ {
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        } }
      >
        {/* {
          images.map( ( image, index ) => (
            <img key={index} className="w-full h-[100px] rounded-md" src={image.src} alt="image?" />
          ))
        } */}
        {
          data && data.map( ( d ) => (
            <li key={ d.id }>
              <img className='w-full hover:shadow-md hover:scale-105 transition-all duration-200 rounded-md h-[100px]' src={d.src} alt="" />
            </li>
          ))
        }
      </ul>
    </nav>
  );
}