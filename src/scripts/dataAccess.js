const applicationState = {
    letters: []
}

const API = "http://localhost:8088"

export const sendLetter = (typedLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application.json"
        },
        body: JSON.stringify(typedLetter)
    }

    return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
    .then(response => response.json())
    .then(
        (fetchedLetters) => {
            applicationState.letters = fetchedLetters
        }
    )
}

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
    .then(response => response.json())
    .then(
        (fetchedAuthors) => {
            applicationState.authors = fetchedAuthors
        }
    )
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then(response => response.json())
    .then(
        (fetchedTopics) => {
            applicationState.topics = fetchedTopics
        }
    )
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}