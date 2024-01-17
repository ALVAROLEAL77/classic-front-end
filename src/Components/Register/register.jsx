
import React, {useState} from 'react'
import './register.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios' 

//Import our assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.svg'

//Imported  Icons
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";



const register = () => {
    // useState to hold our inputs
    const [email, setEmail] = useState('')
    const [userName, setUseName] = useState('')
    const [password, setPassword] = useState('')
    const navigateTo = useNavigate()
 
    const createUser = (e)=>{
        e.preventDefault()
       
        Axios.post('http://localhost:3002/register', {
            
            Email: email,
            UserName: userName,
            Password:password
        }).then(()=>{
            navigateTo('/')

            setEmail('')
            setUseName('')
            setUseName('')
        })
    }


    return(
        <>
        <div className='registerPage flex'>
        <div className='container flex'>

            <div className='videoDiv'>
                <video src={video} autoPlay muted loop></video>

                <div className='textDiv'>
                    <h2 className='title'>Compre ou Venda produtos extraordinários!</h2>
                    <p>Os maiores colecionadores de livros raros do mundo!</p>
                </div>

                <div className='footerDiv flex'>
                <span className='text'>Já possui um conta?</span>
                    <Link to={'/'}>
                    <button className='btn'>Entrar</button>
                    </Link>
                </div>
            </div>

            <div className='formDiv flex'>
                <div className='headerDiv'>
                    <img src={logo} alt='Logo Image' />
                    <h3>Bem-Vindo ao <br/> <span>Classic!</span></h3>
                </div>

                <form action='' className='form grid'>
                   
                    <div className='inputDiv'>
                        <label htmlFor='email'>Email</label>
                        <div className='input flex'>
                            <MdMarkEmailRead className='icon' />
                            <input type='email' id='email' placeholder='Crie um Email' 
                            onChange={(event)=>{
                                setEmail(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className='inputDiv'>
                        <label htmlFor='username'>Usúario</label>
                        <div className='input flex'>
                            <FaUserShield className='icon' />
                            <input type='text' id='username' placeholder='Crie um usúario'
                            onChange={(event)=>{
                                setUseName(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className='inputDiv'>
                        <label htmlFor='password'>Senha</label>
                        <div className='input flex'>
                            <BsFillShieldLockFill  className='icon' />
                            <input type='password' id='password' placeholder='Crie uma senha'
                            onChange={(event)=>{
                                setPassword(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <button type='submit' className='btn flex' onClick={createUser}>
                        <span>Register </span>
                        <AiOutlineSwapRight className='icon'/> 
                    </button>
                    
                </form>
            </div>




        </div>
        </div>
        </>
    )
}

export default register