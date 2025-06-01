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
    .paragraph-image,
    .paragraph-text,
    .paragraph-text-only {
        position: relative;
        width: 100%;
    }

/* Additional spacing between text and the paragraph image  */
    .left-paragraph {
        padding-right: 2em;
    }

   .right-paragraph {
    padding-right: 2em;
  
}

/* Prevent huge margin top space, as the whole component is already spaced apart */
.left-paragraph :first-child,
.right-paragraph :first-child {
  margin-top: 1px;
}

/* Image layout */
.paragraph-image * {
  display: block;
}
img {
  width: auto;
  max-width: 100%;
  margin: auto;
}

/* Grid management for mobile devices */
@media (min-width: 720px) {
  
  .paragraph-image,
  .paragraph-text {
    float: left;
  }
  .paragraph-text {
    width: 50%;
  }
  .paragraph-image {
    width: 50%;
  }
}
/* Grid management for desktop devices */
@media (max-width: 719px) {
  img {
    max-height: 70vh;
  }
    .left-paragraph {
        padding-right: 0px;
  
    }
    .right-paragraph {
        padding-left: 0px;
    
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