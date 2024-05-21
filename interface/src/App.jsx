import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import useFetchQuery from './components/hooks/useFetchQuery';
import AnimationPage from './components/page/AnimationPage';
import Category from './components/page/Category';
import Home from './components/page/Home';



// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

function App ()
{
  const { images, error, isLoading } = useFetchQuery();
  console.log( images, error, isLoading );
  const location = useLocation();

    if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    // <div>
    //   <div className="flex gap-10 justify-center items-center p-10">
    //     <KeyFrame />
    //     <Simple />
    //     <ButtonTap text={ "Tap Me!" } />
    //     <ButtonTap text={ "Animation Page" } />
    //     <Test />
    //   </div>
    //   <div className='w-fit mx-auto px-10'>
    //     <Counter />
    //   </div>
    //   <div>
    //     <ScrollReveal/>
    //   </div>
    // </div>
    <>
        <AnimatePresence mode='wait'>
          <Routes location={ location } key={ location.key }>

          <Route path="/" element={ <Home data={images} /> } exact />
          <Route path="/animationPage" element={ <AnimationPage /> } />
          <Route path="/category" element={ <Category /> } />
          
        </Routes>
        </AnimatePresence>
    </>
  );
}

export default App
