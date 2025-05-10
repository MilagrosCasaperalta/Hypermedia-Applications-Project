<template>
  <main>
    <div id="card-container">
      <TheCard 
        v-for="teacher in teachers" 
        :key="teacher.id" 
        :title="teacher.id + ' ' + teacher.name" 
        :path="imagePath"
        :alt="'helo'" />
    </div>
  </main>
</template>

<script setup>
  const { data: teachers } = await useFetch('/api/teachers')
  const imagePath = '/img/teachers/1.png';


</script>

<style>

</style>