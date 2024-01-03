import '../css/header-style.css'
import { useNavigate } from "react-router-dom";
export default function Header(){
    const navigate = useNavigate();
    return(
        <div className='d-flex justify-content-evenly'>
            <img className='logo' src="images/¿Estás listo para Salir (3)-fotor-bg-remover-20231214215921.png" ></img>
            <img className='align-self-end' onClick={()=>navigate('../profile')} style={{width:"30px",height:"40px"}} src='/images/icons8-user-24.png'></img>
        </div>
    )
}