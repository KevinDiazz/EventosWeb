import { useNavigate } from "react-router-dom";
export default function Container({data1,data2}){
    const navigate =useNavigate()
return(
    <div className="d-flex flex-column align-items-center col-12  mb-5">
      <p className="fs-4">Categorias</p>
      <div className="d-flex col-12 flex-wrap gap-3 justify-content-center ">
        {data1 && data2.tiposEvento.map((valor) => (
              <div
                className="container-typeEvent col-6 d-flex align-items-center"
                key={valor}
                onClick={() => navigate("../listEvents", { state: valor })}
              >
                <p className="col-10 text-center mt-3 p-2">{valor}</p>
                <img src={data1[valor] ? data1[valor] : ""} alt="Icono" />
              </div>
            ))
          }
          {console.log(data1)}
      </div>
    </div>
  );
        }