const baseURL = "https://brrennnnt.github.io/wdd230/chamber/";
const membersURL = "https://brrennnnt.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data.members);
}
getMembers()
const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('h3');
        let phone = document.createElement('h3');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let membership = document.createElement('h3');

        name.textContent = `${member.name}`;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone Number: ${member.phone}`;
        website.setAttribute('href', member.website);
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `website logo for ${name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200');
        image.setAttribute('height', '100');
        membership.textContent = `Membership: ${member.membership}`;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(image);
        card.appendChild(membership);

        cards.appendChild(card);
    });
}

// grid and list display
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}