import Axios from "axios";

const url = `${process.env.API_BASE_URL}`;

export const getInputPlaceholder = () =>
  Axios.get(`${url}/input-List`).then(({ data }) => data);

export const getDrugList = () =>
  Axios.get(`${url}/medicamentos`).then(({ data }) => data);
