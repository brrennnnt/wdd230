const baseURL = "https://brrennnnt.github.io/wdd230/"; // Your base URL
const linksURL = "https://brrennnnt.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

getLinks();

const displayLinks = (weeks) => {
    const cardsElement = document.querySelector('.cards');

    weeks.forEach((weekItem) => {
        const weekDiv = document.createElement('div');
        weekDiv.classList.add('week'); // You can add a CSS class to style this div if needed.

        const weekHeading = document.createElement('h4');
        weekHeading.textContent = weekItem.week;
        weekDiv.appendChild(weekHeading);

        const linksList = document.createElement('ul');

        weekItem.links.forEach((link) => {
            const listItem = document.createElement('li');
            const linkAnchor = document.createElement('a');
            linkAnchor.textContent = link.title;
            linkAnchor.href = baseURL + link.url; // Create the full URL.
            linkAnchor.target = "_blank"; // Opens links in a new tab.
            listItem.appendChild(linkAnchor);
            linksList.appendChild(listItem);
        });

        weekDiv.appendChild(linksList);
        cardsElement.appendChild(weekDiv);
    });
}