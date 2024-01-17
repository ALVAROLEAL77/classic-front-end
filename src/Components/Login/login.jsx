


import React, {useEffect, useState} from 'react'
import './login.css'
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


const Login = () => {
    //Usestate hook to store inputs
    const [loginUserName, setLoginUseName] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const navigateTo = useNavigate()


    const [loginStatus, setLoginStatus] = useState('')
    const [statusHolder, setstatusHolder] = useState('message')


    const loginUser = (e)=>{
            e.preventDefault()
            Axios.post('http://localhost:3002/login', {
            LoginUserName: loginUserName,
            LoginPassword: loginPassword
        }).then((response)=>{
            console.log()

            if(response.data.message || loginUserName == '' || loginPassword ==''){
                navigateTo('/')
                setLoginStatus(`Credenciais não existem!` )
            }
            else{
                navigateTo('/dashboard')
            }
        })
    }

    useEffect(()=>{
        if(loginStatus !=='' ){
            setstatusHolder('showMessage')
            setTimeout(()=> {
                setstatusHolder('message')
            }, 4000)
        }
        }, [loginStatus])


        const onSubmit = ()=>{
            setLoginUseName('')
            setLoginPassword('')
        }


    return(
        <>
        <div className='loginPage flex'>
        <div className='container flex'>

            <div className='videoDiv'>
                <video src={video} autoPlay muted loop></video>

                <div className='textDiv'>
                    <h3 className='title'>Compre ou Venda produtos extraordinários!</h3>
                    <p>Os maiores colecionadores de livros raros do mundo!</p>
                </div>

                <div className='footerDiv flex'>
                    <span className='text'>Novo no Classic?</span>
                    <Link to={'./register'}>
                    <button className='btn'>Cadastre-se</button>
                    </Link>
                </div>
            </div>

            <div className='formDiv flex'>
                <div className='headerDiv'>
                    <img src={logo} alt='Logo Image' />
                    <h3>Bem-Vindo ao <br/> <span>Classic!</span></h3>
                </div>

                <form className='form grid' onSubmit={onSubmit}>
                    <span className={statusHolder}>{loginStatus}</span>

                    <div className='inputDiv'>
                        <label htmlFor='username'>Usúario</label>
                        <div className='input flex'>
                            <FaUserShield className='icon' />
                            <input type='text' id='username' placeholder='Insira o usúario'
                            onChange={(event)=>{
                                setLoginUseName(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className='inputDiv'>
                        <label htmlFor='password'>Senha</label>
                        <div className='input flex'>
                            <BsFillShieldLockFill  className='icon' />
                            <input type='password' id='password' placeholder='Insira a senha'
                            onChange={(event)=>{
                                setLoginPassword(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <button type='submit' className='btn flex' onClick={loginUser}>
                        <span>Acesse</span>
                        <AiOutlineSwapRight className='icon'/> 
                    </button>

                    <span className='forgotPassword'>
                        Esqueceu a senha? <a href=''>Clique aqui!</a>
                    </span>
                    
                </form>
            </div>




        </div>
        </div>
        </>
    )
}

export default Login