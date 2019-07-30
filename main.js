const {log} = console

const data = [
{
    Title: `Axios Todo Project`,
    Description: `Build a frontend site that pulls a list of todos down from the API to display them, and allows the user to perform other CRUD methods on them as well.`,
    CourseLink: `https://coursework.vschool.io/axios-todo-practice/`,
    LiveDemo: `./projects/axios/index.html`,
    keyPoints: ['HTML', 'CSS', 'DOM', "Event Listeners", "Forms", "API", "Axios", "XHR", "Async"],
    bgColorTop: `rgba(255, 205, 64, 0.3)`,
    bgColorBottom: `rgba(73, 144, 153, 0.8)`,
    image: `https://coursework.vschool.io/content/images/2017/08/advisor-to-do-list.jpg`
}, {
    Title: `"Business Time" Project`,
    Description: `Create a website for your new business that is well-styled and responsive`,
    CourseLink: `https://coursework.vschool.io/business-time/`,
    LiveDemo: `./projects/businessTime3/index.html`,
    keyPoints: ['HTML', 'CSS', 'Layout', "Media Queries"],
    bgColorTop: `rgba(73, 144, 153, 0.3)`,
    bgColorBottom: `rgba(73, 144, 153, 0.8)`,
    image: `./images/business-time.png`
}, {
    Title: `Newsies`,
    Description: `Re-create the front page of a newspaper using block, inline and inline-block elements.`,
    CourseLink: `http://coursework.vschool.io/block-vs-inline-newsies/`,
    LiveDemo: `./projects/newsies/third/index.html`,
    keyPoints: ['HTML', 'CSS', 'Layout', "Box Model"],
    bgColorTop: `rgba(119, 153, 134, 0.3)`,
    bgColorBottom: `rgba(119, 153, 134, 1)`,
    image: `./images/newsies.png`
}, {
    Title: "Mario Pest Control",
    Description: `Build Mario a website that keeps track of how many baddies he caught for Princess Peach so he can send her a bill.`,
    CourseLink: `https://coursework.vschool.io/mario-pest-control/`,
    LiveDemo: `./projects/marioPestControl/index.html`,
    keyPoints: ['HTML', 'DOM', 'JavaScript', 'Event Listeners'],
    bgColorTop: `rgba(255, 251, 0, 0.4)`,
    bgColorBottom: `rgba(255, 123, 0, 1)`,
    image: `./images/mario.png`
}, {
    Title: `Design a Blog`,
    Description: `Design a responsive Blog page with a content feed`,
    CourseLink: `http://coursework.vschool.io/design-a-blog/`,
    LiveDemo: `./exercises/fromjon/blog/index.html`,
    keyPoints: ['HTML', 'CSS', 'Layout', "Box Model", "Media Queries"],
    bgColorTop: `rgba(119, 153, 134, 0.3)`,
    bgColorBottom: `rgba(135, 71, 51, 1)`,
    image: `./images/blog.png`
}, {
    Title: `CSS Flags`,
    Description: `Build the following flags in pure HTML and CSS, no images allowed.`,
    CourseLink: `https://coursework.vschool.io/css-flags/`,
    LiveDemo: `./exercises/flags/index.html`,
    keyPoints: ['HTML', 'CSS', 'Layout', "Box Model"],
    bgColorTop: `rgba(119, 153, 134, 0.3)`,
    bgColorBottom: `rgba(135, 71, 51, 1)`,
    image: `./images/flags2.png`
}, {
    Title: `Simple Calculator`,
    Description: `create a simple calculator that can Add, Subtract, and Multiply`,
    CourseLink: `https://coursework.vschool.io/simple-calculator/`,
    LiveDemo: `./exercises/simpleCalc/index.html`,
    keyPoints: ['HTML', 'CSS', "DOM", "Event Listeners", "Forms"],
    bgColorTop: `rgba(119, 153, 134, 0.3)`,
    bgColorBottom: `rgba(135, 71, 51, 1)`,
    image: `./images/simpleCalc.png`
} 
]



deck = data.map(d=>`
<div class="demo-card-square mdl-card mdl-shadow--2dp">
<div class="mdl-card__title mdl-card--expand" style="background: linear-gradient(${d.bgColorTop}, ${d.bgColorBottom}),top left / cover no-repeat url(${d.image})">
<h2 class="mdl-card__title-text">${d.Title}</h2></div>
<div class="mdl-card__supporting-text">
    <p>${d.Description}</p>
    <p>${d.keyPoints.map(e =>`<button type="button" class="mdl-chip"><span class="mdl-chip__text">${e}</span></button>`).join("\n")}</p>
</div>
<div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
        href="${d.CourseLink}" target="_blank">Assignment detail</a>
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
        href="${d.LiveDemo}" target="_blank">View Live Demo
    </a>
</div>
</div>`).join('\n')

const card = document.createElement('div')
card.className = "card-container"
card.innerHTML = deck
const cardDeck = document.getElementById("card-deck")
cardDeck.appendChild(card)