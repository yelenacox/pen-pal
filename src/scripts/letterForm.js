import { Authors, Recipients } from "./authors.js"
import { Topics } from "./topics.js"
import { sendLetter } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const idOfAuthor = document.querySelector("select[id='authors']").value
        const letterBody = document.querySelector("textarea[name='letterBody']").value
        const topics = document.querySelectorAll("input[name='topic']")
        const recipients = document.querySelector("select[id='recipients']").value
        const dateSent = new Date()

let selectedTopic
for (const topic of topics){
    if(topic.checked){
        selectedTopic = topic.value
    }
}

const [, authorId] = idOfAuthor.split("--")
const [, topicId] = selectedTopic.split("--")
const [, recipientId] = recipients.split("--")

// Make an object out of the user input
const dataToSendToAPI = {
    authorId: parseInt(authorId),
    letterBody: letterBody,
    topicId: parseInt(topicId),
    recipientId: parseInt(recipientId),
    dateSent: ((dateSent.getMonth() + 1) + "/" + dateSent.getDate() + "/" + dateSent.getFullYear())
}

console.log(dataToSendToAPI)
// Send the data to the API for permanent storage
sendLetter(dataToSendToAPI)
    }
})

export const letterForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="authorName"><h3>Author</h3></label>
        <select class="authors" id="authors">
        <option value="">Choose Author</option>
        ${Authors()}
        </select>
    </div>

    <div class="field">
        <label class="label" for="letterBody"><h3>Letter</h3></label>
        <textarea type="text" name="letterBody" class="input letterBody" /></textarea>
    </div>

    <div class="field">
        <label class="label topics" for="topics"><h3>Topics</h3></label>
        ${Topics()}
    </div>

    <div class="field">
        <label class="label" for="recipient"><h3>Recipient</h4></label>
        <select class="recipients" id="recipients">
    <option value="0">Choose Recipient</option>
        ${Recipients()}
        </select>
    </div>  

    <button class="button" id="sendLetter">Send Letter</button>
    `
    return html
}