function deleteTripListener() {
	for (let i = 0; i < document.querySelectorAll('#btn-delete').length; i++) {
		document.querySelectorAll('#btn-delete')[i].addEventListener('click', function () {
			fetch(`http://localhost:3000/trips/${this.id}`, { method: 'DELETE' })
				.then(response => response.json())
				.then(data => {
					if (data.result) {
						this.parentNode.remove();
					}
				});
		});
	}
}