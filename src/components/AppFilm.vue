<script>

export default {
    props: ["arrayGenerato"]
}

</script>

<template>
    <div class="container">
        <div v-for="elemento in arrayGenerato">
            <div>{{ elemento.original_title }} </div>
            <div>{{ elemento.original_language }} </div>
            <div>{{ elemento.name }} </div>
        </div>
    </div>
</template>

<style scoped></style>