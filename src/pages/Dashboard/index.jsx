import Brand from '../../assets-natrave/logo/logo-fundo-vinho.svg'
import Profile from '../../assets-natrave/icones/profile.svg'


import {Container} from './styles'
import { NavLink } from 'react-router-dom'
import { SwitchDate } from '../../components/SwitchDate'
import { Game } from '../../components/Game'
import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useQuery } from 'react-query'  
import { format, formatISO } from 'date-fns'
import { useAsyncFn, useLocalStorage } from 'react-use'
import { documentTitle } from '../../components/Head'




export function Dashboard({title}){

    documentTitle(title)

    const [currentDate, setCurrentDate]=useState(formatISO(new Date('2023-11-20')))
    const [gamesData, setGamesData]=useState([])
    const [user, setUser]=useState(JSON.parse(localStorage.getItem('auth'))?.nickname || 'visitante') 
    const [gameDataLocal, setGameDataLocal]=useLocalStorage('games', {})

    const [games, doFecth]= useAsyncFn(async ()=> {
        const req=await fetch(`${import.meta.env.VITE_BASE_URL}games`)
    
        const res= await req.json()
        setGameDataLocal(res)
        return res  
    })

    useEffect(()=>{
       if(!games.value){
        doFecth()
       }
      
    //    setCurrentDate(formatISO(new Date(games.value[0]?.gameTime)))
        let resp= games.value  &&  games.value.filter((game)=>{
            if(game.gameTime.substring(5,10) === currentDate.substring(5,10) ){
                return game
            }
        })  

        setGamesData(resp)
      

    }, [currentDate])  
   

    return(
        <Container>
            <header>
                <div>
                     <img src={Brand}/>

                    <NavLink to='/profile'> 
                        <img src={Profile}/>
                    </NavLink>     
                </div>

                <div>
                    <span>Olá {user}</span>
                    <h4>Qual deu palpite?</h4>
                </div>
            </header>


            <main>
                <section>
                    <SwitchDate currentDate={currentDate} setCurrentDate={setCurrentDate}/>
                </section>

                <section>
                    {gamesData && gamesData.length === 0 ? <h1 id='no-game'>Nenhum jogo previsto para essa data!</h1> : ''}
                    {
                       gamesData && gamesData.map((game)=>{
                       return( <Game game={game} key={game.id}/>    )
                       })
                    }

                </section>
            </main>
        </Container>
    )
}