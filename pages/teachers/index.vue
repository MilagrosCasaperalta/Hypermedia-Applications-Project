<template>
  <main>
    <section class="teacher-section">
      <h1>Meet Our Teachers</h1>
      <div id="card-container">
        <TheCard 
          v-for="teacher in teachers" 
          :key="teacher.id" 
          :title="teacher.name"
          :path="`/img/teachers/${teacher.id}.png`"
          :alt="`${teacher.name} portrait`"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
const { data: teachers } = await useFetch('/api/teachers')
</script>

<style scoped>
.teacher-section {
  padding: 60px 30px;
  text-align: center;
}

.teacher-section h1 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #322A2A;
}

#card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}
</style>
