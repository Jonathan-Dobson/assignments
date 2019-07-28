const {log} = console

const data = [{
    cardTitle: "Mario Pest Control",
    cardDescription: `Build Mario a website that keeps track of how many baddies he caught for Princess Peach so he can send her a bill.`,
    cardCourseLink: `https://coursework.vschool.io/mario-pest-control/`,
    cardLiveDemo: `./projects/marioPestControl/index.html`,
    keyPoints: ['HTML', 'DOM', 'JavaScript', 'Event Listeners']
}, {
    cardTitle: "Mario Pest Control",
    cardDescription: `Build Mario a website that keeps track of how many baddies he caught for Princess Peach so he can send her a bill.`,
    cardCourseLink: `https://coursework.vschool.io/mario-pest-control/`,
    cardLiveDemo: `./projects/marioPestControl/index.html`,
    keyPoints: ['HTML', 'DOM', 'JavaScript', 'Event Listeners']
} ]






deck = data.map(d=>`
<div class="demo-card-square mdl-card mdl-shadow--2dp">
<div class="mdl-card__title mdl-card--expand">
<h2 class="mdl-card__title-text">${d.cardTitle}</h2>
</div>
<div class="mdl-card__supporting-text">
${d.cardDescription}
<hr>
${d.keyPoints.map(e => `<button type="button" class="mdl-chip"><span class="mdl-chip__text">${e}</span></button>`).join("\n")}
</div>
<div class="mdl-card__actions mdl-card--border">
<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
href="${d.cardCourseLink}" target="_blank">Details</a>
<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
href="${d.cardLiveDemo}" target="_blank">
View Live Demo
</a>
</div>
</div>`)

const card = document.createElement('div')
card.className = "card-container"
card.innerHTML = deck
const cardDeck = document.getElementById("card-deck")
cardDeck.appendChild(card)