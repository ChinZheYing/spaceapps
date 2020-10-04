/**
 * Inserts a cardview into a parent div.
 *
 * @param parent The ID of the parent div
 * @param title The title of the cardview
 * @param description The description of the cardview
 * @param anchor The destination page upon clicking the cardview.
 * @param imageURL The URL of the cardview's image
 */
function populateItems(parent, title, description, anchor, imageURL) {

    git(parent).innerHTML +=
        `<div class="demo-card-wide mdl-card mdl-shadow--2dp child">` +
        `<div class="mdl-card__title" style="background: url('${imageURL}') center / cover;">` +
        `<h2 class="mdl-card__title-text background-overlay">${title}</h2>` +
        `</div>` +
        `<div class="mdl-card__supporting-text">${description}</div>` +
        `<div class="mdl-card__actions mdl-card--border">` +
        `<a class="mdl-button mdl-button--colored` +
        ` mdl-js-button mdl-js-ripple-effect" href="${anchor}">Explore!</a>` +
        `</div>` +
        `</div>`
}

function git(elementID) {
    return document.getElementById(elementID);
}