/* eslint-disable no-alert */
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  JSON.stringify(values, null, 2);
  console.log(showResults);
});
