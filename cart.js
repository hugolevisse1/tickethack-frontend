document.querySelector('#purchase').addEventListener('click', function() {
	const departure = document.querySelector('#departure').value;
    const arrival = document.querySelector('#arrival').value;

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
		<div id="time">${date}</div>
		<div id="price">${price}</div>
		<div>Departure in: check your ticket 😀</div>
	</div> `
})
})