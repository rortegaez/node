const fs = require('node:fs/promises');

	console.log('leyendo el primer archivo...')
	fs.readFile('./archivo.txt', 'utf-8')
		.then(text => {
	console.log('primer texto', text)
})

	console.log('hacer cosas mientras lee el archivo...')

	console.log('Leyendo el segundo archivo...')
	fs.readFile('./archivo2.txt', 'utf-8')
	.then(text => {
	console.log('segundo texto', text)
})