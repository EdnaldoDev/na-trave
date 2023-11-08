
import { NavLink, Navigate, redirect, useNavigate } from 'react-router-dom'


import Brand from '../../assets-natrave/logo/logo-fundo-branco.svg'

import { Container } from "./styles"
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { toast } from 'react-toastify'
import Loading from '../../components/Loading'
import { documentTitle } from '../../components/Head'



export const SignUp=({title})=>{
    documentTitle(title)

    const [isAuth, setIsAutj]=useState((JSON.parse(localStorage.getItem('auth'))?.token || false))

    const navigate=useNavigate()

    const [name, setName]=useState('wdkqjh')
    const [email, setEmail]=useState(' ')
    const [nickname, setNickname]=useState(' ')
    const [password, setPassword]=useState(' ')

    const [isLoading, setIsLoading]=useState(false)
    

    const handleSubmit =async (e)=>{
        e.preventDefault()

        setIsLoading(true)
        const req=await fetch(`${import.meta.env.VITE_BASE_URL}signup`, {
            method:'post',
            body:JSON.stringify({
                email, name, nickname, password
            }),
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            }
        })

        const res=await req.json()

        if(req.status=== 201){
            localStorage.setItem('auth', JSON.stringify({
                nickname,
                userId: res.userId, 
                token:res.token
            }))

          
            navigate('/dashboard')
        } else{
            toast.error(res.message, {autoClose:2000})
            setIsLoading(false)
            navigate('/login')
        }
    }

    if(isAuth){
       return <Navigate to='/dashboard'/>
    }

    return(
        <Container>
            <header>
                <img src={Brand}/>
            </header>

            <main>
                <div>
                    <NavLink to='/'>
                        <img src='public/back.svg' />
                       
                    </NavLink>
                    <span>Crie sua conta</span>
                </div>

                <form onSubmit={handleSubmit}>
                    <label>Seu nome</label>
                    <input type="text" placeholder='Digite o seu nome' required value={name} onChange={(e)=>setName(e.target.value)}/>

                    <label>Seu e-mail</label>
                    <input type="email" placeholder='Digite o seu E-mail' required value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    <label>Seu usuário</label>
                    <input type="text" placeholder='Digite o seu iusuário' required value={nickname} onChange={(e)=>setNickname(e.target.value)}/>

                    <label>Sua senha</label>
                    <input type='password' placeholder='Digite a sua senha' required value={password} onChange={(e)=>setPassword(e.target.value)}/>


                    <button type='submit'>{isLoading?<Loading/> : 'Criar conta'}</button>
                </form>

                <div>
                    <span>Já possui uma conta ?</span>
                    <NavLink to='/login'> Entrar</NavLink>
                </div>
            </main>

        </Container>
    )
}