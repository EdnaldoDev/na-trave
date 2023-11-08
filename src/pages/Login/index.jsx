
import { NavLink, useNavigate, Navigate} from 'react-router-dom'
import Brand from '../../assets-natrave/logo/logo-fundo-branco.svg'

import { Container } from "./styles"
import { useState } from 'react'
import { toast } from 'react-toastify'
import Loading from '../../components/Loading'
import { documentTitle } from '../../components/Head'

export const Login=({title})=>{

    documentTitle(title)


    const [nickname, setNickname]=useState(' ')
    const [password, setPassword]=useState(' ')
    const [isLoading, setIsLoading]=useState(false)

    const [isAuth, setIsAutj]=useState((JSON.parse(localStorage.getItem('auth'))?.token || false))


    const navigate= useNavigate()

    const handleSubmit =async (e)=>{
        e.preventDefault()
        setIsLoading(true)

        const req=await fetch(`${import.meta.env.VITE_BASE_URL}login`, {
            method:'post',
            body:JSON.stringify({nickname, password}),
            headers:{
                'Content-Type': 'application/json',
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
            setIsLoading(false)
            toast.warning(res.message, {autoClose:2000})
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
                    <span>Entre na sua conta</span>
                </div>

                <form>
                    <label>Seu usuário</label>
                    <input type="text" value={nickname} onChange={(e)=>setNickname(e.target.value)} placeholder='Digite o seu usuario' />

                    <label>Sua senha</label>
                    <input type='password' placeholder='Digite a sua senha' value={password} onChange={(e)=>setPassword(e.target.value)}/>


                    <button type='button' onClick={handleSubmit} disabled={isLoading}>{!isLoading ? 'Entrar' : <Loading/>}</button>
                </form>

                <div>
                    <span>Não possui uma conta ?</span>
                    <NavLink to='/signup'> Criar conta</NavLink>
                </div>
            </main>
        </Container>
    )
}