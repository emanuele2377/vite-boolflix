<script>

export default {
    props: ["arrayGenerato"]

}

</script>

<template>
    <div class="container">
        <div v-for="elemento in arrayGenerato"></div>
        <span>
            {{ name }}
        </span>
    </div>
</template>

<style scoped></style>