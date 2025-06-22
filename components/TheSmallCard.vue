<template>
  <div class="card">
    <h2 v-if="name">{{ name }}</h2>
    <p v-if="location"><strong>Location:</strong> {{ location }}</p>
    <p v-if="schedule"><strong>Schedule:</strong> {{ schedule }}</p>

    <p v-if="teacherList && teacherList.length">
      <strong>Teacher(s):</strong>
      <span v-for="(teacher, index) in teacherList">
        <NuxtLink :to="`/teachers/${teacher.teachers.alias}`">{{ teacher.teachers.name }}</NuxtLink>
        <span v-if="index < teacherList.length - 1">, </span>
      </span>
    </p>

    <p v-if="type && typeLink">
      <strong>Type:</strong>
      <NuxtLink :to="typeLink">{{ type }}</NuxtLink>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  location: String,
  schedule: String,
  teacherList: {
    type: Array,
    default: () => []
  },
  type: String,
  typeLink: String
});
</script>
