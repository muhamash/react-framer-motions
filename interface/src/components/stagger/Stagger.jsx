import { motion } from "framer-motion";
import { useState } from "react";
import useFetchQuery from "../hooks/useFetchQuery";
import useWrapperAnimation from "../hooks/useWrapperAnimation";

export default function Stagger() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useWrapperAnimation( isOpen );
  
  const {images, error, isLoading} = useFetchQuery()
  console.log( images, error, isLoading );

  return (
    <nav className="w-1/3" ref={ ref }>
      <motion.button
        whileTap={ { scale: 0.97 } }
        onClick={ () => setIsOpen( !isOpen ) }
        className="bg-cyan-500 flex justify-between items-center my-2 p-3 w-full hover:shadow-md rounded-lg  text-xl text-white"
      >
        Menu
        <div className="arrow" style={ { transformOrigin: "50% 55%" } }>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <ul
        className="w-full bg-cyan-500 flex flex-col gap-5 p-10"
        style={ {
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        } }
      >
        {
          images.map( ( image ) => (
            <img key={image.id} className="w-full h-[100px] rounded-md" src={image.src} alt="image?" />
          ))
        }
      </ul>
    </nav>
  );
}