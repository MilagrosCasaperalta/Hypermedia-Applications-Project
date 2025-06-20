<template>
  <main>
    <section class="teacher-section">
      <h1>Meet Our Teachers</h1>
      <div id="card-container">
        <TheCard 
          v-for="teacher in teachers" 
          :key="teacher.id" 
          :title="teacher.name"
          :subtitle="teacher.role"
          :link="'/teachers/' + teacher.alias" 
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

/* Raw data section */
.raw-data-section {
  margin-top: 80px;
  padding: 40px;
  background-color: #f9f9f9;
  border-top: 2px solid #ddd;
}

.raw-data-section h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #444;
}

.raw-data-section pre {
  background: #eee;
  padding: 20px;
  border-radius: 8px;
  text-align: left;
  overflow-x: auto;
  font-size: 0.9rem;
}
</style>
