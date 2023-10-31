import { useState } from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading";

export function Game({game}){
    const [auth, setAuth]=useState((JSON.parse(localStorage.getItem('auth')) || false))

    const [homeTeam, setHomeTeam]=useState(0)
    const [awayTeam, setAwayTeam]=useState(0)

    const [isLoading, setIsloading]=useState(false)

    const navigate=useNavigate()

    const handleBet=async ()=>{
        setIsloading(true)
        if(!auth){
            toast.warning('Faça login para poder palpitar')
            localStorage.setItem('palpites', JSON.stringify({
                game,
                placar:`${homeTeam} x ${awayTeam}`
            }))
            navigate('/login?from=dash')
        }else{ 
          try{
            const req=await fetch('http://localhost:3000/bet', {
                method:'post',
                headers:{
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${auth.token}`
                },
                body:JSON.stringify({
                    game:{
                        scoreboard:`${homeTeam} x ${awayTeam}`,
                        userId:auth.userId,
                        gameId:game.id
                    }
                })
               })
               const res= await req.json()
               setIsloading(false)
               toast.success(res.message)
          }catch(err){
            setIsloading(false)
            toast.error('Erro')
          }

          


        }
    }


    return(
        <Container>
            <div>
                <span>
                    {game.homeTeam}
                </span>
                <img src='https://json.gazetaesportiva.com/footstats/logos/88x88/palmeiras.png' />

                <input type="number"  value={homeTeam} onChange={(e)=>setHomeTeam(e.target.value)} min={0} max={10} />

                <span>X</span>

                <input type="number" value={awayTeam} onChange={(e)=>setAwayTeam(e.target.value)} min={0} max={10}  />

                <img src='/' />
                
                <span>{game.awayTeam}</span>

            </div>
            <button onClick={handleBet} disabled={isLoading}>
                {isLoading ? <Loading/> : 'Palpitar'}
            </button>
        </Container>
    )
}