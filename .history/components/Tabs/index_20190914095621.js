// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: 
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topics = document.querySelector('.topics');
topics.appendChild(Tab('All'));

const topicData = fetchData('https://lambda-times-backend.herokuapp.com/topics');
console.log("topicData");
console.log(topicData);