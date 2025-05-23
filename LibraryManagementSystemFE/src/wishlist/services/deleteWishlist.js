import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const deleteWishlist = (idToDelete) => { 
    const body = {
        idWishlist: idToDelete
    };

    const { getToken } = tokenManager();
    const token = getToken();

    return axios.post(`${environment.rootApi}/call/wishlist/delete`, body,
    {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        }
    })
} 

export default deleteWishlist