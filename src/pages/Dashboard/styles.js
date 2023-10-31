import styled from "styled-components";

export const Container = styled.div`
    
    background-color: white;
    min-height: 100vh;

    header{
        background-color: #af053f;
        width:100%;
        color:white;
        >div{
            width: 80%;
            margin: 0 auto;
            padding: 1rem 0;


            h4{
                font-size: 1.5rem;
                margin:.7rem 0 ;
            }
          
        }

        div:first-child{
            display: flex;
            justify-content: space-between;
            align-items: center;

            a{
              display: inherit;
               justify-content: right;
            }
        }


        div:nth-child(2){
            span{
                color: #f4f2f4;
            }

        }

        img{
            width: 20%;
        }
    }
`