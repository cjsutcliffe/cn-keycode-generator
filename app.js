const insert = document.getElementById('insert');

//note - differences in what is returned between 'keypress' and 'keydown'
document.addEventListener('keypress', (e) => {
	console.log(e);

// use innerHTML to write new content to div "key"
	insert.innerHTML = `
		<div class="key">
			${e.key === ' ' ? 'Space' : e.key}
			<small>event.key</small>
		</div>
		<div class="key">
			${e.code}
			<small>event.code</small>
		</div>
		<div class="key">
			${e.charCode}
			<small>event.charCode</small>
	`
});
