// rechercher les trajets depuis home > send to cart
document.querySelector('#btn-search').addEventListener('click', function () {
    const departure = document.querySelector('#departure').value;
    const arrival = document.querySelector('#arrival').value;
    console.log(departure);
    console.log(arrival);

    fetch('http://localhost:3000/trips')
    // {    ????
	// 	method: "POST",
	// 	headers: { "Content-Type" : "application/json" },
	// 	body: JSON.stringify(userData),
	// })
    .then(response => response.json())
    .then(searchedData => {
        console.log(searchedData.result);
        if (searchedData.result) {
        document.querySelector('#container').innerHTML += ` // row est dans CART.HTML, pas INDEX.HTML
       <div class="row">
        <div id="round-trip"> ${departure} > ${arrival}</div>
        <div id="time">20:09</div>
        <div id="price">150€</div>
        <div>
            <span><button type="button" class="btn-delete">x</button>
        </div> `
        } else {
            res.json({ result: false, error: 'This trip does not exist'})
        }
    }
    )})

    // baculer les trajets du cart dans bookings
    document.querySelector('#purchase').addEventListener('click', function() {
        fetch('http://localhost:3000/trips')
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
