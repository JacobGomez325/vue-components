<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div v-if="template==='none'">
      <label v-if="labelposition" :class="{'block py-2':labelposition==='y','inline px-2':labelposition==='x'}" class=" text-sm font-semibold " for="">
      {{label}}
      </label>
      <input  v-model='inputValue'  :placeholder="placeholdere" :class="`${padding} ${aroundi} ${textsize} ${graissage} ${size} ${bordere} ${bgcolor} ${textcolor} `" :type="type" class="outline-none " :required="required"  @keyup="$emit('update', inputValue)"  >
    </div>
    <div v-if="template==='default'">
      <label v-if="labelposition" :class="{'block py-2':labelposition==='y','inline px-2':labelposition==='x'}" class=" text-sm font-semibold " for="">
      {{label}} <span v-if="required" class="px-2 w-full text-lg font-black text-red-700">*</span>
      </label>
      <input :required="required" v-model='dataModel'  :placeholder="placeholdere" :type="type"    @keyup="$emit('update', dataModel)" class="px-4 rounded py-2 mt-1 border border-gray-100 outile-none focus:outline-none focus:ring-2 w-full focus:ring-blue-500/50 focus:border-transparent"  />
    </div>
    
  </div>
</template>

<script>
export default {

 // eslint-disable-next-line vue/require-prop-types
 //props:['vmodel','type','padding', 'aroundi','textcolor', 'textsize','graissage','placeholdere','placeholderecolor','size','bordere','bgcolor','label','labelposition','required','template'],
 props:{
    template: {
      type:String,
      default:'default'
    },
    required: {
      type:Boolean,
      default:true
    },
    vmodel: {
      required: true
    },
    placeholdere:{

    },
    labelposition:{

    },
    type:{
      type:String,
    },
    label: {
      type:String,
      required: true
    }

 },
  data() {
    return {
      dataModel:this.vmodel
    }
  },
  
  methods: {
    
  }
}
</script>

<style>

</style>