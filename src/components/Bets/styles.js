import styled  from "styled-components";

export const Container =styled.div`
    width: 60%;
    margin: 0 auto;
    border: 1px solid #808080;
    border-radius: 1rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    margin-bottom: 1rem;

    >div, button{
        max-width: 90%;
        margin: 0 5%;
    }

    >div{
      display: flex;
      justify-content: space-around;
      align-items: center;

      span{
        font-weight: 600;
      }

      input{
        width: 3rem;
        height: 3rem;

        border: none;
        background-color: #cf494d;
        color: white;
        text-align: center;
        font-size: 1.5rem;
      }
    }


    @media (max-width:720px){
      width: 90%;
      margin-top: 1rem;
    }
`