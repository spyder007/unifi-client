import axios from 'axios'

export function setAuthHeader(token: string | undefined) {
  if (axios && axios.defaults && axios.defaults.headers) {
    var index: string = "Authorization";
    axios.defaults.headers[index] = token ? 'Bearer ' + token : '';
  }
}