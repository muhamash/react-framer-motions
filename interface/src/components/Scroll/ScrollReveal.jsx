// import React from 'react';
import Box from './Box';

export default function ScrollReveal ()
{
  const greetings = [ 'abcd', 'efgh', 'ijkl', 'mnop', 'qrst', 'wxyz', 'dkjgf', 'sdafh', 'ewyr', 'bvczxn', 'tweyru', 'yutrwe' ];

  return (
    <div
      className="flex flex-col items-center justify-center gap-10"
    >
      {
        greetings.map( ( grt, index ) => (
          <Box key={ index } text={grt} />
        ))
      }
    </div>
  )
}
