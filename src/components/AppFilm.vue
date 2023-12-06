<script>

export default {
    props: ["arrayGenerato"]

}

</script>

<template>
    <div class="container">
        <div v-for="elemento in arrayGenerato">
            <span>{{ elemento.original_title }} </span>
            <span>{{ elemento.original_language }} </span>
        </div>

    </div>
</template>

<style scoped></style>