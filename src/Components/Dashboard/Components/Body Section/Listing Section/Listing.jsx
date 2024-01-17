import React from "react";
import './listing.css'

// Imported Icons =============>
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

// Imported Images =============>
import img1 from '../../../Assets/livro1.png'
import img2 from '../../../Assets/livro2.png'
import img3 from '../../../Assets/livro3.png'
import img4 from '../../../Assets/livro4.png'
import img5 from '../../../Assets/livro5.png'
import img6 from '../../../Assets/livro6.png'
import user1 from '../../../Assets/user (2).jpg'
import user2 from '../../../Assets/user (3).jpg'
import user3 from '../../../Assets/user (4).jpg'
import user4 from '../../../Assets/user (5).jpg'

const Listing = () => {
    return(
        <>
        <div className="lisitingSection">
            <div className="heading flex">
                <h1>Minha Lista</h1>
                <button className="btn flex">
                    Ver tudo <BsArrowRightShort 
                    className="icon"/>
                </button>
            </div>

            <div className="secContainer flex">
                <div className="singleItem">
                <AiFillHeart className="icon"/>
                <img src={img1} alt="Image Name" />
                <h4>Drácula</h4>
                </div>

                <div className="singleItem">
                <AiOutlineHeart illHeart className="icon"/>
                <img src={img2} alt="Image Name" />
                <h4>Frankenstein</h4>
                </div>

                <div className="singleItem">
                <AiOutlineHeart  className="icon"/>
                <img src={img3} alt="Image Name" />
                <h4>Poemas em Prosa</h4>
                </div>

                <div className="singleItem">
                <AiFillHeart className="icon"/>
                <img src={img4} alt="Image Name" />
                <h4>O pianista Virtuoso</h4>
                </div>

                <div className="singleItem">
                <AiOutlineHeart className="icon"/>
                <img src={img5} alt="Image Name" />
                <h4>A Múmia</h4>
                </div>

                <div className="singleItem">
                <AiFillHeart className="icon"/>
                <img src={img6} alt="Image Name" />
                <h4>Bíblia Sagrada</h4>
                </div>
            </div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Mais Raros</h3>
                        <button className="btn flex">
                            Ver Tudo <BsArrowRightShort className="icon"/>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={user1} alt="User Image" />
                            <img src={user2} alt="User Image" />
                            <img src={user3} alt="User Image" />
                            <img src={user4} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>
                               867 livros <br />
                               <small>
                                21 Colecionadores <span className="date">7 dias</span>
                               </small> 
                            </span>
                        </div>
                    </div>
                </div>

                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3> Em destaque</h3>
                        <button className="btn flex">
                            Ver tudo <BsArrowRightShort className="icon"/>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={user3} alt="User Image" />
                            <img src={user1} alt="User Image" />
                            <img src={user4} alt="User Image" />
                            <img src={user2} alt="User Image" />
                        </div>
                        <div className="cardText">
                            <span>
                               2086 livros <br />
                               <small>
                                26 Colecionadores <span className="date">31 dias</span>
                               </small> 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Listing;