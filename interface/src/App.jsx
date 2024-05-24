import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import useFetchQuery from './components/hooks/useFetchQuery';

const Home = lazy(() => import('./components/page/Home'));
const AnimationPage = lazy(() => import('./components/page/AnimationPage'));
const Category = lazy(() => import('./components/page/Category'));

function App() {
  const { data: images, error: imagesError, isLoading: imagesLoading } = useFetchQuery( {
    queryKey: [ 'images' ],
    url: 'http://localhost:3000/images',
    staleTime: 60000,
    cacheTime: 300000,
    retry: 5,
    retryDelay: 2000,
    refetchOnWindowFocus: false,
    onError: ( error ) =>
    {
      console.error( "Custom error handler for images:", error );
    },
    onSuccess: ( data ) =>
    {
      console.log( "Custom success handler for images:", data );
    },
    onSettled: ( data, error ) =>
    {
      console.log( "Custom settled handler for images:", { data, error } );
    },
  } );

  const location = useLocation();

  if (imagesLoading) {
    return <p>Loading images...</p>;
  }

  if (imagesError) {
    return <p>Error loading images: {imagesError.message}</p>;
  }

  return (
    <Suspense fallback={<p>Loading page...</p>}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home data={images} />} exact />
          <Route path="/animationPage" element={<AnimationPage />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;