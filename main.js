let form = document.querySelector("form");
let message = document.querySelectorAll("label p");

//Regex for email validation
let regex =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let inputs = [form.firstName, form.lastName, form.email, form.password];

	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].value == "") {
			//If input is blank, a message is displayed
			message[i].classList.remove("none");
			message[i].innerHTML = `${inputs[i].name} cannot be empty
										<img
										class="errorClass"
										src="images/icon-error.svg"
										alt="icon-error"
									/>`;
			inputs[i].classList.add("invalid");
		} else if (inputs[i].id == "email" && !regex.test(inputs[i].value)) {
			//If email is invalid, a message is displayed
			message[i].classList.remove("none");
			message[i].innerHTML = `Looks like this is not an email
										<img
										class="errorClass"
										src="images/icon-error.svg"
										alt="icon-error"
									/>`;
			inputs[i].classList.add("invalid");
		} else {
			//If input is valid, message is hidden
			message[i].classList.add("none");
			inputs[i].classList.remove("invalid");
		}
	}
});
