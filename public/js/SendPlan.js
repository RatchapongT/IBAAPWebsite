function addRecipient() {
	var container = document.getElementById("emails");

	var email = document.createElement('input');
	email.type = "text";
	email.placeholder = "Enter email";
	email.className = "form-control adjust2";
	
	container.appendChild(email);
}