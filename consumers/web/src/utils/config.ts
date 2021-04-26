const config = {
  API_URL: process.env.REACT_APP_API_URL || '',
  API_PORT: process.env.REACT_APP_PORT || '',
  API_VERSION: process.env.REACT_APP_API_VERSION || '',
};
export default config;
export const basePath = `${process.env.REACT_APP_API_URL}`
//export const tempDataPath = `https://raw.githubusercontent.com/javascriptBoiler/testcodes/master/location.json`
