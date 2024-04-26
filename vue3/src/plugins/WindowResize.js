import { ref, onMounted, onUnmounted } from 'vue';

export default function useWindowWidth() {
  const windowWidth = ref(null);

  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowWidth);
  });

  return windowWidth;
}
