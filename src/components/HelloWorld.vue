<template>
    <div class="report-issue">
    <p class="report-issue__copy">
      <slot></slot>
    </p>

    <button
      id="report-issue-toggle"
      class="report-issue__btn"
      type="button"
    >
      Report an Issue
    </button>
  </div>
</template>

<script setup lang="ts" generic="K extends SomeEnum">
import type { SomeEnum } from '@/consants';
import type { EventParams } from '@/event-params';
import { onMounted } from 'vue';

interface Props<K extends SomeEnum> {
  eventParams: EventParams[K]
}

const props = defineProps<Props<SomeEnum>>()

onMounted(() => {
  /**
   * Adding a bunch of lines here to cause the infinite frame generation to occur.
   * 
   * Removing these should cause the loop to stop.
   */
  console.log()
  console.log()
  console.log() 
  console.log()
  console.log()
  console.log()
  console.log()
  console.log(props.eventParams)
})
</script>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>


