let givenProfile = ""
let profileName = ""
let profileId = ""
let profileLink = ""
let profileRepos = ""

let fetchProfile = async () => {
    try {
        let fetchedData
        if (profileName != "") {
            await fetch(`https://api.github.com/users/${profileName}`)
                .then((response)=>response.json())
                .then((data) => (fetchedData = data))
            profileName = fetchedData.login
            profileId = fetchedData.id
            profileLink = fetchedData.html_url
            profileRepos = fetchedData.public_repos
            renderPage()
        }
    } catch (error) {
        console.error
    }
}

function renderPage() {
    document.getElementById("gitdata").innerHTML = `
    <div>
        <h1>Githubi profiilinuhkija</h1>
        <p>Kelle järel nuhid? (kasutajanimi):</p>
        <input />
        <div class="content">
            <h1 id="name">Nimi: ${profileName}</h1>
            <p id="id">ID: ${profileId}</p>
            <p id="repos">Avalikke reposid: ${profileRepos}</p>
            <p id="profileurl">Link: 
                <a href="${profileName}" target="_blank">${profileLink}</a>
            </p>
        </div>
    </div>    
    `
}

fetchProfile();
renderPage();

function updateValue(e) {
    profileName = e.target.value
    fetchProfile();
}
const input = document.querySelector("input")
input.addEventListener("change", updateValue)