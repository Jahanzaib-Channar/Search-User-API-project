console.log("working")


let ul = document.querySelectorAll("ul")
let firstli = document.querySelector(".firstName")
let lastli = document.querySelector(".lastName")
let Loaduser = document.querySelector(".load")
let search = document.querySelector(".search")
let firstInp = document.querySelector(".firstName")
let lastInp = document.querySelector(".last")
let loading = document.querySelector(".loading")
let copybtn = document.querySelector(".copybtn")




// Search users 

search.addEventListener("click", async () => {
    console.log("working")

})


// Api Testing & using 

let url = "https://dummyjson.com/users";

async function Checkapi() {
    try {
        const res = await fetch(url);
        const data = await res.json();

        let test = data.users

        check(test);


    } catch (error) {
        console.log(error)
    }
}


// Making List of user Names 


Loaduser.addEventListener("click", async () => {
    let apiData = await Checkapi()
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

        console.log("Copied:", text);
    }

})
    
}



