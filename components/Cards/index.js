// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

// articles.forEach(data => {
axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(response => {
    const articleData = response.data.articles;
    Object.keys(articleData).forEach(element => {
      articleData[element].forEach(Card);
    });
  })
  .catch(error => {
    console.log('articles error', error);
  });


function Card(data) {
  console.log('function data', data);
  const 
    card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgContainer = document.createElement('div'),
    authorImg = document.createElement('img'),
    authorName = document.createElement('span')

    // set classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // attributes - Hard Coded - Data works
    // headline.textContent = data.javascript[0].headline;
    // authorImg.src = data.javascript[0].authorPhoto;
    // authorsName.textContent = data.javascript[0].authorName;
    headline.textContent = data.headline;
    authorImg.src = data.authorPhoto;
    authorName.textContent = data.authorName;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    author.appendChild(authorName);

    // return card;
    document.querySelector('.cards-container').appendChild(card);
}

// Why this doesnt work?
// cardsContainer.appendChild(Card());