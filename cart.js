// fetch(`http://localhost:3000/trips/`)
// 	.then 

// // function addCarts() {
// // }
// affiche tous les trajets ajoutés au panier avec la possibilité de les supprimer.

// function deleteTripListener() {
// 	for (let i = 0; i < document.querySelectorAll('.btn-delete').length; i++) {
// 		document.querySelectorAll('.btn-delete')[i].addEventListener('click', function () {
// 			fetch(`http://localhost:3000/trips/${this.id}`, { method: 'DELETE' })
// 				.then(response => response.json())
// 				.then(data => {
// 					console.log(data)
// 					if (data.result) {
// 						this.parentNode.parentNode.remove();
// 					}
// 				});
// 		});
// 	}
// }

// deleteTripListener()