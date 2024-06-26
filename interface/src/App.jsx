import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
// import ButtonTap from './components/ButtonTap';
import useFetchQuery from './components/hooks/useFetchQuery';
// import KeyFrame from './components/KeyFrame';
// import Counter from './components/motionValue/Counter';
// import ScrollReveal from './components/Scroll/ScrollReveal';
// import Simple from './components/Simple';
// import Test from './components/Test';

const Home = lazy(() => import('./components/page/Home'));
const AnimationPage = lazy( () => import( './components/page/AnimationPage' ) );
const Category = lazy( () => import( './components/page/Category' ) );
const Simple = lazy( () => import( './components/Simple' ) );
const ScrollReveal = lazy( () => import( './components/Scroll/ScrollReveal' ) )
const Counter = lazy( () => import( './components/motionValue/Counter' ) )
const KeyFrame = lazy( () => import( './components/KeyFrame' ) );
const ButtonTap = lazy( () => import( './components/ButtonTap' ) );
const Test = lazy(()=> import('./components/Test.jsx'))

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
            <Route path="counter" element={ <Counter /> } />
            <Route path="test" element={ <Test/> } />
            <Route path="simple" element={ <Simple /> } />
            <Route path="counter" element={ <Counter /> } />
            <Route path="scrollReveal" element={ <ScrollReveal/>} />
          </Route>

        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;