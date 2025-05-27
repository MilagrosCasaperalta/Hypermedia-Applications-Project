<template>
  <div class="page-container">
    <h1 class="title">Teacher Information Page</h1>

    <div v-if="teacher" class="teacher-card">
      <img
        :src="teacher.img"
        :alt="teacher.name"
        class="teacher-image"
      />
      <div class="teacher-info">
        <h2 class="teacher-name">{{ teacher.name }}</h2>
        <p class="teacher-role">{{ teacher.role }}</p>
        <p class="teacher-description">{{ teacher.description }}</p>
        <p class="teacher-style"><strong>Yoga Style:</strong> {{ teacher.style }}</p>
        <div class="teacher-schedule">
          <strong>Class Schedule:</strong>
          <ul>
            <li v-for="(time, day) in teacher.schedule" :key="day">
              {{ day }}: {{ time }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-else class="loading">
      <p>Loading teacher information...</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const alias = route.params.alias

const teachers = [
  {
    alias: 'ava-thompson',
    name: 'Ava Thompson',
    role: 'Lead Instructor',
    img: '/img/teachers/ava-thompson.png',
    description: `Ava Thompson has over 10 years of experience as a dedicated yoga instructor. Trained in India and certified in Hatha and Vinyasa Yoga, Ava's approach focuses on mindfulness, breath awareness, and building inner balance. She is passionate about helping students of all levels develop a sustainable yoga practice that nurtures both body and mind. Outside the studio, Ava enjoys meditation retreats and exploring holistic wellness techniques.`,
    style: 'Hatha Yoga',
    schedule: {
      Monday: '10:00 - 11:30',
      Wednesday: '18:00 - 19:30',
      Friday: '08:00 - 09:30'
    }
  },
  {
    alias: 'noah-patel',
    name: 'Noah Patel',
    role: 'Lead Instructor',
    img: '/img/teachers/noah-patel.png',
    description: `Noah Patel brings over 8 years of teaching experience rooted in the dynamic flow of Vinyasa Yoga. With a background in dance and physical therapy, Noah combines movement science with breath synchronization to create energizing yet accessible classes. He is passionate about empowering students to discover strength and flexibility while fostering a mindful connection to their bodies. Noah regularly attends workshops worldwide to deepen his practice and teaching.`,
    style: 'Vinyasa Yoga',
    schedule: {
      Tuesday: '17:00 - 18:30',
      Thursday: '19:00 - 20:30'
    }
  },
  {
    alias: 'luna-chen',
    name: 'Luna Chen',
    role: 'Specialty Instructor',
    img: '/img/teachers/luna-chen.png',
    description: `Luna Chen has cultivated her expertise in Restorative and Yin Yoga over the last 6 years, with training from renowned teachers in Asia and North America. She is passionate about supporting students through gentle, healing practices that cultivate relaxation and stress relief. Luna believes in the transformative power of stillness and breath, helping students reconnect with their bodies and minds in a compassionate environment.`,
    style: 'Restorative Yoga',
    schedule: {
      Monday: '19:00 - 20:15',
      Saturday: '10:30 - 12:00'
    }
  },
  {
    alias: 'kai-nakamura',
    name: 'Kai Nakamura',
    role: 'Specialty Instructor',
    img: '/img/teachers/kai-nakamura.png',
    description: `Kai Nakamura is a passionate Ashtanga Yoga practitioner and teacher, with over 9 years of practice that began in his hometown in Japan. His classes emphasize disciplined breath control, alignment, and fluid movement. Kai blends traditional teachings with modern anatomical knowledge, inspiring students to cultivate resilience and mental focus. Outside teaching, he enjoys hiking and sharing his love of Japanese culture through workshops.`,
    style: 'Ashtanga Yoga',
    schedule: {
      Wednesday: '06:30 - 08:00',
      Friday: '17:00 - 18:30'
    }
  },
  {
    alias: 'leo-zhang',
    name: 'Leo Zhang',
    role: 'Specialty Instructor',
    img: '/img/teachers/leo-zhang.png',
    description: `Leo Zhang has dedicated the past 7 years to studying and teaching Yin Yoga, trained with masters in China and the US. His calm and thoughtful teaching style helps students improve joint mobility and mental clarity through deep stretching and mindfulness. Leo is passionate about creating inclusive spaces for all students and often integrates meditation and philosophy into his sessions to deepen understanding of the practice.`,
    style: 'Yin Yoga',
    schedule: {
      Tuesday: '08:00 - 09:00',
      Thursday: '18:00 - 19:00',
      Sunday: '09:00 - 10:30'
    }
  },
  {
    alias: 'raj-mehta',
    name: 'Raj Mehta',
    role: 'Support Staff',
    img: '/img/teachers/raj-mehta.png',
    description: `Raj Mehta supports the studio operations and assists in coordinating classes. With a background in athletics and wellness coaching, Raj occasionally leads Power Yoga sessions focused on strength and endurance. He brings an energetic and motivational approach, encouraging students to push their limits safely. Raj is also passionate about nutrition and often shares tips for holistic health with the community.`,
    style: 'Power Yoga',
    schedule: {
      Monday: '07:00 - 08:00',
      Wednesday: '18:30 - 19:45',
      Friday: '12:00 - 13:15'
    }
  },
  {
    alias: 'sophia-rivera',
    name: 'Sophia Rivera',
    role: 'Support Staff',
    img: '/img/teachers/sophia-rivera.png',
    description: `Sophia Rivera specializes in breathwork and Pranayama, with over 5 years of teaching experience. Her sessions emphasize conscious breathing techniques that enhance energy flow and mental clarity. Sophia’s gentle and encouraging style helps students of all levels improve respiratory health and emotional balance. Outside of yoga, she enjoys sound healing and aromatherapy as complementary wellness practices.`,
    style: 'Pranayama & Breathwork',
    schedule: {
      Tuesday: '19:00 - 20:00',
      Thursday: '07:30 - 08:30'
    }
  },
  {
    alias: 'maya-brooks',
    name: 'Maya Brooks',
    role: 'Support Staff',
    img: '/img/teachers/maya-brooks.png',
    description: `Maya Brooks has been teaching Iyengar Yoga for over 6 years, focusing on precision and alignment. Trained extensively in India, Maya’s approach is rooted in safety and anatomical awareness, making her classes suitable for all ages and abilities. She believes yoga is a lifelong journey and encourages students to explore their bodies with curiosity and care.`,
    style: 'Iyengar Yoga',
    schedule: {
      Wednesday: '10:00 - 11:30',
      Saturday: '14:00 - 15:30'
    }
  },
  {
    alias: 'isabelle-dubois',
    name: 'Isabelle Dubois',
    role: 'Support Staff',
    img: '/img/teachers/isabelle-dubois.png',
    description: `Isabelle Dubois specializes in Prenatal Yoga, supporting expecting mothers with gentle postures and breathing exercises. Certified in both yoga therapy and maternal wellness, Isabelle creates nurturing and safe environments where women can maintain strength and calm throughout pregnancy. She is passionate about empowering women to connect deeply with their changing bodies.`,
    style: 'Prenatal Yoga',
    schedule: {
      Monday: '12:00 - 13:00',
      Thursday: '16:00 - 17:00'
    }
  },
  {
    alias: 'david-kim',
    name: 'David Kim',
    role: 'Support Staff',
    img: '/img/teachers/david-kim.png',
    description: `David Kim leads Meditation and Mindfulness Yoga classes with a focus on mental clarity and emotional balance. With a background in psychology and meditation traditions, David helps students cultivate presence and reduce stress through guided practices. He is passionate about making mindfulness accessible and practical for everyday life.`,
    style: 'Meditation & Mindfulness Yoga',
    schedule: {
      Friday: '18:00 - 19:00',
      Sunday: '11:00 - 12:30'
    }
  }
]

const teacher = computed(() => teachers.find(t => t.alias === alias))
</script>

<style scoped>
.title {
  color: #6b4c3b;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
}

.teacher-card {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff9f4;
}

.teacher-image {
  max-width: 220px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(250, 240, 230, 0.6);
  object-fit: cover;
  flex-shrink: 0;
}

.teacher-info {
  flex: 1;
}

.teacher-name {
  font-size: 2rem;
  margin-bottom: 0.3rem;
  color: #8a6a4d;
}

.teacher-role {
  font-style: italic;
  color: #7a5a40;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.teacher-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1rem;
}

.teacher-style {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #5a4a3a;
}

.teacher-schedule ul {
  list-style: disc inside;
  padding-left: 0;
  margin: 0;
  font-size: 1rem;
  color: #555;
}

.loading {
  text-align: center;
  font-style: italic;
  color: #888;
}
</style>
