
import { useState } from 'react'
import ArrowLeft from '../../assets-natrave/icones/arrow-left.svg'
import ArrowRight from '../../assets-natrave/icones/arrow-right.svg'
import { Container } from './styles'
import { addDays, format, formatISO, subDays } from 'date-fns'

export const SwitchDate=({currentDate, setCurrentDate})=>{
    const prevDate=()=>{
        const prev=formatISO(subDays(new Date(currentDate), 1))
        setCurrentDate(prev)
    }

    const nextDate = ()=>{
        const next=formatISO(addDays(new Date(currentDate), 1))

        setCurrentDate(next)
    }

    return(
        <Container>
            <button onClick={prevDate}> 
                <img src={ArrowLeft} />
            </button>

            <span>{format(new Date(currentDate), " d 'de' MMMM")}</span>

            <button onClick={nextDate}>
                <img src={ArrowRight} alt="pass date" />
            </button>
        </Container>
    )
}