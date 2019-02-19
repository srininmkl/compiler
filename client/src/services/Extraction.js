import axios from 'axios'
import Auth from 'helpers/Auth';

var Extraction = {}
let baseURL = Auth.getBaseURL();

Extraction.postData = (dataToServer, scb, ecb) => {
  axios
    .post(baseURL, dataToServer)
    .then(response => {
      let data = response.data;
      if (typeof data === 'string'){
        throw data;
      }
      scb(data);
    })
    .catch(e => {
      handleError(e, ecb);
    });
}



var handleError = (e, ecb) => {
  if (typeof e === 'string') {
    return ecb(e);
  }
  let msg = 'Cannot process the selected file. Please try again.'
  return ecb(msg);
};


export default Extraction;