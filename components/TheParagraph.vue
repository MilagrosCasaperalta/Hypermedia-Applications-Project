 <!--
 Props:
    - image (String): URL of the image to display (optional).
    - imageCap (String): Alt text for the image (optional).
    - position (String): Position of the text relative to the image — 'right' (default) or 'left'.
    - imageWidth (String): CSS width value for the image (default: '100%').
-->


<template>

  <section :class="'paragraph-container' + containerDirectionClass" >

    <!-- Left image of the paragraph -->
    <div v-if="leftImageVisibility" class="paragraph-image">
      <figure class="wrapper">
        <img :src="image" :alt="imageCap" :style="{width: imageWidth}"/>
      </figure>
    </div>

    <!-- Text of the paragraph -->
    <div :class="paragraphTextClass" >
      <div :class="'wrapper ' + textWrapperClass">
        <slot> </slot>
      </div>
    </div>

     <!-- Right image of the paragraph -->
    <div v-if="rightImageVisibility" class="paragraph-image">
      <figure class="wrapper">
        <img :src="image" :alt="imageCap" :style="{width: imageWidth }" />
      </figure>
    </div>
     </section>
</template>

<script>
export default {
  props: {
    image: { type: String, default: () => '' },
    imageCap: { type: String, default: () => '' },
    position: {
      type: String,
      default: () => 'right',
      validator: (value) => ['right', 'left'].includes(value.toLowerCase()),
    },
    imageWidth: {
      type: String,
      default: () => '100%',
    },
  },
  data() {
    return {
      leftImageVisibility: this.image && this.position === 'right',
      rightImageVisibility: this.image && this.position === 'left',
      paragraphTextClass: this.image ? 'paragraph-text' : 'paragraph-text-only',
      textWrapperClass: !this.image
        ? ''
        : this.position === 'right'
        ? ' right-paragraph'
        : ' left-paragraph',
    }
  },
  computed: {
    containerDirectionClass() {
      return this.position === 'left' ? ' image-before-paragraph' : ''
    },
  },
}
</script>

<style scoped>
/*  Wrapper to center the content */
    .wrapper {
        display: inline-block;
        margin: auto;
    }

/* Containers components */
  .paragraph-container::after {
  content: "";
  display: table;
  clear: both;
}
    .paragraph-image{
        position: relative;
        width: 100%;
    }

    .paragraph-text,
    .paragraph-text-only {
      margin-top: 10px;
      margin-bottom: 20px;
     
    
       position: relative;
      width: 100%;
      border-radius: 40px;      
    }

/* Prevent huge margin top space, as the whole component is already spaced apart */
.left-paragraph :first-child,
.right-paragraph :first-child {
  margin-top: 1px;
}

/* Image layout */
.paragraph-image * {
  max-width: 100%;
  max-height: 450px;
  display: flex;
  padding-left: 2%;
   padding-right:2%;
}

img {
  width: 80%;
  height: auto;
  object-fit: cover;
  display: block;
  border-radius: 50px;
 
}

/* Grid management for mobile devices */
@media (min-width: 720px) {
  
  .paragraph-image,
  .paragraph-text {
   
    float: left;
    padding-bottom: 2%;
  }
  .paragraph-text {
    width: 60%;
  }
  .paragraph-image {
    width: 40%;
  }
}
/* Grid management for desktop devices */
@media (max-width: 719px) {
  img {
    max-height: 70vh;
  }
    .left-paragraph {
        padding-right: 2px;
  
    }
    .right-paragraph {
        padding-left: 2px;
    
    }

  /* Revert the margin for the first element */
  .left-paragraph :first-child,
  .right-paragraph :first-child {
    margin-top: 0px;
  }

  /* Show images always before the text */
  .image-before-paragraph {
    display: flex;
    flex-direction: column-reverse;
  }
}

</style>

