<template>
  <form @submit.prevent="save" id="vform">
    <div :style="`display:grid;grid-template-columns: repeat(${props.cols},1fr);`" class="gap-4">
      <div v-for="input in props.inputs" :key="input.id">
        <!-- native type text,file,color,date... -->
        <div v-if="input.type !== undefined">
          <label  class=" block py-2 text-sm font-semibold " :for="input.name">
            {{input.name}} 
            <span v-if="input.required" class="px-2 w-full text-lg font-black text-red-700">*</span>
          </label>
          <input 
            v-if="input.type !='file'" 
            :required="input.required" 
            v-model='input.data' 
            :min="input.type === 'number' ? '0' : ''" 
            :placeholder="input.placeholder" 
            :type="input.type" 
            :id="input.name"
            :class="{'h-12':input.type === 'color','rounded-2xl': props.isRounded}"  
            class="px-4 py-2 mt-1 border-2 border-gray-300 outile-none focus:outline-none focus:ring-2 w-full focus:ring-blue-500/50 focus:border-transparent"  />
            <div v-else >
              <div v-if="input.isImage">
                <input 
                  :class="{'rounded-2xl':props.isRounded}"
                  class="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-50  border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" accept="image/png, image/gif, image/jpeg" type="file" @change="previewImage">
                <p class="mt-1  text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF </p>
              </div>
              <div v-else>
                <input 
                  :class="{'rounded-2xl':props.isRounded}"
                  class="mt-2 px-4 py-2 block w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" multiple type="file" @change="previewFiles">
              </div>
            </div>
            
            <div  v-for="(error, key) in input.errors" :key="key">
              <div class="text-red-500 text-sm   py-2 font-semibold">
                {{ error }}
              </div>
            </div>
        </div>

        <div v-if="input.isTextArea === true">
          <label  class=" block py-2 text-sm font-semibold " for="">
            {{input.name}} <span v-if="input.required" class="px-2 text-lg font-black text-red-700">*</span>
          </label>
            <textarea 
              v-model='input.data'
              :class="{'rounded-2xl':props.isRounded}"
              class="px-4 py-2 mt-1 border-2 border-gray-300 outile-none focus:outline-none focus:ring-2 w-full focus:ring-blue-500/50 focus:border-transparent" required rows="3"></textarea>
            <div  v-for="(error, key) in input.errors" :key="key">
                <span class="text-red-500 absolute right-4 top-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.8em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path></svg></span>
                <div class="text-red-500 text-sm   py-2 font-semibold">
                    {{ error }}
                </div>
            </div>
        </div>
        <div v-else-if="input.isCheckbox ===true" class="my-2">
            <label class="text-sm font-semibold   block uppercase md:text-sm text-light"> {{input.name}} <span class="px-2 text-lg font-black text-red-700">*</span></label>
            <div 
              :class="{'flex flex-row':input.position === 'horizontal','flex flex-col': input.position ==='vertical'}" 
              class="items-center  justify-between">
              
              <label v-for="(item,index) in input.options" :key="index" class="">
               
                <input  
                v-model="input.data" 
                class="px-3 mx-2 py-2 mt-1 border-2 border-gray-300  focus:outline-none focus:ring-2  focus:border-transparent" 
                :name="input.key" 
                :id="index.toString()" 
                v-if="input.value"
                :value="item" 
                type="checkbox" /> 
                <span v-if="input.value">{{item[input.value]}} </span>

              </label>

            </div>
            <div  v-for="(error, key) in input.errors" :key="key">
                <span class="text-red-500 absolute right-4 top-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.8em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path></svg></span>
                <div class="text-red-500 text-sm   py-2 font-semibold">
                  {{ error }}
                </div>
            </div>
        </div>
        <div v-else-if="input.isSelect ===true" class="my-2">
          <label  class=" block py-2 text-sm font-semibold " for="">
            {{input.name}} <span v-if="input.required" class="px-2 text-lg font-black text-red-700">*</span>
          </label>
          <Vselect
            v-if="input.options"
            :options="input.options"
            :multiple="false"
            v-model="input.data"
           
          />
         
        </div>
        <div v-else-if="input.isRadio === true" class="my-2">
            <label class="text-sm font-semibold   block uppercase md:text-sm text-light"> {{input.name}} <span class="px-2 text-lg font-black text-red-700">*</span></label>
            <div 
              :class="{'flex flex-row':input.position === 'horizontal','flex flex-col': input.position ==='vertical'}"
              class="flex   justify-between">
              <label v-for="(item,index) in input.options" :key="index" class=""> 
                <input  
                v-model="input.data" 
                class="px-3 mx-2 py-2 mt-1 border-2 border-gray-300  focus:outline-none focus:ring-2  focus:border-transparent" 
                :name="input.key" 
                :id="index.toString()" 
                v-if="input.value"
                :value="item" 
                type="radio" /> 
                <span v-if="input.value">{{item[input.value]}} </span>
              </label>
              
            </div>
            <div  v-for="(error, key) in input.errors" :key="key">
                <span class="text-red-500 absolute right-4 top-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.8em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path></svg></span>
                <div class="text-red-500 text-sm   py-2 font-semibold">
                  {{ error }}
                </div>
            </div>
        </div>
      </div>
    </div>

    <div class="py-2 my-2 flex justify-center space-x-8">
      <vbutton  type="submit"  template="success"> {{props.submitText}} </vbutton>
      <vbutton type="reset" template="danger"> {{ props.cancelText }} </vbutton>
    </div>
  </form>
</template>

<script lang="ts">
  export default {
    name: 'VForm',
    inheritAttrs: false,
    customOptions: {}
  }
</script>

<script setup lang="ts">
import { ref } from 'vue';
import Vbutton from '@/components/Vbutton.vue'
import Vselect from '@/components/Vselect.vue';

import type { FormData } from '@/types/formData';

interface Props {
  inputs: FormData[]
  cols?: number
  submitText: string
  cancelText: string
  sendRequest:boolean
  isRounded:boolean
}
const emits = defineEmits(['getFiles','getImage','sendForm'])
const props = withDefaults(defineProps<Props>(),{
  cols:1,
  submitText:'Envoyer',
  cancelText:'Annuler',
  isRounded:false
})
const files  = ref<object>()
const image  = ref<object>()

function previewFiles(event :any) {
  if(event.target) {
    files.value = event.target.files
    emits('getFiles',files.value)
  }
}
function  previewImage(event :any) {
  if(event.target) {
    image.value = event.target.files[0]
    emits('getImage',image.value)
  }
}

function save() {
  emits('sendForm')
}



</script>
<style>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>