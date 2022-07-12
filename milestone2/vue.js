new Vue({
    el: "#app",
    data: {
        listaDischi: [],
    },
    mounted() {
        axios.get("dischi_vue.php")
        .then(resp => {
            this.listaDischi = resp.data;
        })
    }
})