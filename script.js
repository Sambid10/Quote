const api_url = "https://api.api-ninjas.com/v1/quotes";
const api_key="GJwouyHqjvXffxjfolKCuw==IQrA9roqvqBSBkDu" //should be in .env btw


async function getQuotes(url) {
  try {
    const res = await fetch(url,{
        method:"GET",
        headers:{
            "X-Api-Key": api_key,
            "Content-Type": "application/json",
        }
    });
    if(!res.ok){
        throw new Error(`${res.status}`)
    }
    const data = await res.json();
    console.log(data)
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}

getQuotes(api_url);
