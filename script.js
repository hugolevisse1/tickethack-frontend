// rechercher un trajet en fonction du départ, de l’arrivée et de la date.
// rechercher les trajets depuis home > send to cart
document.querySelector('#btn-search').addEventListener('click', function () {
    const departure = document.querySelector('#departure').value;
    const arrival = document.querySelector('#arrival').value;
    const date = document.querySelector('#date').value;
    console.log(departure);
    console.log(arrival);

    fetch('http://localhost:3000/trips', {	
        method: "POST",
		headers: { "Content-Type" : "application/json" },
		body: JSON.stringify({
            departure: departure,
            arrival: arrival,
            date: date
        }),
	})
    .then(response => response.json())
    .then(data => {
        
        document.querySelector("#train").style.display = "none";
        document.querySelector("#line").style.display = "none";
        document.querySelector("#content-right-text").style.display = "none";
        console.log(data);
        if (data.result) {
            for (let i=0; i<data.list.length; i++) {
                
                document.querySelector('#content-right').innerHTML += ` 
                <div class="row">
                 <div id="round-trip"> ${departure} > ${arrival}</div>
                 <div id="time">${date}</div>
                 <div id="price">${data.list[i].price}</div>
                 <div>
                     <span><button type="button" class="cartBookBtn">Book</button>
                 </div> `
            }
        
        } else {
            res.json({ result: false, error: 'This trip does not exist'})
        }
    }
    )})

 