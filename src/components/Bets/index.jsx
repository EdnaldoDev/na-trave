import { useState } from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Bets({game, scoreboard}){
    const [auth, setAuth]=useState((JSON.parse(localStorage.getItem('auth')) || false))

    const [homeTeam, setHomeTeam]=useState(scoreboard&&scoreboard.split('x')[0])
    const [awayTeam, setAwayTeam]=useState(scoreboard && scoreboard.split('x')[1])

    const navigate=useNavigate()

    const handleBet=async ()=>{
        if(!auth){
            toast.warning('Faça login para poder palpitar')
            localStorage.setItem('palpites', JSON.stringify({
                game,
                placar:`${homeTeam} x ${awayTeam}`
            }))
            navigate('/login?from=dash')
        }else{ 
           const req=await fetch(`${import.meta.env.VITE_BASE_URL}bet`, {
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

           toast.success(res.message)

        }
    }


    return(
        <Container>
            <div>
                <span>
                    {game.homeTeam}
                </span>
                <img src='https://json.gazetaesportiva.com/footstats/logos/88x88/palmeiras.png' />

                <input type="text"  disabled value={homeTeam} onChange={(e)=>setHomeTeam(e.target.value)} min={0} max={10} />

                <span>X</span>

                <input type="text" disabled value={awayTeam} onChange={(e)=>setAwayTeam(e.target.value)} min={0} max={10}  />

                <img src='https://json.gazetaesportiva.com/footstats/logos/88x88/botafogo.png' />
                
                <span>{game.awayTeam}</span>

            </div>
        </Container>
    )
}
