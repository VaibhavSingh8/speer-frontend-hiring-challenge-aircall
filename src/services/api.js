import axios from 'axios';

const Base_URL = 'https://cerulean-marlin-wig.cyclic.app/';

const api = axios.create({
  baseURL: Base_URL,
})

export const getActivities = async () => {
  try {
    const response = await api.get('activities');
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }

}