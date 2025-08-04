import axios from 'axios';
import { TransformedData } from '../interfaces/transformerData';
import config from '../config/config';

export const sendData = async (data: TransformedData) => {
  const columnValues = {
  [config.edadColumn]: data.Edad,
  [config.emailColumn]: {
    email: data.CorreoElectrónico,
    text: data.CorreoElectrónico
  },
  [config.phoneColumn]: data.Teléfono,
  [config.dateColumn]: new Date().toISOString().slice(0, 10),
  [config.githubColumn]: {
    url: data.github,
    text: data.github
  }
};

const mutation = {
  query: `mutation {
    create_item (
      board_id: 9708143217,
      item_name: "Leonel Alejandro Ceballos Alvarado",
      column_values: "${JSON.stringify(columnValues).replace(/"/g, '\\"')}"
    ) {
      id
    }
  }`
};

const response = await axios.post(
  config.apiUrl!,
  mutation,
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: data.API
    }
  }
);


  console.log(response.data);
};
