import { motion } from 'framer-motion';

export default function KeyFrame() {
  return (
    <motion.div
      className="bg-slate-700 mix-blend-multiply w-32 h-32 border rounded-full"
      //   initial={{ opacity: 0, scale: 0.5 } }
      animate={ {
        opacity: [ 1, 0, 0.5, 1, 0.5 ],
        borderRadius: [ '30%', '50%', '60%', '25%' ],
        scale: [ 1, 1.5, 0.5, 2 ],
        rotate: [ 10, 0, 20, 240, 0 ],
              
      } }
      exit={ {
        x: '-1200px',
        transition: {
          ease: 'easeInOut',
          duration: 0.5,
        }
      } }
      transition={ { duration: 2 } }
    />
  );
}
