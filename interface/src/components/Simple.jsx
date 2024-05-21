import { motion } from 'framer-motion';

export default function Simple() {
  return (
      <motion.div
          className="bg-orange-500 w-32 h-32 border rounded-full"
          initial={{ opacity: 0, scale: 0.5 } }
          animate={ { opacity: 1, scale: 1 } }
          transition={{duration: 1.5}}
      />
  )
}
