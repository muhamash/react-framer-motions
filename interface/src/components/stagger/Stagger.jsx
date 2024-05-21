import { motion } from "framer-motion";
import { useState } from "react";
import useFetchQuery from "../hooks/useFetchQuery";
import useWrapperAnimation from "../hooks/useWrapperAnimation";

export default function Stagger() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useWrapperAnimation( isOpen );
  
  const {images, error, isLoading} = useFetchQuery()
  // console.log( data );

  return (
    <nav className="bg-cyan-500 shadow-lg w-1/3 p-4 rounded-md" ref={ scope }>
      <motion.button
        whileTap={ { scale: 0.97 } }
        onClick={ () => setIsOpen( !isOpen ) }
        className="bg-[#f0f8ff] flex justify-between items-center my-2 p-3 w-full hover:shadow-md rounded-lg text-sky-700 text-xl"
      >
        Menu
        <div className="arrow" style={ { transformOrigin: "50% 55%" } }>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <ul
        className="w-full bg-white"
        style={ {
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        } }
      >
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    </nav>
  );
}