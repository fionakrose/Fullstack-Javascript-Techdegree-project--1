# Techdegree project 1
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Random Quotes</title>
  <link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i" rel="stylesheet">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body id="bgcolor">
  <div class="container">
    <div id="quote-box">
      <p class="quote">You can do anything but not everything</p>
      <p class="source">David Allen<span class="citation">Making It All Work</span><span class="year">2009</span></p>
    </div>
    <div id="button-box">
      <button id="loadQuote">Show another quote</button>
    </div>
  </div>
  <script src="js/script.js"></script>
</body>
</html>
var quotes = [
  {
        quote: "No Grit, No Success.",
    source: "Anonymous",
    tags: ["Grit", "Determination", "Success"]
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky",
    tags: ["Just Do It", "Sport motivation"]
  },
  {
    quote: "Fall down, get back up.",
    source: "Japanese Proverb",
    tags: ["Determination", "Grit"]
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that do not work.",
    source: "Thomas A. Edison",
    tags: ["Perserverance", "Innovation"]
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt",
    tags: ["Hope", "Politics"]
  }
];
console.log (quotes)
