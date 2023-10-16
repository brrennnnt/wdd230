const baseURL = "https://brrennnnt.github.io/wdd230/chamber/";
const linksURL = "https://brrennnnt.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');
async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}
getMemberData()
const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('h3');
        let phone = document.createElement('h3');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let membership = document.createElement('h3');

        name.textContent = `Company Name: ${member.name}`;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone Number: ${member.phone}`;
        website.setAttribute('href', member.website);
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `website logo for ${name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');
        membership.textContent = document.createElement('h3');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(image);
        card.appendChild(membership);

        cards.appendChild(card);
    });
}