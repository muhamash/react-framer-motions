import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import ButtonTap from './components/ButtonTap';
import useFetchQuery from './components/hooks/useFetchQuery';
import KeyFrame from './components/KeyFrame';
import Test from './components/Test';

const Home = lazy(() => import('./components/page/Home'));
const AnimationPage = lazy(() => import('./components/page/AnimationPage'));
const Category = lazy(() => import('./components/page/Category'));

function App() {
  const { data: images, error: imagesError, isLoading: imagesLoading } = useFetchQuery( {
    queryKey: [ 'images' ],
    url: 'images',
    // staleTime: 60000,
    // cacheTime: 300000,
    // retry: 5,
    // retryDelay: 2000,
    // refetchOnWindowFocus: false,
  } );

  const { data: linkData } = useFetchQuery( {
    queryKey: [ 'linkData' ],
    url: 'linkData',
    // staleTime: 60000,
    // cacheTime: 300000,
    // retry: 5,
    // retryDelay: 2000,
    // refetchOnWindowFocus: false,
  } );

  const location = useLocation();

  if (imagesLoading) {
    return <p>Loading images...</p>;
  }

  if (imagesError) {
    return <p>Error loading images: {imagesError.message}</p>;
  }

  return (
    <Suspense fallback={ <p>Loading page...</p> }>
      <AnimatePresence mode="wait">
        <Routes location={ location } key={ location.key }>
          <Route path="/" element={ <Home data={ images } /> } exact />
          <Route path="/animationPage" element={ <AnimationPage /> } />
          <Route path="/category" element={ <Category data={ linkData } /> }>
            <Route path="keyFrame" element={ <KeyFrame /> } />
            <Route path="buttonTap" element={ <ButtonTap /> } />
            <Route path="" element={ <ButtonTap /> } />
            <Route path="test" element={ <Test/> } />
            <Route path="simple" element={ <simple /> } />
            <Route path="buttonTap" element={ <ButtonTap /> } />
          </Route>

        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;