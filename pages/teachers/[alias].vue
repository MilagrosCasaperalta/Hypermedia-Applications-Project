<template>
    <div>
     <h1>this is teacher information page</h1>
    </div>
</template>



<script setup>
    const route = useRoute()
    const alias = route.params.alias
    const { data: teachers } = await useFetch('/api/teachers/' + alias)
</script>