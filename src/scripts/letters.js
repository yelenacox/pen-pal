import { getAuthors, getLetters, getTopics } from "./dataAccess.js";

export const Letters = () => {
    const letters = getLetters()
    
    let html = `
    <ul>
    ${letters.map(letter => {
        return `<li class="letter">
        <div class="child">Dear ${foundRecipient(letter).name} (${foundRecipient(letter).email}),</div>
        <div class="child">${letter.letterBody} </div>
       <div class="child">Sincerely, ${foundAuthor(letter).name} (${foundAuthor(letter).email})</div>
       <div class="sentDate child">Sent on ${letter.dateSent}</div>
      <div class="child topic">${foundTopic(letter).topic}</div>
       </li>     
        `
    }).join("")
}
    `
    return html
}


const foundTopic = (letter) => {
    const topics = getTopics()
    let selectedTopic = ""
    for (const topic of topics) {
        if (letter.topicId === topic.id) {
            selectedTopic = topic

        }
    }
    return selectedTopic
}

const foundAuthor = (letter) => {
    const authors = getAuthors()
    let selectedAuthor = ""
    for (const author of authors) {
       (letter.authorId === author.id) ?
            (selectedAuthor = author) : ""
        }
    return selectedAuthor
}

const foundRecipient = (letter) => {
    const recipients = getAuthors()
    let selectedRecipient = ""
    for (const recipient of recipients){
        if (letter.recipientId === recipient.id) {
            selectedRecipient = recipient
        }
    }
    return selectedRecipient
}