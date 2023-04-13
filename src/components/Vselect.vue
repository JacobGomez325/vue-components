<template>
  <div class="container mx-auto">
    
    <div class="relative">
      <div 
        v-if="items.length > 0 && props.multiple" 
        class="bg-white shadow flex space-x-1 p-2">
        <p  v-for="(item,index) in items" 
          :key="index"
          class="bg-green-500 rounded-md px-1 flex space-x-1" >
          <span class="text-white">{{item.name}}</span>
          <span 
          @click="removeItem(item,index)"
          class="cursor-pointer"
          >x</span>
        </p>
      </div>
      <input  
        class="px-4 rounded py-2  border border-white  bg-white shadow outile-none focus:outline-none focus:ring-2 w-full focus:ring-blue-500/50 focus:border-transparent"
        placeholder="Selectionnez un element ..."
        :readonly="!openSelect"
        v-model="searchQuery"
        :class="{'cursor-default': !openSelect, 'cursor-text': openSelect}"
        @click="selectElement"
      />
      
      <span 
        v-if="openSelect" 
        class="absolute top-4 right-1">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg>
      </span>

      <span 
        v-else
        class="absolute top-4 right-1">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
      </span>
    </div>
    <div v-if="openSelect" class="bg-white shadow rounded p-3">
      <div v-if="resultQuery != undefined && resultQuery.length > 0" key="result">
        <ul 
          v-if="resultQuery != undefined && resultQuery.length > 0 && selected ===''"
          key="resultNoSelected">
          <li 
            v-for="(option,index) in resultQuery" 
            :key="index" 
            class="p-2 capitalize font-semibold cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-200 rounded-md"
            @click="addItem(option,index)"
            > {{ option.name }} 
          </li>
        </ul>
      
        <ul 
          v-if="selected !==''"
          key="resultSelected">
          <li 
            v-for="(option,index) in options" 
            :key="index" 
            :class="{'bg-green-500 text-white ': option.name === selected}"
            class="p-2 capitalize font-semibold cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-200 rounded-md"
            @click="addItem(option,index)"
            > {{ option.name }} 
          </li>
        </ul>
      </div>
      
      <p 
        v-else
        key="noResult"
        class="text-center py-2 font-semibold"
        >
        No results
      </p>   
    </div>

  </div>
</template>

<script lang="ts">
  export default {
    name: 'VSelect',
    inheritAttrs: false,
    customOptions: {}
  }
</script>

<script setup lang="ts">
import type { Option } from '@/types/options';
import { ref,computed,reactive } from 'vue'
import type { PropType } from 'vue';

const emits = defineEmits(['getData'])
const props = defineProps({
  options:{
    required: true,
    type: Array as PropType<Option[]>
  },
  multiple: {
    required: true,
    type:Boolean 
  }
})

const openSelect =  ref<boolean>(false)
const selected = ref<string>('')
const searchQuery = ref<string>('')
const items = reactive<any[]>([])

const resultQuery = computed(() => {
  if(searchQuery.value){
    return props.options.filter((item)=>{
      return searchQuery.value.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
    })
  }else{
    return props.options
  }
})

const selectElement = () => {
  openSelect.value = !openSelect.value
  if(!props.multiple) {
    selected.value = searchQuery.value
  }
}

const addItem = (item:any,index:number) => {
  if(props.multiple) {
    items.push(item)
    resultQuery.value.splice(index, 1)
    emits('getData',items)
  }else {
    const items = item
    searchQuery.value = item.name
    emits('getData',items)
    openSelect.value = false
    
  }
  
}

const removeItem = (item:any,index:number) => {
  items.splice(index, 1);
  resultQuery.value.push(item);
}


</script>

<style>

</style>