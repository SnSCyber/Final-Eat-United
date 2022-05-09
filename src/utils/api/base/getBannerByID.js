import axios from 'axios';
import { useParams } from 'react-router-dom';

export default (async function GetBanner() {
    const { id } = useParams(); 
  try {
    const resp = await axios.get('https://eatatunited.com.na/api-calls/getBanner.php?id='+id);
    console.log({ id });
    console.log(resp.data);
    alert(JSON.stringify(resp.data));
} catch (err) {
    // Handle Error Here
    console.error(err);
}
});
