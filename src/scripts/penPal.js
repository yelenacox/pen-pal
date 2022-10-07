import { letterForm } from "./letterForm.js"
import { Letters } from "./letters.js"

export const penPal = () => {
    return ` 
    <h1>Pen Pal Society</h1>
    <section class="letterForm">
    ${letterForm()}
    </section>

    <h1>Letters</h1>
    <section class="sentLetters">
    ${Letters()}
    </section>
    `
}