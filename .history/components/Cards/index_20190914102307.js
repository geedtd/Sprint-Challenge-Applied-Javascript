// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: 
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

const cards = document.querySelector('.cards-container');
const articleData = fetchData('https://lambda-times-backend.herokuapp.com/articles');
console.log('articleData:');
consolge.log(articleData);

appendArticles(cards, articleData);

async function fetchData(remoteDataSourceUri) {
    return await axios.get(remoteDataSourceUri);
}
function appendArticles(target, data) {
    
    console.log(`appendArticles Data:`);
    console.log(data);

    
}