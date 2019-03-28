const opts = {
	base: {
		demand: true,	// Comando obligatorio
		alias: 'b'		// alias del comando
	},
	limite: {
		alias: 'l',		// alias del comando
		default: 10		// Valor por defecto
	}
}

const argv = require('yargs')
	.command('listar', 'Imprime en consola la tabla de multiplicar', opts)
	.command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
	.help()
	.argv;


module.exports = {
	argv
}