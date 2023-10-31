
import styled from 'styled-components'

export const Container= styled.div`
    background-color: white;
    height: inherit;
    overflow: hidden;
    header{
        height: 10vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        border-bottom: rgb(48 2 25) solid 2px;
        img{
            width: 15%;
        }
    }

    main{
        width: 50%;
        margin: 0 auto;

        >div{
            margin: 2rem 0;
            display: flex;
            align-items: center;
            a{
                img{
                    width: 2rem;
                }
            }

            span{
                margin-left: 1rem ;
            }
        }

        form{
            label{
                color: rgba(0,0,0,0.5);
                display: block;
                margin:1em 0;
                
            }

            input{
                width: 100%;
                border: 1px solid black;
                line-height: 3rem;
                border-radius: 1rem;
                padding: 0 .5rem;
            }

            button{
                width: 100%;
                line-height: 3rem;
                background-color: #Af053f;
                border: none;
                margin-top: 2rem;
                border-radius: 1rem;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                

                &:hover{
                    cursor: pointer;
                    filter: brightness(.8);
                }
            }
        }
    }
`