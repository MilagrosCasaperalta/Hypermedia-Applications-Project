<template>
  <div class="page-container">
    <div class="type-card">
      <img
        :src="`/img/classes/ashtanga.png`"
        :alt="` portrait`"
        class="type-image"
      />

      <div class="type-info">
        <h1 class="type-name">{{ type[0].name }}</h1>
        <p class="type-description">{{ type[0].description }}</p>
      </div>
    </div>
  </div>
  <div id="card-container">
    <TheSmallCard
      v-for="item in activity"
      :name="item.name"
      :schedule="item.schedule"
      :teacherList="item.teachers"
      :location="item.location"
    />
  </div>
</template>

<script setup>
import '~/assets/css/activity-page.css'
const route = useRoute()
const alias = route.params.alias
const { data: activity } = await useFetch('/api/activities/' + alias)
const { data: types } = await useFetch('/api/activities/')
const type = types.value.filter(types =>
  types.alias == alias
);
</script>

<style scoped>
.page-container {
  padding: 60px 30px;
}

.type-card {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}

.type-image {
  width: 300px;
  height: auto;
  object-fit: cover;
  border: 2px solid #ccc;
  border-radius: 0;
}

.type-info {
  max-width: 600px;
  flex: 1;
}

.type-name {
  font-size: 2.5rem;
  margin: 0;
  color: #322A2A;
}

.type-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-top: 15px;
}
</style>
