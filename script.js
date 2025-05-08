const quotesData = {
    inspire: [
      { quote: "Believe in yourself.", author: "Confucius" },
      { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
      { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" }
    ],
    success: [
      { quote: "Success is no accident.", author: "Pele" },
      { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
      { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
    ],
    science: [
      { quote: "The important thing is to never stop questioning.", author: "Albert Einstein" },
      { quote: "Science is a way of thinking much more than it is a body of knowledge.", author: "Carl Sagan" },
      { quote: "The science of today is the technology of tomorrow.", author: "Edward Teller" },
      { quote: "In science, there are no shortcuts to truth.", author: "Karl Popper" }
    ],
    math: [
      { quote: "Pure mathematics is, in its way, the poetry of logical ideas.", author: "Albert Einstein" },
      { quote: "Mathematics is the most beautiful and most powerful creation of the human spirit.", author: "Stefan Banach" },
      { quote: "Without mathematics, there’s nothing you can do. Everything around you is mathematics.", author: "Shakuntala Devi" },
      { quote: "Go down deep enough into anything and you will find mathematics.", author: "Dean Schlicter" }
    ]
  };

let currentCategory = "inspire";  // Initial load inspire will be selected
let currentIndex = 0;  //Initial load index=0 

const quotetxt = document.getElementById("quote-txt");
const quoteauth = document.getElementById("quote-auth");
const categorySelect = document.getElementById("category-select");

function DisplayQuote(category, index) {
    const currentquote = quotesData[category][index];
    quotetxt.textContent = `" ${currentquote.quote} "`;
    quoteauth.textContent = `— ${currentquote.author}`;
}

// First load or refresh inspire category will be selected with index 0 so 1st quote
categorySelect.value = currentCategory;
DisplayQuote(currentCategory, currentIndex);

// Category change listener
categorySelect.addEventListener("change", function(e) {
    currentCategory = e.target.value;
    currentIndex = 0;  
    DisplayQuote(currentCategory, currentIndex);
});

// Increment quote
document.getElementById("increment-btn").addEventListener("click", function() {
    const quotes = quotesData[currentCategory];
    currentIndex = (currentIndex + 1) % quotes.length;  // Move to the next quote  // % is used such that when ( when currentindex=4  (4 % 4 = 0) so 1st quote is rendered)
    DisplayQuote(currentCategory, currentIndex);
    console.log(currentIndex) 
});

// Decrement quote
document.getElementById("decrement-btn").addEventListener("click", function() {
    const quotes = quotesData[currentCategory];
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;// Move to the previous quote // (when currenindex=0 (0-1+4) % 4 becomes 3..so last quote is rendered)
    DisplayQuote(currentCategory, currentIndex);
});

//Random quote
document.getElementById("random-btn").addEventListener("click",function(){
    const quotes=quotesData[currentCategory]
    let randomindex
    do{
        randomindex=Math.floor(Math.random()*quotes.length)
    }while(randomindex === currentIndex && quotes.length >1)
   currentIndex=randomindex
    console.log(randomindex)
    DisplayQuote(currentCategory,randomindex)
})

//change font size
const txt = document.getElementById("quote-txt");
const authortxt=document.getElementById("quoteauth")
const range=document.getElementById("font-changer")
range.addEventListener('input',function(){
    const rangevalue=range.value
    txt.style.fontSize=rangevalue + "px"
    
})

