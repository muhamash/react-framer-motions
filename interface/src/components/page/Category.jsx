import React from 'react';
// import Outlet from '../layout/Outlet'
import { Outlet } from "react-router-dom";


export default function Category() {
  return (
    <div>
      <div>
        hello
      </div>
      <hr className="bg-violet-300 p-[0.6px]" />
      <div>
        <Outlet/>
      </div>
    </div>
  )
}