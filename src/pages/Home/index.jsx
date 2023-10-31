
import Brand from '../../assets-natrave/logo/logo-fundo-vinho.svg'
import HomeImg  from '../../assets-natrave/icones/profile.svg'

import {Container} from './home'
import { NavLink, Navigate } from 'react-router-dom'
import { useState } from 'react'

function Home() {
  const [isAuth, setIsAutj]=useState((JSON.parse(localStorage.getItem('auth'))?.token || false))

  if(isAuth){
    return <Navigate to='/dashboard'/>
  }

  return (
    <Container>
      <div id="brand">
        <img src={Brand}/>
      </div>

      <main>
        <section>
          <img src='https://palpite-frontend-5jvg06jln-ednaldocs.vercel.app/assets-natrave/imagem/img.png'/>
        </section>

        <section>
          <h2>Dê o seu palpite nos jogos do brasileirão e copa do Brasil e ganhe pontos!</h2>
          <NavLink to='/signUp'>Criar minha conta</NavLink>
          <NavLink to='/login'>Fazer login</NavLink>
        </section>
      </main>
    </Container>
  )
}

export default Home
