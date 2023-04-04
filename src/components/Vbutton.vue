<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <button 
      v-if="props.template === 'none'" 
      :class="`${props.padding} ${props.rounded} ${props.textSize} ${props.weigth} ${props.width} ${props.border} ${props.bgColor} ${props.textColor} `" 
      :type="props.type" class=" hover:opacity-80 transition-all flex space-x-4 duration-500 "
      @click="handleClick"
       >
      <slot></slot>
    </button>
    <button 
      v-if="props.template==='default'" 
      class="bg-gray-500 py-2 px-4 border text-white border-gray-500 rounded-md font-semibold outline-none"
      @click="handleClick"
      >
      <slot></slot>
    </button>
    <button 
      v-if="props.template==='success'" 
      :type="props.type" 
      class="bg-primary  py-2 px-4 border text-white border-primary rounded-md font-semibold outline-none"
      @click="handleClick"
      >
      <slot></slot>
    </button>
    <button 
      v-if="props.template==='danger'" 
      :type="props.type" 
      class=" bg-red-500 py-2 px-4 border text-white border-red-500 rounded-md font-semibold outline-none"
      @click="handleClick"
      >
      <slot></slot>
    </button>
  </div>
  
</template>

<script setup lang="ts">
  type button = "button" | "submit" | "reset"
  interface Props {
    type?: button
    padding?: string
    rounded?: string
    textColor?: string
    textSize?: string
    weigth?: string
    width?: string
    border?: string
    bgColor?: string
    template: string
  }

  const props = defineProps<Props>()
  const emits = defineEmits(['click','submit','reset'])
  function handleClick() {
    if(props.type !== undefined) {emits('click')}
    else if(props.type === 'submit') {emits('submit')}
    else if(props.type === 'reset') {emits('reset') }
  }
</script>

<style>

</style>