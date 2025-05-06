<template>
  <main>

      <div id="card-container">
          <TheCard v-for = "teacher of teachers" :title = "teacher.id + ' ' + teacher.name"/>
      </div>
  </main>
</template>

<script setup>
  const { data: teachers } = await useFetch('/api/teachers')




</script>