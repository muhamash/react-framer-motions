/* eslint-disable no-undef */
import React from 'react';

export default function LazyImport(file) {
    return React.lazy( () => import( `../../components/${file}` )
        .then( ( module ) =>
        {
            if ( module && module.default )
            {
                console.log('i am loading lazily!!!')
                return module;
            } else
            {
                throw new Error( `Module ${file} does not have a default export.` );
            }
        } )
        .catch( ( error ) =>
        {
            console.error( 'Error loading component:', error );
            throw error;
        } )
    );
}