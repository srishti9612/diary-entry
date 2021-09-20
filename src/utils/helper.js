import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'


toast.configure()


const showtoast = (message) => {
    toast(message, { position: toast.POSITION.TOP_CENTER, autoClose: false })
}

export default { showtoast }
  