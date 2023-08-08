<script>
import { useregisterUser } from "@/stores/registerUser.js";
import { useSalvaToken } from "@/stores/salvaToken.js";
import axios from "axios";
export default {
	name: "Access",
	data() {
		return {
			usuario: {
				nome: "",
				email: "",
				senha: "",
			},
		};
	},
	methods: {
		fazerLogin() {
			const { email, senha } = this.usuario;
			const store = useregisterUser();

			// Verifica se as credenciais correspondem aos valores registrados
			const credenciaisValidas = registerUser.verificarCredenciais(
				email,
				senha
			);

			if (credenciaisValidas) {
				// Redireciona para a área restrita
				this.$router.push({ name: "AreaRestrita" });
			} else {
				// Exibe mensagem de erro
				console.log("Credenciais inválidas");
			}
		},
	},
};
</script>

<template>
	<div class="flex justify-center items-center py-5">
		<div class="mockup-phone px-5">
			<div class="camera"></div>
			<div class="display">
				<div class="artboard artboard-demo phone-1">
					<form @submit.prevent="fazerLogin">
						<input
							v-model="usuario.email"
							type="text"
							placeholder="digite seu email"
							class="input input-bordered input-lg w-3/4 max-w-xs mx-5 my-3" />
						<input
							v-model="usuario.senha"
							type="password"
							placeholder="digite sua senha"
							class="input input-bordered input-lg w-3/4 max-w-xs mx-5 my-3" />
						<button @submit.prevent class="btn mx-5">Entrar</button>
						<router-link to="/registre-se"
							><button class="btn mx-5">cadastra-se</button></router-link
						>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
