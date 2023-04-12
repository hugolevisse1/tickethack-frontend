document.querySelector('#purchase').addEventListener('click', function() {
	fetch('http://localhost:3000/trips', {
		method: "POST",
		headers: { "Content-Type" : "application/json" },
		body: JSON.stringify(userData),
	})
	.then(response => response.json())
	.then(data => {
		document.querySelector('.row').innerHTML += `
		<div class="row">
		<div id="round-trip">${departure} > ${arrival}</div>
		<div id="time">20:09</div>
		<div id="price">150€</div>
		<div>Departure in 5 hours</div>
	</div> `
})
})