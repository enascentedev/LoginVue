<template>
	<div>
		<h2>Registro de Usuário</h2>
		<form @submit.prevent="registrarUsuario">
			<label>
				Nome:
				<input v-model="usuario.nome" type="text" />
			</label>
			<label>
				Email:
				<input v-model="usuario.email" type="email" />
			</label>
			<label>
				Senha:
				<input v-model="usuario.senha" type="password" />
			</label>
			<button type="submit">Registrar</button>
		</form>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "RegistroUsuario",
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
		registrarUsuario() {
			axios
				.post("http://localhost:8000/auth/register", this.usuario)
				.then((response) => {
					console.log(response);
					// Lógica para redirecionar após registro
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},
};
</script>
