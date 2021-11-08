const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");



let xhr = new XMLHttpRequest();
xhr.open("POST", "https://formspree.io/f/mayagkkz", true);
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let response = xhr.response;
    if (response.indexOf("Email and message field is required!") != -1 || response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry, failed to send your message!") != -1) {
      statusTxt.style.color = "red";
    } else {
      form.reset();
      setTimeout(() => {
        statusTxt.style.display = "none";
      }, 3000);
    }
    statusTxt.innerText = response;
    form.classList.remove("disabled");
  }
}
let formData = new FormData(form);
xhr.send(formData);
