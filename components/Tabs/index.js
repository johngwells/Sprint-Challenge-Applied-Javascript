// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// need to attach this to the topics element?
const topics = document.querySelector('.topics');
const tabs = document.querySelector('.tabs');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
      // console.log(response)
      topicsArray = response.data.topics;
      topicsArray.forEach(item => {
        // console.log(item);
        topics.appendChild(Topics(item))
      })
  })

  .catch(error => {
    console.log("No Data from server", error);
  })

function Topics(data) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = data;

  return tab;
}

topics.appendChild(Topics());
