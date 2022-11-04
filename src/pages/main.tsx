import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Request, Response, NextFunction } from "express";
import { Link } from "react-router-dom";
import Carousel from '../components/carousel';
import WeeklyBooks from "../components/weeklyBooks";

interface dataType {
  _id: any;
  title: string;
  body: string;
}

const Main = () => {
  axios
  .get("http://localhost:4000")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  }
  );
  
  return (
    <div className="Main">
      <Carousel />
      <WeeklyBooks />
    </div>
  )
};

export default Main;