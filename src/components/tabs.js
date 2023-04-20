import axios from 'axios'

const Tabs = (topics) => {


  const topicsDiv = document.createElement('div')
  topicsDiv.classList.add('topics');

  // making the first Div under the tabs container Div
  // Adding the class 'topics to the first Div called topicsDiv under the tabs container Div.


  topics.forEach((topicString) => {
    // create a new var with a iteration through the topics param each time making a sub Div, adding a class of 'tab' and text info that is passed using the item param.
    const liDiv = document.createElement('div');
    liDiv.classList.add('tab');
    liDiv.textContent = topicString;
    topicsDiv.appendChild(liDiv)
    console.log(topicsDiv)
   


  })


  // itterating through the above items and appending them to main orignial Div made under the tabs container Div.


  return topicsDiv
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //




}

const tabsAppender = (selector) => {

  const cssSelector = document.querySelector(selector)

  // create a var to take control of param being passed through the function.

  axios.get(`http://localhost:5001/api/topics`)

    // Ask for a axios api request with get and create the promise with response and catch.
    .then((response) => {

      // find the data using console.log and assign said data to a varible
      // assign said data with above function to a varible
      // append said information to the varible being passed in this function.

      const topics = response.data.topics;
      const tabs = Tabs(topics);

      cssSelector.appendChild(tabs);

      
    })
    .catch((error) => {
      console.log('This is not working')
      console.log(error)
    })





  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
