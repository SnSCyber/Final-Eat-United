import axios from 'axios';

export default (async function postGallery(values) {
  try {
    const resp = await axios.post('https://eatatunited.com.na/api-calls/gallery.php?', values);
    console.log(resp.data);
    alert(JSON.stringify(resp.data));
} catch (err) {
    // Handle Error Here
    console.error(err);
}
});
