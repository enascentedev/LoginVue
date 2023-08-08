import { defineStore } from "pinia";

export const useregisterUser = defineStore("registerUser", {
	state: () => ({
		usuariosRegistrados: [],
	}),
	actions: {
		adicionarUsuario(usuario) {
			this.usuariosRegistrados.push(usuario);
		},
		verificarCredenciais(email, senha) {
			return this.usuariosRegistrados.some(
				(usuario) => usuario.email === email && usuario.senha === senha
			);
		},
	},
});
