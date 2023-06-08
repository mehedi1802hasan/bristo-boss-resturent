import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
const useCard=()=>{
const {user,loading}=useContext(AuthContext);
const [axiosSecure]=useAxiosSecure();
const token= localStorage.getItem('access-token')
const { refetch,  data:card=[] } = useQuery({
queryKey: ['cards', user?.email],
enabled:!!user?.email && !!localStorage.getItem("access-token"),
queryFn: async () => /**{
  const res = await fetch(`http://localhost:3000/cards?email=${user?.email}`,{
    headers:{
      authorization: `bearer ${token}`
}**/

{
  const res = await axiosSecure(`/cards?email=${user?.email}`)
 console.log('res from axios',res)
  return res.data

}
})
return [card,refetch]
}
export default useCard;