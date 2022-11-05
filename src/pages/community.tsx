import { useState } from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Request, Response, NextFunction } from "express";
import { Link } from "react-router-dom";
import axios from 'axios';

const Community = () => {
  axios
  .get("http://localhost:4000/community")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  }
  );

  return (
    <div>
      <h1>커뮤니티 페이지</h1>
    </div>
  )
}

export default Community;