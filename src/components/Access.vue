<script>
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
		enviarFormulario() {
			axios
				.post("http://localhost:8000/auth/register", this.usuario)
				.then((response) => {
					console.log(response);
					const token = response.data.acess_token;
					const salvaToken = useSalvaToken();
					salvaToken.setToken(token);
					this.$router
						.push({ name: "AreaRestrita" })
						.catch((erro) => console.log(erro));
				})
				.catch((error) => {
					console.error(error);
				});
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
					<form @submit.prevent="enviarFormulario">
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
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
