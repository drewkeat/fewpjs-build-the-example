// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const likeHearts = document.querySelectorAll(".like-glyph");
likeHearts.forEach((heart) =>
  heart.addEventListener("click", (e) => updateLikeGlyph(e))
);

function updateLikeGlyph(event) {
  const modal = document.getElementById("modal");
  mimicServerCall("url")
    .then((response) => {
      modal.innerText = response
      modal.classList.remove('hidden')
      setTimeout(() => {modal.classList.add("hidden")}, 3000)
      if (event.target.innerText == EMPTY_HEART) {
        event.target.innerText = FULL_HEART;
        event.target.classList.add("activated-heart");
      } else {
        event.target.innerText = EMPTY_HEART;
        event.target.classList.remove("activated-heart");
      }
    })
    .catch((error) => {
      modal.innerText = error;
      modal.classList.remove("hidden");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 3000);
    });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
