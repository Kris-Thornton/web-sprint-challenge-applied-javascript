import axios from 'axios'


const Card = (article) => {
  const { headline, authorPhoto, authorName } = article
  // article = {
  //   headline: "something",
  //   authorPhoto: "somethings",
  //   authorName: "something",
  // }

  const cardDiv = document.createElement('div');
  const headDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const cardImg = document.createElement('img');
  const authorNameSpan = document.createElement('span');

  cardDiv.classList.add('card')
  headDiv.classList.add('headline')
  authorDiv.classList.add('author')
  imgDiv.classList.add('img-container')

  cardDiv.appendChild(headDiv)
  cardDiv.appendChild(authorDiv)
  authorDiv.appendChild(imgDiv)
  imgDiv.appendChild(cardImg)
  authorDiv.appendChild(authorNameSpan)

  headDiv.textContent = headline;
  cardImg.src = authorPhoto;
  authorNameSpan.textContent = `By ${authorName}`

  cardDiv.addEventListener('click', (evt) => {
    console.log(headline)
  })

  return cardDiv
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {

  const cssSelector = document.querySelector(selector);

  axios.get('http://localhost:5001/api/articles')
    .then((res) => {
      console.log(res.data)
      const articleData = Object.values(res.data.articles)

      console.log(articleData)
      articleData.forEach((topicsArr) => {
        topicsArr.forEach((topicObj) => {
          const newCard = Card(topicObj)
          cssSelector.appendChild(newCard)
        })
      })

    })
    .catch((err) => {
      console.log("err", err)
    })

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }