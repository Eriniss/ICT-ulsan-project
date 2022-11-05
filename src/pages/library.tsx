import { useState } from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Request, Response, NextFunction } from "express";
import { Link } from "react-router-dom";
import axios from "axios";

const Library = () => {
  axios
  .get("http://localhost:4000/intro")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  }
  );

  return (
    <div>
      <h1>라이브러리 페이지</h1>
    </div>
  )
}

export default Library;