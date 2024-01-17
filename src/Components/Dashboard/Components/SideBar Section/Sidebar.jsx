import React from "react";
import './sidebar.css'

// Imported Images ============>
import logo from '../../Assets/logo1.svg'

// Imported Icons =============>
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";




const Sidebar = () => {
    return(
        <>
        <div className="sideBar grid">
            <div className="logoDiv flex">
                <img src={logo} alt='Image Name'/>
                <h2>Classic</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    MENU
                </h3>
                <ul className="menuLists grid">
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <IoMdSpeedometer className="icon"/>
                        <span className="smallText">
                            Painel
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <MdDeliveryDining  className="icon"/>
                        <span className="smallText">
                            Meus Pedidos
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <MdOutlineExplore  className="icon"/>
                        <span className="smallText">
                            Explorar
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <BsTrophy className="icon"/>
                        <span className="smallText">
                            Produtos
                        </span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="settingsDiv">
                <h3 className="divTitle">
                    Configurações
                </h3>
                <ul className="menuLists grid">
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <AiOutlinePieChart  className="icon"/>
                        <span className="smallText">
                            Gráficos
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <BiTrendingUp className="icon"/>
                        <span className="smallText">
                            Tendências
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <MdOutlinePermContactCalendar   className="icon"/>
                        <span className="smallText">
                            Contatos
                        </span>
                        </a>
                    </li>

                    <li className="listItem ">
                        <a href="#" className="menuLink flex">
                        <BsCreditCard2Front  className="icon"/>
                        <span className="smallText">
                            Cobrança
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="http://localhost:5173/" className=" btn-exit flex">
                        <BsArrowLeftShort  className="icon"/>
                        <span className="smallText">
                            Sair
                        </span>
                        </a>
                    </li>

                </ul>

            </div>

            <div className="sideBarCard">
            <BsQuestionCircle className="icon"/>
                <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <h3>Ajuda</h3>
                    <p>Tendo problemas com o Classic, por favor entre em contato conosco para mais questões</p>
                    <button className="btn">Central de ajuda</button>
                 </div> 
            </div>
        </div>
        </>
    )
}

export default Sidebar;             