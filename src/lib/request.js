// ** Third Party Imports
import axios from "axios";

// to have a delay in fetching data to see the loading component
function sleep(ms = 500) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const client = (() => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  });
})();

const request = async function (options, processData) {
  //success handler
  const onSuccess = async function (response) {
    const { data } = response;

    if (processData) {
      return processData(response);
    }

    await sleep(); // for delaying the return of data

    return data;
  };

  //error handler
  const onError = function (error) {
    return Promise.reject(error.response);
  };

  //adding success and error handler to client
  return client(options).then(onSuccess).catch(onError);
};

export default request;
