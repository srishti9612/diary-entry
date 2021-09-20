import axios from 'axios'

const setToken = newToken => {
  const token = `bearer ${newToken}`
  window.localStorage.setItem('token', token)
}

const getAll = () => {
  const token = window.localStorage.getItem('token')
  const config = {
	  headers: { Authorization: token },
  }
  const request = axios.get('/api/users/entries', config)
  
  return request.then(response => response.data)
}

const signup = newObject => {
  const request = axios.post('/api/users', newObject)
  return request.then(response => response.data)
}


const login = credentials => {
  const request = axios.post('/api/login', credentials)
  return request.then(response => response.data)
                .catch(err => console.log(err))
}


const deleteEntry = entryId => {

  const token = window.localStorage.getItem('token')

  const config = {
    headers: { Authorization: token },
  }

  const request = axios.delete(`/api/users/entry/${entryId}`, config)
  return request.then(response => response.data)
	        .catch(err => console.log = function() {})
} 


const newentry = entryObject => {
    const token = window.localStorage.getItem('token')
    const config = {
      headers: { Authorization: token },
    }
    const request = axios.post('/api/users/entry', entryObject, config)
    return request.then(response => response.data)
	          .catch(err => console.log = function() {})
}

export default { getAll, signup, login, setToken, newentry, deleteEntry }
