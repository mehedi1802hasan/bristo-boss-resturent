import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
const useCard=()=>{
const {user}=useContext(AuthContext)
const { refetch,  data:card=[] } = useQuery({
queryKey: ['cards', user?.email],
queryFn: async () => {
  const res = await fetch(`http://localhost:3000/cards?email=${user?.email}`)
 
  return res.json()

}
})
return [card,refetch]
}
export default useCard;