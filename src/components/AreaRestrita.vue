<template>
	<div class="flex bg-slate-800 p-28">
		<div class="flex flex-1 gap-96">
			<h1 class="text-white text-5xl">O mistério ?</h1>
			<div class="flex gap-40"></div>
		</div>
		<button class="btn" @click="efetuarLogout">Logout</button>
	</div>
</template>

<script>
export default {
	name: "AreaRestrita",
	methods: {
		efetuarLogout() {
			localStorage.removeItem("token");
			this.$router.push({ name: "home" });
		},
	},
};
</script>

<style lang="scss" scoped></style>
