import { getTopics } from "./dataAccess.js";

export const Topics = () => {

    const topics = getTopics()

    let html = 
    topics.map(topic => {
        return `
        <input type="radio" name="topic" value="topic--${topic.id}" /> ${topic.topic}
        `
    }).join("")

    return html
}