import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Themes from './Themes';

export default function Root() {
  return (
    <>
      <Navbar />
      <Themes />
      <Outlet />
    </>
  );
}
