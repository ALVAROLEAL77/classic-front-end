import React from "react";
import './top.css'

// Imported Icons =============>
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";


// Imported Images =============>
import img from '../../../Assets/user (1).jpg'
import img2 from '../../../Assets/abajur.png'
import video from '../../../Assets/video1.mp4'

const Top = () => {
    return(
        <>
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Bem-vindo ao Classic!</h1>
                    <p>Olá Álvaro, Bem-vindo de volta..</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder="pesquise por livros" />
                    <BiSearchAlt className='icon' />
                </div>

                <div className="adminDiv flex">
                <TbMessageCircle className='icon' />
                <MdOutlineNotificationsNone className='icon' />
                <div className="adminImage">
                    <img src={img} alt="Admin Image" />
                </div>

                </div>
            </div>

            <div className="cardSection flex">

                <div className="rightCard flex">
                    <h1>Compre ou Venda produtos extraordinários!</h1>
                    <p>Interaja e faça Negócios com os maiores colecionadores de livros raros do mundo!</p>

                    <div className="buttons flex">
                        <button className="btn">Explore mais</button>
                        <button className="btn transparent">Mais Raros</button>
                    </div>

                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted ></video>
                    </div>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        <div className="textDiv">
                            <h1>Estatísticas</h1>

                            <div className="flex">
                                <span>
                                    Hoje <br /> <small>4 pedidos</small>
                                </span>

                                <span>
                                    Este mês<br /> <small>15 pedidos</small>
                                </span>
                            </div>

                            <span className="flex link">
                                Ir para meus pedidos <BsArrowRightShort className="icon"/>

                            </span>

                        </div>

                        <div className="imgDiv">
                            <img src={img2} alt="Image Name" />
                        </div>

                       
                        <div className="sideBarCard">
                         <BsQuestionCircle className="icon"/>
                            <div className="cardContent">
                                <div className="circle1"> </div>
                                <div className="circle2"> </div>
                                <h3>Ajuda</h3>
                                <p>
                                    Tendo problemas com o Clássico, por favor
                                    entre em contato conosco para mais
                                    questões
                                </p>
                                <button className="btn">
                                Central de Ajuda

                                </button>
                            </div> 
                        </div> 
                    

                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Top;