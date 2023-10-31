import styled from 'styled-components'

export const Container= styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    #brand{
        height: 10vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        img{
            width: 20%;
        }
    }


    main{
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 7rem;
      
        section:first-child, section:nth-child(2){
            width: 100%;
            height: 100%;
            display: inherit;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        section:first-child{
            img{
                width: 100%;
                transform: scale(.8);
            }
        }

        section:nth-child(2){
          h2{
           color:white; 
          }

         a:nth-child(2), a:nth-child(3){
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 4rem;
            border-radius: 1rem;
            margin-top:1.5rem ;
            border: none;
            font-size: 1.5rem;
            text-decoration: none;

            &:hover{
                cursor: pointer;
                filter: brightness(.8);
            }
          }

          a:nth-child(2){
            color: rgb(48 2 25);
            background-color: white;
          }

          a:nth-child(3){
            color: white;
            background-color: transparent;
            border: 1px solid white;
          }
        }
    }


    @media (max-width:720px){
        
        main{
            flex-direction: column;
        }
    }
`