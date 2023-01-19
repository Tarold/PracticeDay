<template>
  <transition name="fade">
    <div class="vue-modal" v-show="open">
      <transition name="drop-in">
        <div class="vue-modal-inner" v-show="open">
          <div class="vue-modal-content">
            <slot />
            <button type="button" @click="close" class="closeButton">
              Close
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';

export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  setup(_, { emit }) {
    const close = () => {
      emit('close');
    };

    const handleKeyup = (event) => {
      if (event.keyCode === 38) {
        close();
      }
    };

    onMounted(() => document.addEventListener('keyup', handleKeyup));
    onUnmounted(() => document.removeEventListener('keyup', handleKeyup));

    return { close };
  },
};
</script>

<style>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.vue-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.vue-modal-inner {
  max-width: 500px;
  margin: 2rem auto;
}

.vue-modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
  border-radius: 0.3rem;
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.drop-in-enter-active,
.drop-in-leave-active {
  transition: all 0.3s ease-out;
}

.drop-in-enter-from,
.drop-in-leave-to {
  opacity: 0;
  transform: translate(0, -50px);
}

.closeButton {
  align-items: center;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
}
</style>
