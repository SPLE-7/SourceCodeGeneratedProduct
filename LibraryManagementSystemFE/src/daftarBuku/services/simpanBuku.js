import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const simpanBuku = (data = {}) => {
	let body = data;

	const { getToken } = tokenManager();
	const token = getToken();
	
	return axios.post(`http://localhost:7777/call/buku`, body,
	{
		params: { token },
		
		headers: {
			'Authorization': `Bearer ${token}`,
		}
	})
}

export default simpanBuku
