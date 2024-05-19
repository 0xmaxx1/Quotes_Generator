var containerQuotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me",
  },
  {
    author: "Frank Zappa",
    quote: "So many books, so little time.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    author: "Bernard M. Baruch",
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
  {
    author: "William W. Purkey",
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
  },
  {
    author: "Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: " Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
];
var preNumber = null;
function generateRandomNumber() {
  var newNumber = Math.floor(Math.random() * 4) + 1;
  while (newNumber === preNumber) {
    newNumber = Math.floor(Math.random() * 4) + 1;
  }
  preNumber = newNumber;
  generateQuote(newNumber);
}
function generateQuote(number) {
  var cartona = `<q>${containerQuotes[number].quote}</q>
  <h6>${containerQuotes[number].author}</h6>`;
  document.getElementById("contentContainer").innerHTML = cartona;
}
