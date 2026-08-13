console.log("working")

let url = "https://dummyjson.com/users";

async function Checkapi() {
    try {
        const res = await fetch(url);

        const text = await res.json();

        console.log(text)

    } catch (error) {
        console.log(error)

    }


}

Checkapi()