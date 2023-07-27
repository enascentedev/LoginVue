import { defineStore } from "pinia";

export const useSalvaToken = defineStore("salvaToken", {
	state: () => ({
		token: null,
	}),
	actions: {
		setToken(token) {
			this.token = token;
		},
	},
});
