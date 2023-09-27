<script>
import { useregisterUser } from "@/stores/registerUser.js";
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
		async fazerLogin() {
			const { email, senha } = this.usuario;
			const store = useregisterUser();

			if (!store || typeof store.carregarUsuariosRegistrados !== "function") {
				console.error(
					"Store ou método carregarUsuariosRegistrados não definidos"
				);
				return;
			}

			await store.carregarUsuariosRegistrados();

			if (store.verificarCredenciais(email, senha)) {
				this.$router.push({ name: "AreaRestrita" });
			} else {
				console.log("Credenciais inválidas");
			}
		},
	},
};
</script>

<template>
	<div class="flex justify-end py-5 bg-gray-900">
		<div
			class="mockup-phone px-5 bg-gray-900 animate-wiggle animate-infinite animate-ease-linear">
			<div class="camera"></div>
			<div class="display">
				<div class="artboard artboard-demo phone-1 bg-blue-700">
					<form class="bg-blue-700" @submit.prevent="fazerLogin">
						<div class="flex flex-col items-center">
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
						</div>
						<div class="flex justify-center">
							<button @submit.prevent class="btn mx-2">Entrar</button>
							<router-link to="/registre-se"
								><button class="btn mx-2">cadastra-se</button></router-link
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
