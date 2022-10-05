import { fetchLetters, fetchAuthors, fetchTopics } from "./dataAccess.js"
import { penPal } from "./penPal.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchLetters()
    .then(() => fetchAuthors())
    .then(() => fetchTopics())
    .then(
        () => {
            mainContainer.innerHTML = penPal()
        }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)