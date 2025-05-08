const quotesData = {
    inspire: [
      { quote: "Believe in yourself.", author: "Unknown" },
      { quote: "Dream big and dare to fail.", author: "Norman Vaughan" }
    ],
    success: [
      { quote: "Success is no accident.", author: "Pele" },
      { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" }
    ],
    science: [
      { quote: "The important thing is to never stop questioning.", author: "Albert Einstein" },
      { quote: "Science is a way of thinking much more than it is a body of knowledge.", author: "Carl Sagan" }
    ],
}
  
  let currentSelectedcat = "success";
  let currentSelectedindx = 0;
  
  const quotetxt = document.getElementById("quote-txt");
  const quoteauth = document.getElementById("quote-auth");
  
  function DisplayQuote(category) {
    const currentquote = quotesData[category][currentSelectedindx];
    quotetxt.textContent = `"${currentquote.quote}"`;
    quoteauth.textContent = `— ${currentquote.author}`;
  }

  document.getElementById("category-select").addEventListener("change",function(e){
    categoryselected=e.target.value;
    currentSelectedindx=0
    DisplayQuote(categoryselected)
  })
  DisplayQuote(currentSelectedcat);
  