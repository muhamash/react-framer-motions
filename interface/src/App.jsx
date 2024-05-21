import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import useFetchQuery from './components/hooks/useFetchQuery';


const Home = lazy(() => import('./components/page/Home'));
const AnimationPage = lazy(() => import('./components/page/AnimationPage'));
const Category = lazy(() => import('./components/page/Category'));

function App() {
  const { images, error, isLoading } = useFetchQuery();
  const location = useLocation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AnimatePresence mode='wait'>
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