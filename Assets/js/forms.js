let val = "";

const tagbuilder = () => {

    val = document.getElementById("numberofpeo").value;
    const ele = document.getElementById("peoples");

    ele.innerHTML = " "

    for(let i = 0; i<val; i++)
    {
        let ip = document.createElement("input");
        let lb = document.createElement("label");
        lb.innerText = `Person ${i+1}`;
        ip.name = `people${i}`;
        ip.id = `people`;
        ip.type = "text";
        ele.appendChild(lb);
        ele.appendChild(ip);
    }
}


const FormSubmit = () => {
    let people = ""
    const formval = document.querySelectorAll("#people");
    const firstH2 = document.querySelector('.left h2').innerText;
    let btn = document.getElementById("btnbook");

    btn.innerText = "Booking...";
    btn.disabled = true;
  
    formval.forEach(input => {
        people = people + input.value + ","
        console.log(people)
    });


    let date = document.getElementById("date").value + " -- " + firstH2;
    // let name = document.getElementById("text").value +" -- " + firstH2;
    let email = document.getElementById("email").value;
    let peoples = people;
    let whatsapp = document.getElementById("number").value;
    let pickup = document.getElementById("pickup").value;


    const data = {
        "date": date,
        // "name": name,
        "email": email,
        "peoples": peoples,
        "whats_app_num": whatsapp,
        "pick_up_point": pickup
    };

    let apiUrl = "http://127.0.0.1:8000/userbooking/";

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Specify content type as JSON
            // Add any other headers if required
        },
        body: JSON.stringify(data) // Convert JavaScript object to JSON string
    })
    .then(response => {
        if (!response.ok) {
            btn.disabled = false;
            btn.innerText = "Book Now"
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON data in the response
    })
    .then(data => {
        btn.disabled = true;
        btn.innerText = "Booked.."
        // console.log('Response from the server:', data); // Handle the response data
    })
    .catch(error => {
        console.error('Error:', error); // Handle errors
    });
}


const Feedback = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("mobile").value;
    const message = document.getElementById("message").value;
    const btn = document.getElementById("btnfeed");

    btn.disabled = true;

    btn.value = "Loading...";

    const data = {
        'name':name,
        'phone': email,
        'message':message
    }

    let apiUrl = "http://127.0.0.1:8000/feedback/";

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            btn.disabled = false;
            btn.value = "Submit";
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        btn.disabled = true;
        btn.value = "Thank You"
        console.log('Response from the server:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}