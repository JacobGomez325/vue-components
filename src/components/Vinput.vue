<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div v-if="template==='none'">
      <label v-if="labelPosition" :class="{'block py-2':labelPosition==='y','inline px-2':labelPosition==='x'}" class=" text-sm font-semibold " for="">
      {{label}}
      </label>
      <input  
      v-model="value"  
      :placeholder="placeholdere" 
      :class="`
        ${props.padding } 
        ${props.rounded} 
        ${props.textSize} 
        ${props.weigth} 
        ${props.size} 
        ${props.bordere} 
        ${props.bgcolor} 
        ${props.textColor} `" 
        :type="props.type" 
        class="outline-none " 
        :required="props.required"   >
    </div>
    <div v-if="template==='default'">
      <label v-if="props.labelPosition" :class="{'block py-2':props.labelPosition==='y','inline px-2':props.labelPosition==='x'}" class=" text-sm font-semibold " for="">
      {{props.label}} <span v-if="props.required" class="px-2 w-full text-lg font-black text-red-700">*</span>
      </label>

      <input 
      :type="props.type"
      :required="props.required"   
      :placeholder="props.placeholdere" 
      v-model="value"
      class="px-4 rounded py-2 mt-1 border border-gray-100 outile-none focus:outline-none focus:ring-2 w-full focus:ring-blue-500/50 focus:border-transparent"  />
    </div>
    
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  const emits = defineEmits(['update:modelValue'])
  interface Props {
    modelValue: string | number
    template: string
    required: boolean
    padding?: string
    placeholdere?: string
    labelPosition?: string
    type: string
    label: string
    rounded?:string
    textSize?:string
    weigth?:string
    size?:string
    bordere?:string
    bgcolor?:string
    textColor?:string
  }
  const props = withDefaults(defineProps<Props>(),{
    template:'default',
    labelPosition:'y',
    type:'text'
  })

  const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})

  
</script>

<style>

</style>