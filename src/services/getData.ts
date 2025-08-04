import axios from 'axios';
import config from '../config/config';
import { ResponseData } from '../interfaces/responseData';

export const getData = async (): Promise<ResponseData> => {
  if (!config.webhookUrl) {
    throw new Error('Webhook URL is not defined in the configuration');
  }
  const response = await axios.get<ResponseData>(config.webhookUrl);
  return response.data;
};
