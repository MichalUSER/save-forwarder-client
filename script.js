let app = new Vue({
	el: "#app",
	data: {
		visible: true,
		accounts: {}
	},
	created() {
		axios.get("http://localhost:5000/list")
			.then(response => {
				this.accounts = response.data;
			})
			.catch(error => {
				console.log(error);
			})
	}
});
