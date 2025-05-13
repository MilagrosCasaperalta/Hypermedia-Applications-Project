<template>


    <div>
     <h1>this is teacher information page</h1>
    </div>
</template>



<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: teachers } = await useFetch('/api/teachers/' + id)
</script>