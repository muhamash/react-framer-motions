/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function ButtonTap({text}) {
  return (
    <motion.button
      className="bg-sky-500 w-32 h-12 border border-sky-900 rounded-md shadow-md text-white"
      whileTap={ {
        scale: 0.3,
      } }
      whileHover={ {
        scale: 1.11,
        // transition: { yoyo: Infinity },
      } }
      transition={ { type: "spring", stiffness: 340, damping: 8 } }
      exit={ {
        x: '-1200px',
        transition: {
          ease: 'easeInOut',
          duration: 0.5,
        }
      } }
    //   transition={{ duration: 5}}
    >{ text }</motion.button>
  );
}