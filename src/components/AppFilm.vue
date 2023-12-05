<script>

export default {
    props: ["arrayGenerato"]

}

</script>

<template>
    <div class="container">
        <div v-for="(elemento, i) in arrayGenerato" :key="i">
            <span>{{ elemento.original_title }} </span>
            <span>{{ elemento.original_language }} </span>
        </div>

    </div>
</template>

<style scoped></style>