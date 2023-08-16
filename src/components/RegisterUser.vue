<template>
	<form @submit.prevent="registrarUsuario">
		<div class="space-y-12 sm:space-y-16 px-20 py-5">
			<div>
				<h2 class="text-base font-semibold leading-7 text-gray-900">
					Registro de usuário
				</h2>
				<p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
					Informe seus dados para cadastro
				</p>
				<div
					class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
					<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							for="first-name"
							class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
							>Nome
						</label>
						<div class="mt-2 sm:col-span-2 sm:mt-0">
							<input
								v-model="usuario.nome"
								type="text"
								name="first-name"
								id="first-name"
								autocomplete="given-name"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2" />
						</div>
					</div>
					<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							for="last-name"
							class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
							>Senha
						</label>
						<div class="mt-2 sm:col-span-2 sm:mt-0">
							<input
								v-model="usuario.senha"
								type="password"
								name="last-name"
								id="last-name"
								autocomplete="family-name"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2" />
						</div>
					</div>

					<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							for="email"
							class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
							>Email
						</label>
						<div class="mt-2 sm:col-span-2 sm:mt-0">
							<input
								v-model="usuario.email"
								id="email"
								name="email"
								type="email"
								autocomplete="email"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6 px-2" />
						</div>
					</div>
					<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							for="postal-code"
							class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
							>Cep</label
						>
						<div class="mt-2 sm:col-span-2 sm:mt-0">
							<input
								type="text"
								name="postal-code"
								id="postal-code"
								autocomplete="postal-code"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2" />
						</div>
					</div>
					<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							for="street-address"
							class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
							>Rua</label
						>
						<div class="mt-2 sm:col-span-2 sm:mt-0">
							<input
								type="text"
								name="street-address"
								id="street-address"
								autocomplete="street-address"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6 px-2" />
						</div>
					</div>

					<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							for="city"
							class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
							>Cidade</label
						>
						<div class="mt-2 sm:col-span-2 sm:mt-0">
							<input
								type="text"
								name="city"
								id="city"
								autocomplete="address-level2"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2" />
						</div>
					</div>

					<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							for="region"
							class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
							>Estado</label
						>
						<div class="mt-2 sm:col-span-2 sm:mt-0">
							<input
								type="text"
								name="region"
								id="region"
								autocomplete="address-level1"
								class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-center items-center my-5">
			<button class="btn mx-2 bg-orange-400" type="submit">Registrar</button>
		</div>
	</form>
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
