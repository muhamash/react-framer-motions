import React from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { Link } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import ButtonTap from '../ButtonTap';
import useFetchQuery from '../hooks/useFetchQuery';
import Stagger from '../stagger/Stagger';

export default function Home ()
{
    const { images, error, isLoading } = useFetchQuery();
    console.log( images, error, isLoading );
    
    return (
        <div className="flex justify-center items-center flex-col gap-10 py-10">
            <p className="text-xl">This is a Home Page</p>
            <div className="flex gap-10">
                <Link to="/animationPage">
                    <ButtonTap text={ 'Animation Page' } />
                </Link>
                <Link to="/category">
                    <ButtonTap text={ 'See category' } />
                </Link>
            </div>
            <ErrorBoundary fallback={ <p className="bg-red-500 text-white p-2 rounded-md font-mono">something wrong going on, { !error ? 'this not from data fetching problem': 'component!!' }!!</p> }>
                <React.Suspense
                    fallback={ <div className="py-10">
                        <PuffLoader style={ {
                            position: 'absolute',
                        } } size={ 200 } color="#36d7b7" />
                    </div> }>
                    <div>
                        <Stagger staggerName={ 'Demo Stager' } data={ images } />
                    </div>
                </React.Suspense>
            </ErrorBoundary>
        </div>
    );
}
