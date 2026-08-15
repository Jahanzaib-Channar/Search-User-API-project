
let ul = document.querySelectorAll("ul")
let firstli = document.querySelector(".firstName")
let lastli = document.querySelector(".lastName")
let Loaduser = document.querySelector(".load")
let searchbtn = document.querySelector(".search")
let loading = document.querySelector(".loading")
let copybtn = document.querySelector(".copybtn")
let card = document.querySelector(".card")
let Inputs = document.querySelector(".input-group")

// Search users 

searchbtn.addEventListener("click", async () => {
    let data = await FirstName()

    if (data) {
        createCard(data);
    } else {
        Nouser()
    }

})


// Find user

async function FirstName() {
    let firstValue = Inputs.querySelector(".first").value
    let lastValue = Inputs.querySelector(".last").value

    let data = await Checkapi()

    let user = data.find((element) => {
        return (

            element.firstName.toLowerCase() === firstValue.toLowerCase() ||
            element.lastName.toLowerCase() === lastValue.toLowerCase()
        );

    })
    return user

}


function createCard(data) {
    let userName = card.querySelector(".card-title");
    let userJob = card.querySelector(".job");
    let userAddress = card.querySelector(".addre");
    let userimg = card.querySelector(".pic");
    let cards = card.querySelector(".row")
    cards.classList.remove("visible")

    userName.innerHTML = `${data.firstName} ${data.lastName}`;
    userJob.innerHTML = data.company.title;
    userAddress.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.address.country} , ${data.address.city}`;
    userimg.src = data.image;

}

function Nouser() {
    let cards = card.querySelector(".row")
    cards.classList.add("visible")

}


// Api Testing & using 

let url = "https://dummyjson.com/users";

async function Checkapi() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        let test = data.users
        return test;

    } catch (error) {
        console.log(error)
    }
}


// Making List of user Names 

let data = async () => {

    let data = await Checkapi();

    check(data)
}


// check(data)

Loaduser.addEventListener("click", async () => {

    data()
    // console.log(apiData)
})


function check(data) {
    console.log("loading data")

    loading.innerHTML = "Loading User ..."

    for (const element of data) {

        setTimeout(() => {


            let newli = document.createElement("li")
            let newli2 = document.createElement("li")

            let copybtn = document.createElement("button")
            let copybtn2 = document.createElement("button")
            copybtn.innerHTML = `<i class="fa-regular fa-clipboard"></i>`
            copybtn2.innerHTML = `<i class="fa-regular fa-clipboard"></i>`
            copybtn.classList.add("copybtn")
            copybtn2.classList.add("copybtn")

            newli.classList.add("list-group-item")
            newli2.classList.add("list-group-item")

            newli.innerHTML = ` ${element.firstName}`
            newli2.innerHTML = ` ${element.lastName} `

            firstli.append(newli);
            lastli.append(newli2);
            newli.appendChild(copybtn)
            newli2.appendChild(copybtn2)

            loading.innerHTML = "Users Loaded"

            copybtn.dataset.text = element.firstName;
            copybtn2.dataset.text = element.lastName;

            console.log(copybtn.dataset.text)
        }, 3000);
    }
}


for (const element of ul) {

    element.addEventListener("click", function (event) {

        if (event.target.classList.contains("fa-clipboard")) {

            const button = event.target.parentElement;
            const text = button.dataset.text;

            navigator.clipboard.writeText(text);
            alert("text Copied")
            console.log("Copied:", text);
        }

    })

}