import { ResponseData } from '../interfaces/responseData';
import config from '../config/config';

export const transformData = (data: ResponseData) => {
  return {
    API: data.API,
    Edad: config.edad,
    Fecha: new Date().toISOString(),
    Nombre: config.name,
    Teléfono: config.phone,
    CorreoElectrónico: config.email,
    github: config.github
  };
};
