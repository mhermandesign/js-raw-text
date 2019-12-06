function sanitize(rawData) {
    // Split the raw data into "lines"
    const splitByLine = rawData.split("\n");

    // Split each line into an array by "tabs"
    const splitByTab = splitByLine.map(line => {
        return line.split("\t");
    });

    // Trim each array cell and remove any empty cells
    const cleaned = splitByTab.map(function(item) {
        const scrubbed = item.map(chunk => {
            return chunk.trim();
        });

        const trimmed = scrubbed.filter(chunk => {
            return chunk !== "";
        });

        return trimmed;
    });

    // Remove any empty arrays
    const droppedEmpties = cleaned.filter(arrayItem => {
        return arrayItem.length > 0;
    });

    mergeSort(droppedEmpties);
}
  
// Sort cities lived in for each person
function mergeSort(a) {
    function Person(firstName, lastName, gender, city, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.city = [city];
        this.birthday = birthday;
    }

    const people = [];

    a.forEach(person => {
        // If the entry is likely to be a person...
        if (person.length > 1) {
            
            let newPerson = new Person(
                person[0], // firstName
                person[1], // lastName
                person[2], // gender
                person[3], // city
                person[4]  // birthday
            );
            people.push(newPerson);
        } else { // ...Else assume it's a city and push to the previous person.
            people[people.length-1].city.push(person[0]);
        }
    });

    render(people);
}

function createBlock(person) {
    const newBlock = document.createElement('div');
    newBlock.classList.add('block');
    const firstName = person.firstName;
    const lastName = person.lastName;
    const gender = person.gender;
    const cities = person.city;
    const birthday = person.birthday;
    const fullName = `<h2>${firstName} ${lastName}</h2>`;
    const personalInfo = `<p>Gender: ${gender} | Birthday: ${birthday}</p>`;
    const citiesLived = `<p>${firstName} has lived in ${cities.map((city) => city = ` ${city}`).toString()}</p>`
    newBlock.innerHTML += fullName + personalInfo + citiesLived;
    document.getElementById('output').appendChild(newBlock);
}

function render(people) {
    people.forEach((person) => {
        createBlock(person);
    })
}

// Get form submission
document.getElementById("my-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const textarea = document.getElementById("my-textarea");
    const rawData = textarea.value;
    sanitize(rawData);
});
