import { defineStore } from "pinia";
import axios from "axios";

export const useregisterUser = defineStore("registerUser", {
	state: () => ({
		usuariosRegistrados: [],
	}),
	actions: {
		adicionarUsuario(usuario) {
			this.usuariosRegistrados.push(usuario);
		},
		async carregarUsuariosRegistrados() {
			try {
				const response = await axios.get("http://localhost:8000/usuarios");
				console.log(response);
				if (Array.isArray(response.data)) {
					this.usuariosRegistrados = response.data; // ajustado para lidar com array direto
				} else {
					console.error("Formato de dados inesperado:", response.data);
				}
			} catch (error) {
				console.error("Erro ao carregar usuários:", error);
			}
		},

		verificarCredenciais(email, senha) {
			const emailLimpo = email.trim();
			const senhaLimpa = senha.trim();

			console.log("Usuários Registrados: ", this.usuariosRegistrados); // log dos usuários registrados
			console.log("Credenciais Fornecidas: ", {
				email: emailLimpo,
				senha: senhaLimpa,
			}); // log das credenciais fornecidas

			return (
				Array.isArray(this.usuariosRegistrados) &&
				this.usuariosRegistrados.some(
					(usuario) =>
						usuario.email === emailLimpo && usuario.senha === senhaLimpa
				)
			);
		},
	},
});
