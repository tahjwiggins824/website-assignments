window.addEventListener("load", function () { // upon loading,

    let cookies = document.cookie.split("; "); // recognize that "; " sits between each cookie,
    
    for (let i = 0; i < cookies.length; i++) { // (basically saying keep repeating this loop so long as the number of cookies is greater than the number of times the loop has been repeated but everytime this step is reached must add that to the number of loops performed)
        let parts = cookies[i].split("="); // recognize that "=" sits between each key and value in each cookie,

        if (parts[0] === "name") { // if the key (but as far as the code knows, just the first part) is "name",
            document.querySelector("#formMessage").textContent = "Welcome back, " + parts[1]; // print their name (the 'value' part of the cookie, but as far as the code knows, just the second part) after "Welcome back, " to print a complete welcome message
        }
    }
});

const button = document.querySelector(".display-pics");
const image = document.querySelector(".extra-pics");

if (button && image) { // check that these things exist on the page before applying this javascript to that page!

    image.classList.add("hidden");

    button.addEventListener("click", function () {

        image.classList.remove("hidden");
        button.textContent = "Picture shown";
        button.disabled = true;

    });
}

const submitInfo = document.querySelector("#submitInfo"); // construct this variable and assign it something from the html document id'd as submitInfo
const formMessage = document.querySelector("#formMessage"); // construct this variable and assign it something from the html document id'd as submitInfo

if (submitInfo && formMessage) { // check that these things exist on the page before applying this javascript to that page!

    submitInfo.addEventListener("click", function () { // submitInfois listening out for itself being clicked, and when that happens,

        let name = document.querySelector("#name").value; // record whats given in the name input as name,
        let email = document.querySelector("#email").value; // record whats given in the email input as email,
        let comments = document.querySelector("#comments").value; // record whats given in the comments input as name,

        if (name === "" || email === "" || comments === "") { // if name, or email, or comments, are empty,
            formMessage.style.color = "red"; // make the paragraph red,
            formMessage.textContent = "Incomplete fields"; // and make the formMessage paragraph "Incomplete fields"
        }
        else { // if anything else is the case (i.e., if all fields have anything at all)
            document.cookie = "name=" + name; /// save the name as a cookie
            document.cookie = "email=" + email;
            document.cookie = "comments=" + comments;
            formMessage.style.color = "green"; // make the paragraph green,
            formMessage.textContent = "Thank you for your feedback."; // formMessage paragraph will have the text "thank you for your feedback"
            console.log(document.cookie)
        }
    }); // thats it

}
