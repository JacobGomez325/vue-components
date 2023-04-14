<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div v-if="template==='none'">
      <label v-if="labelposition" :class="{'block py-2':labelposition==='y','inline px-2':labelposition==='x'}" class=" text-sm font-semibold " for="">
      {{label}}
      </label>
      <input  
      v-model="value"  
      :placeholder="placeholdere" 
      :class="`
        ${props.padding } 
        ${props.aroundi} 
        ${props.textsize} 
        ${props.graissage} 
        ${props.size} 
        ${props.bordere} 
        ${props.bgcolor} 
        ${props.textcolor} `" 
        :type="props.type" 
        class="outline-none " 
        :required="props.required"   >
    </div>
    <div v-if="template==='default'">
      <label v-if="labelposition" :class="{'block py-2':labelposition==='y','inline px-2':labelposition==='x'}" class=" text-sm font-semibold " for="">
      {{label}} <span v-if="required" class="px-2 w-full text-lg font-black text-red-700">*</span>
      </label>
      <input 
      :type="type"
      :required="required"   
      :placeholder="props.placeholdere" 
      v-model="value"
      class="px-4 rounded py-2 mt-1 border border-gray-100 outile-none focus:outline-none focus:ring-2 w-full focus:ring-blue-500/50 focus:border-transparent"  />
    </div>
    
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  const emits = defineEmits(['update:modelValue'])
  const props = defineProps({
    modelValue:{
      required:true
    },
    template: {
      type:String,
      default:'default'
    },
    required: {
      type:Boolean,
      default:true
    },
    padding: {
      type:String,
      default:''
    },
   
    placeholdere:{
      type:String,
      default:''
    },
    labelposition:{
      type:String,
      default:'y'
    },
    type:{
      type:String,
      default:'text'
    },
    label: {
      type:String,
      required: true,
      default:''
    },
    aroundi: {
      type:String,
      required: true,
      default:''
    },
    textsize: {
      type:String,
      required: true,
      default:''
    },
    graissage: {
      type:String,
      required: true,
      default:''
    },
    size: {
      type:String,
      required: true,
      default:''
    },
    bordere: {
      type:String,
      required: true,
      default:''
    },
    bgcolor: {
      type:String,
      required: true,
      default:''
    },
    textcolor: {
      type:String,
      required: true,
      default:''
    }
  },
  )

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