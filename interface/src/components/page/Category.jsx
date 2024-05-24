import React from 'react';
import { Link, Outlet } from "react-router-dom";
import ButtonTap from '../ButtonTap';
import Stagger from '../stagger/Stagger';

export default function Category({data}) {
  return (
    <div >
      <div className="relative py-20 bg-orange-300 z-10">
        <div className=" absolute top-[10%] left-[40%]">
          <Stagger staggerName={ "Category List" } data={ data } />
        </div>
        <Link className="p-5" to="/">
          <ButtonTap text="Home"/>
        </Link>
      </div>
      <div className="">
        <hr className="bg-violet-300 p-[0.6px]" />
      </div>
      <div className="flex items-center justify-center py-10 z-0">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}