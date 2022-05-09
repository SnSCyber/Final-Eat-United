import axios from 'axios';

export default (async function postResults(values) {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");

    if(id){
      const resp = await axios.post('https://eatatunited.com.na/api-calls/products?id='+id, values);
      console.log(resp.data);
      alert(JSON.stringify(resp.data));
    }
    else{
      const resp = await axios.post('https://eatatunited.com.na/api-calls/products?', values);
      console.log(resp.data);
      alert(JSON.stringify(resp.data));
    }
} catch (err) {
    // Handle Error Here
    console.error(err);
}
});
