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
    const quote=data[0] //getting the quote only & not author
    console.log(quote)
    const quote_container=document.getElementById("quote_contain")
    quote_container.innerHTML=`${quote.quote}`
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}
document.getElementById("fetchbtn").addEventListener("click",function(){
    getQuotes(api_url)
})
