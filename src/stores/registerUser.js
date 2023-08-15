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
				this.usuariosRegistrados = response.data.usuarios;
			} catch (error) {
				console.error("Erro ao carregar usuários:", error);
			}
		},
		verificarCredenciais(email, senha) {
			console.log("Usuarios Registrados:", this.usuariosRegistrados);
			console.log("Email:", email);
			console.log("Senha:", senha);
			const emailLimpo = email.trim(); // Remove espaços do início e final
			const senhaLimpa = senha.trim(); // Remove espaços do início e final

			return this.usuariosRegistrados.some(
				(usuario) =>
					usuario.email === emailLimpo && usuario.senha === senhaLimpa
			);
		},
	},
});
