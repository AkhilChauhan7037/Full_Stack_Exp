
let form = document.querySelector("#jobForm");
let jobContainer = document.querySelector("#jobCardsContainer");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let title = document.querySelector("#jobTitle").value;
    let company = document.querySelector("#companyName").value;
    let location = document.querySelector("#jobLocation").value;
    let description = document.querySelector("#jobDescription").value;

    if(title === "" || company === "" || location === "" || description === "") {
        alert("Please fill all fields before submitting");
        return;
    }

    let card = document.createElement("article");

    card.innerHTML = `
        <h3>${title}</h3>
        <p>Company: ${company}</p>
        <p>Location: ${location}</p>
        <p>${description}</p>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    `;

    jobContainer.appendChild(card);
    card.querySelector(".deleteBtn").addEventListener("click", function() {
        card.remove();
    });

    card.querySelector(".editBtn").addEventListener("click", function() {
        document.querySelector("#jobTitle").value = title;
        document.querySelector("#companyName").value = company;
        document.querySelector("#jobLocation").value = location;
        document.querySelector("#jobDescription").value = description;

        card.remove();
    });

    form.reset();
});


let searchForm = document.querySelector("#searchForm");
let searchResults = document.querySelector("#searchResults");

searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let keyword = searchForm.querySelectorAll("input")[0].value.toLowerCase();
    let locationInput = searchForm.querySelectorAll("input")[1].value.toLowerCase();

    searchResults.innerHTML = "";

    let allJobs = document.querySelectorAll("article");

    let found = false;

    allJobs.forEach(function (job) {

        let jobText = job.innerText.toLowerCase();

        if (jobText.includes(keyword) && jobText.includes(locationInput)) {

            let clone = job.cloneNode(true);
            searchResults.appendChild(clone);
            found = true;
        }
    });

    if (!found) {
        searchResults.innerHTML = "<p>No jobs found.</p>";
    }
});