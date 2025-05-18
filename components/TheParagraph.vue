<template>

  <section :class="'paragraph-container' + containerDirectionClass" >

    <!-- Left image of the paragraph -->
    <div v-if="leftImageVisibility" class="paragraph-image">
      <figure class="wrapper">
        <img :src="image" :alt="imageCap" :style="{width: imageWidth }"/>
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
    // image: image for the paragraphs (optional)
    image: { type: String, default: () => '' },

    // image-cap: alt attribute of the image (optional)
    imageCap: { type: String, default: () => '' },

    // postion: position of the paragraph's text. Either 'right' or 'left'. Right by default (optional)
    position: {
      type: String,
      default: () => 'right',
      validator: (value) => ['right', 'left'].includes(value.toLowerCase()),
    },

    // imageWidth: controls the width of the Image
    imageWidth: {
        type: String,
        default: () => '100%',
    }

  },
  data() {
    return {
      /** Visibility flag of the left image */
      leftImageVisibility: this.hasImage() && this.isRightPositioned(),

      /** Visibility flag of the right image */
      rightImageVisibility: this.hasImage() && !this.isRightPositioned(),

     /** Class of the main container of the paragraph to show the image always before the text in mobile version. */
      containerDirectionClass: this.isRightPositioned()
        ? ''
        : 'image-before-paragraph',


         /** Class for the paragraph's text to manage its size according to its type */
      paragraphTextClass: this.hasImage()
        ? 'paragraph-text'
        : 'paragraph-text-only',

      /** Class for the wrapper of the paragraph's text to define left/right margin */
      textWrapperClass: !this.hasImage()
        ? ''
        : this.isRightPositioned()
        ? ' right-paragraph'
        : ' left-paragraph',
    }
  },
  methods: {
    /** Return true iff the paragraph's text is right positioned */
    isRightPositioned() {
      return this.position === 'right'
    },

    /** Return true iff the paragraph is not a text-only one */
    hasImage() {
      return this.image !== ''
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
    .paragraph-container {
        width: 100%;
        display: flow-root;
    }
    .paragraph-image,
    .paragraph-text,
    .paragraph-text-only {
        position: relative;
        width: 100%;
     
    }

/* Additional spacing between text and the paragraph image  */
    .left-paragraph {
        padding-right: 1em;
        padding-left: 5em;
    
    }

    .right-paragraph {
        padding-left: 1em;
        padding-right: 5em;
      
    }

/* Prevent huge margin top space, as the whole component is already spaced apart */
.left-paragraph :first-child,
.right-paragraph :first-child {
  margin-top: 0px;
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