import React from 'react';
import { Outlet } from "react-router-dom";
import Stagger from '../stagger/Stagger';

export default function Category({data}) {
  return (
    <div >
      <div className="relative py-20">
        <div className=" absolute top-[10%] left-[40%]">
          <Stagger staggerName={ "Category List" } data={ data } />
        </div>
      </div>
      <div className="">
        <hr className="bg-violet-300 p-[0.6px]" />
      </div>
      <div className="flex items-center justify-center py-10">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}