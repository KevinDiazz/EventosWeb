import { useNavigate } from "react-router-dom";
import '../css/mainView-style.css'
import React from 'react';
export default function Container({data1,data2}){
    const navigate =useNavigate()
return(
    <div className="fixedDiv d-flex flex-column align-items-center col-12  mb-5">
      <p className="titleTopEvents fs-4">CATEGORIAS</p>
      <div className="d-flex col-12 flex-wrap gap-3 justify-content-center ">
        {data1 && data2.tiposEvento.map((valor) => (
              <div
                className="container-typeEvent col-xl-6 col-md-10 col-sm-12 col-10 d-flex align-items-center p-2"
                key={valor}
                onClick={() => navigate("../listEvents", { state: valor })}
              >
                <p className="col-10 text-center mt-3 p-2">{valor}</p>
                <img className="w-auto" src={data1[valor] ? data1[valor] : ""} alt="Icono" />
              </div>
            ))
          }
      </div>
    </div>
  );
        }