import { useQuery } from "react-query"

export const useFetch= async (path, body={})=>{
 const [isLoading, error, data]= useQuery('all', async()=>{
    const req=await fetch(`http://localhost:3000/${path}`, body)

    const res= await req.json()

    return res
  
 })
  return [isLoading, error, data]
}