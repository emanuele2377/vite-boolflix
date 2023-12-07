<script>

export default {
    props: ["arrayGenerato"]
}

</script>

<template>
    <h3>FILM</h3>
    <div class="containerCard">
        <div v-for="elemento in arrayGenerato">
            <div class="card">
                <div><img
                        src="https://api.themoviedb.org/3/person/{person_id}/images?api_key=d2c87a340967a34eddbd93b646618b50&query=${store.searchString}"
                        alt=""></div>
                <div> titolo: {{ elemento.original_title }} </div>
                <div>{{ elemento.name }} </div>
                <div>lingua: {{ elemento.original_language }} </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.containerCard {
    display: flex;
    flex-direction: wrap;
    justify-content: space-around;
}
</style>

<style scoped>
.card {
    background-color: crimson;
    margin: 4%;
    height: 100%;
}
</style>

<style scoped>
h3 {
    text-align: center;
}
</style>