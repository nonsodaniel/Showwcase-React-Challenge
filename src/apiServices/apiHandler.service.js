import axios from "axios";
import { baseUrl } from './config.service'


export const Get = async (url) => {
  try {
    return await axios.get(`${baseUrl}/${url}`)
  }
  catch (error) {
    throw error
  }
}


