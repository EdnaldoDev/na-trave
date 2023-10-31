import styled from 'styled-components'

export const Container = styled.div`
        width: 60%;
        margin: 0 auto;
        min-width:200px;
        display: flex;
        button{
            border: none;
           margin: .75rem 0;
            background-color: transparent;
            img{
                width: 10%;
            }

            &:hover{
                cursor: pointer;
                filter: brightness(.9);
            }
        }

        span{
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
        }
    

`