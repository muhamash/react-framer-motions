import { motion } from 'framer-motion';

export default function Test ()
{
    const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deserunt a quis quam corporis nesciunt officia dolore hic eius quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aut.!!!"

    const words = message.split( ' ' );

  return (
    <motion.div
       exit={ {
              x: '1200px',
              transition: {
                ease: 'easeInOut',
                duration: 0.5,
              }
            } }
      className="w-[500px]">
      {
        words.map( ( word, index ) => (
          <motion.span key={ index }
            initial={ { opacity: 0, } }
            animate={ { opacity: 1, } }
                  
            transition={ {
              duration: 1,
              delay: index / 20
            } }
          >
            { word } { ' ' }
          </motion.span>
        ) )
      }
    </motion.div>
  );
}
