
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://new-you.herokuapp.com/v1/';

const newApi = axios.create({ baseURL });

// const mlcURL = 'https://api.mercadolibre.com/sites/MLC/';

// export const mercadolibreApi = axios.create({ baseURL: mlcURL });

export const newApiNoHeader = axios.create({ baseURL });

 newApi.interceptors.request.use(
      async (config:any) => {
          const token = await AsyncStorage.getItem('tokenNew');
          if (token) {
              config.headers['Authorization'] = token ? `Bearer ${token}` : '';
          }
          return config;
      }
  );

export default newApi;