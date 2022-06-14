const getApiPath = () => {
  return `${process.env.REACT_APP_API_DOMAIN}:${
    process.env.REACT_APP_API_PORT ? process.env.REACT_APP_API_PORT : ''
  }`;
};
export default getApiPath;
