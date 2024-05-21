/* eslint-disable react-hooks/exhaustive-deps */
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';

export default function Counter ()
{
    const count = useMotionValue( 0 );
    const roundValue = useTransform( count, Math.round );

    React.useEffect( () =>
    {
        const animation = animate( count, 100, { duration: 5 } );
        return animation.stop;
    }, [] );

    return (
        <motion.div className="text-3xl text-violet-700 font-mono">
            {roundValue} 
        </motion.div>
    );
}
