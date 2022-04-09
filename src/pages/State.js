import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import Head from "../components/Head/Head";
import "./State.css";

export default function State() {
  const [name, setName] = useState();
  return (
    <>
      <Head />
      <div className="div-main">
        <label for="name">Quelle est ton nom ? :</label>
        <input type="text" name="" id="" />
        <Nav />
      </div>
    </>
  );
}
