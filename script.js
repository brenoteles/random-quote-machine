let quotes = [
  ['Happiness depends upon ourselves.','Aristotle'],
  ['Turn your wounds into wisdom.','Oprah Winfrey'],
  ['Change the game, don’t let the game change you.','Macklemore'],
  ['It hurt because it mattered.','John Green'],
  ['If the world was blind how many people would you impress?','Boonaa Mohammed'],
  ['The meaning of life is to give life meaning.','Ken Hudgins'],
  ['The true meaning of life is to plant trees, under whose shade you do not expect to sit','Nelson Henderson'],
  ['When words fail, music speaks.','Shakespeare '],
  ['Embrace the glorious mess that you are',' Elizabeth Gilbert'],
];

let quotesLenght = quotes.length;
let randomQuote = Math.floor((Math.random() * quotesLenght));

$("#author").html(quotes[randomQuote][1]);
$("#text").html(quotes[randomQuote][0]);
$("#tweet-quote").attr('href','https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quotes[randomQuote][0] );

function changeQuote(){
  randomQuote = Math.floor((Math.random() * quotesLenght));
  $("#author").html(quotes[randomQuote][1]);
  $("#text").html(quotes[randomQuote][0]);
}
