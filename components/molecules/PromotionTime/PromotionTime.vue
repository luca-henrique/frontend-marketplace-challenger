<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'Chronometer',
  setup() {
    const time = ref({
      days: 1,
      hours: 23,
      minutes: 34,
      seconds: 57,
    });

    const updateTimer = () => {
      if (time.value.seconds > 0) {
        time.value.seconds -= 1;
      } else if (time.value.minutes > 0) {
        time.value.minutes -= 1;
        time.value.seconds = 59;
      } else if (time.value.hours > 0) {
        time.value.hours -= 1;
        time.value.minutes = 59;
        time.value.seconds = 59;
      } else if (time.value.days > 0) {
        time.value.days -= 1;
        time.value.hours = 23;
        time.value.minutes = 59;
        time.value.seconds = 59;
      } else {
        clearInterval(timer);
      }
    };

    let timer = null;

    onMounted(() => {
      timer = setInterval(updateTimer, 1000);
    });

    onUnmounted(() => {
      clearInterval(timer);
    });

    return { time };
  },
};
</script>

<template>
  <div class="flex items-center justify-center gap-4  text-2xl sm:text-4xl font-medium">
    <div class="flex flex-col items-center">
      <span class="tabular-nums font-medium text-lg text-[#1A1A1A] ">{{ time.days.toString().padStart(2, '0') }}</span>
      <span class=" uppercase mt-1 text-[#999999] text-xs">Dias</span>
    </div>
    <span class="mb-6">:</span>
    <div class="flex flex-col items-center">
      <span class="tabular-nums font-medium text-lg text-[#1A1A1A]">{{ time.hours.toString().padStart(2, '0') }}</span>
      <span class=" uppercase mt-1 text-[#999999] text-xs">Horas</span>
    </div>
    <span class="mb-6">:</span>
    <div class="flex flex-col items-center">
      <span class="tabular-nums font-medium text-lg text-[#1A1A1A]">{{ time.minutes.toString().padStart(2, '0')
        }}</span>
      <span class=" uppercase mt-1 text-[#999999] text-xs">Mins</span>
    </div>
    <span class="mb-6">:</span>
    <div class="flex flex-col items-center">
      <span class="tabular-nums font-medium text-lg text-[#1A1A1A]">{{ time.seconds.toString().padStart(2, '0')
        }}</span>
      <span class=" uppercase mt-1 text-[#999999] text-xs">Secs</span>
    </div>
  </div>
</template>
