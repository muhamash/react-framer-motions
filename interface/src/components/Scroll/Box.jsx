/* eslint-disable react/prop-types */
// import React from 'react'
import { motion } from 'framer-motion';

export default function Box({text}) {
    return (
        <>
            <motion.div
                initial={ { opacity: 0, x: -50 } }
                whileInView={ {
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.5,
                    }
                } }
                viewport={ { once: false } }
                whileHover={ {
                    scale: 1.1,
                    transition: { yoyo: Infinity },
                    bounce: 0.4
                } }
                drag="x"
                exit={ {
                    x: '1200px',
                    transition: {
                        ease: 'easeInOut',
                        duration: 0.5,
                    }
                } }
                className="bg-green-700 w-32 h-32  border-[1.5px] shadow-md border-sky-600 rounded-md text-white my-2 text-center flex items-center justify-center"
            >
                { text }
            </motion.div>
        </>
    );
}
