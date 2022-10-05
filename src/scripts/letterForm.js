import { Authors } from "./authors.js"
import { Topics } from "./topics.js"
import { sendLetter } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const authorName = document.querySelector("select[id='authors']").value
        const letterBody = document.querySelector("input[name='letterBody']").value
        const topics = document.querySelector("class='topics'").value
        const recipients = document.querySelector("select[id='recipients']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            authorName: authorName,
            letterBody: letterBody,
            topics: topics,
            recipients: recipients
        }

        // Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)
    }
})


export const letterForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="authorName">Author</label>
        <select class="authors" id="authors">
        <option value="0">Choose Author</option>
        ${Authors()}
        </select>
    </div>

    <div class="field">
        <label class="label" for="letterBody">Letter</label>
        <input type="text" name="letterBody" class="input letterBody" />
    </div>

    <div class="field">
        <label class="label topics" for="topics">Topics</label>
        ${Topics()}
    </div>

    <div class="field">
        <label class="label" for="recipient">Recipient</label>
        <select class="recipients" id="recipients">
    <option value="0">Choose Recipient</option>
        ${Authors()}
        </select>
    </div>  

    <button class="button" id="sendLetter">Send Letter</button>
    `
    return html
}