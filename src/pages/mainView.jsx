import TopEvents from "../components/topEvents.jsx";
import React from 'react';
import Header from "../components/header.jsx";
import { ListOfCategories } from "../components/listCategories.jsx";
import { useEffect, useState } from "react";
export default function Main() {
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {}, []);
  return (
    <>
      <Header></Header>
      <div className="d-flex justify-content-center col-12">
        <p className="spot text-center fs-4 col-6 mt-4">
          Descubre los mejores Eventos en eventy, y si no encuentras tu evento
          ideal !Crealo!{" "}
        </p>
      </div>
      <div className="d-flex mt-3 flex-column flex-sm-column flex-md-row align-items-sm-center align-items-md-start flex-lg">
        <div className="col-12 col-sm-10 col-md-6 order-2">
          <TopEvents></TopEvents>
        </div>
        <div className="col-12 col-sm-10 col-md-6 order-1">
          <ListOfCategories></ListOfCategories>
        </div>
      </div>
    </>
  );
}
