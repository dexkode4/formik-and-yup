import Axios from '../axios'
// import { toast } from 'react-toastify'
// import { BASE_URL } from '../../../../../../config/constants'
export const BASE_URL = 'https://fitted-portal-api.herokuapp.com/api/v1/';

export async function getSuppliers() {
    await Axios.get(`${BASE_URL}supplier/suppliers`,)
        .then((res) => {
            return res.data
        })
        .catch(function (error) {
            console.error(error)
            // toast.error('Unable to fetch suppliers at this time!');
        });
}