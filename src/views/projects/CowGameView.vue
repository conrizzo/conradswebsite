<template>
    <h1 class="unselectable">This is under construction! Click and move the cow food!</h1>
    <div>
      <div
        id="movable-object"
        :style="{ top: position.top + 'px', left: position.left + 'px' }"
        @mousedown="startDrag"
      ><b class="unselectable" style="color: white;">Cow Food</b></div>
    </div>
    <div style="padding-top: 70em"><FirstFooter></FirstFooter></div>
    
  </template>
  
  <script>
  import FirstFooter from "@/components/FirstFooter.vue";
  export default {
    name: 'CowGameView',
    components: {
      FirstFooter,
    },    
    data() {
      return {
        isMouseDown: false,
        offsetX: 0,
        offsetY: 0,
        position: { top: 500, left: 500 },
      };
    },
    mounted() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const objectWidth = 50; // Update with the actual width of the object
        const objectHeight = 50; // Update with the actual height of the object

        this.position.top = (screenHeight - objectHeight) / 2;
        this.position.left = (screenWidth - objectWidth) / 2;

        document.addEventListener('mouseup', this.stopDrag);
        document.addEventListener('mousemove', this.drag);
    },
    beforeUnmount() {
      document.removeEventListener('mouseup', this.stopDrag);
      document.removeEventListener('mousemove', this.drag);
    },
    methods: {
      startDrag(event) {
        this.isMouseDown = true;
        const rect = event.target.getBoundingClientRect();
        this.offsetX = event.clientX - rect.left;
        this.offsetY = event.clientY - rect.top;
      },
      stopDrag() {
        this.isMouseDown = false;
      },
      drag(event) {
        if (this.isMouseDown) {
          this.position.top = event.clientY - this.offsetY;
          this.position.left = event.clientX - this.offsetX;
        }
      },
    },
  };
  </script>
  <style>
  #movable-object {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: rgb(30, 255, 0);
  }

  .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>