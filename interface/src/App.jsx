import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
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
  const location = useLocation()
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

          <Route path="/" element={ <Home /> } exact />
          <Route path="/animationPage" element={ <AnimationPage /> } />
          <Route path="/category" element={ <Category /> } />
          {/* <Route path="/ScrollReveal" element={ <ScrollReveal /> } />
        <Route path="/simple" element={ <Simple /> } />
        <Route path="/keyFrame" element={ <KeyFrame /> } />
        <Route path="/buttonTap" element={ <ButtonTap /> } />
        <Route path="/test" element={ <Test /> } />
        <Route path="/counter" element={<Counter/>}/> */}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App
