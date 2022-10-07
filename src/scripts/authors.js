import { getAuthors } from "./dataAccess.js"

export const Authors = () => {
    const authors = getAuthors()

    let html = `
    
    ${authors.map(
        author => {
            return `<option value="author--${author.id}">${author.name}</option>`
        }
    ).join("")}
    `
    return html
}

export const Recipients = () => {
    const recipients = getAuthors()

    let html = `
    ${recipients.map(
        recipient => {
            return `<option value="recipient--${recipient.id}">${recipient.name}</option>`
        }
    ).join("")}
    `
    return html
}
