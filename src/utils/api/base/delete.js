import axios from 'axios';

export default (async function deleteResults(id) {
  try {
    const resp = await axios.delete('https://eatatunited.com.na/api-calls/deleteProduct.php', id);
    console.log(resp.data);
    alert(JSON.stringify(resp.data));
} catch (err) {
    // Handle Error Here
    console.error(err);
}
});
