import Brand from '../../assets-natrave/logo/logo-fundo-vinho.svg'
import ProfileImg from '../../assets-natrave/icones/profile.svg'

import {Container} from './styles'
import { NavLink } from 'react-router-dom'
import { SwitchDate } from '../../components/SwitchDate'
import { Game } from '../../components/Game'

import Back from '../../assets-natrave/icones/back.svg'
import { useEffect, useState } from 'react'
import { formatISO } from 'date-fns'
import { useQuery } from 'react-query'
import { Bets } from '../../components/Bets'
import { useAsyncFn, useLocalStorage } from 'react-use'

import {FaSignInAlt } from 'react-icons/fa';
import { documentTitle } from '../../components/Head'

export function Profile(){
    documentTitle('Dashboard')

    const [currentDate, setCurrentDate]=useState(formatISO(new Date('2022-11-21')))
    const [gamesData, setGamesData]=useState([])
    
    const [auth, setAuth]=useState(JSON.parse(localStorage.getItem('auth'))) 

    const [myBets, setMyBets]=useLocalStorage('bets', {})

    const [bets, doFetch]=useAsyncFn(async()=>{
        const req=await fetch(`${import.meta.env.VITE_BASE_URL}mybets`,{
            method:'get',
            headers:{
                'Content-Type':'application/json',
                "Authorization": `Bearer ${auth.token}`
            }
        })
    
        const res= await req.json()

        console.log(res)
        setMyBets(res)
         return res
    })

     useEffect(()=>{

        if(!bets.value){
            doFetch()
        }


        let resp= bets.value &&  bets.value.filter((item)=>{
            if(item.game && item.game.gameTime.substring(5,10) === currentDate.substring(5,10) ){
                 return item
            }
         })

         setGamesData(resp)
        
     },[currentDate])


     const handleLogOut =()=>{
        localStorage.removeItem('auth')
        window.location.reload();
     }


    return(
        <Container>
            <header>
                <div>
                     <img src={Brand}/>

                    <button onClick={handleLogOut}>
                        <FaSignInAlt size={30}/>
                    </button>
                </div>

                <div>
                    <NavLink to='/dashboard'> 
                        <img src={Back}/>
                    </NavLink>  
                    <h4>Olá Ednaldo</h4>
                </div>
            </header>


            <main>
                <h2>Seus palpites</h2>

                <section>
                    <SwitchDate  currentDate={currentDate} setCurrentDate={setCurrentDate} />
                </section>

                <section>
                {gamesData && gamesData.length === 0 ? <h1 id='no-game'>Nenhum jogo previsto para essa data!</h1> : ''}

                    {gamesData &&
                        gamesData.map((game, index)=>(
                            <Bets key={game.id} game={game.game} scoreboard={game.scoreboard} />
                        ))
                   
                    }
                </section>
            </main>
        </Container>
    )
}
