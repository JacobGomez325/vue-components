<template>
  <main>
    <div class="container  mx-auto ">
      <div class="pt-8">
        <h1 class="py-4 text-3xl font-semibold">Mes composants </h1>
        <div class='grid grid-cols-2 gap-4'>
        
          <div>
            <h3 class="py-3"> Select simple  :</h3>
              <Vselect 
                :options="fruits"
                :multiple="false"
                v-model="items"
              />
              <p class="py-2">
                valeur: {{items}}
              </p>
            </div>

            <div>
            <h3 class="py-3"> Select simple avec target  :</h3>
              <Vselect 
                :options="fruits"
                :multiple="false"
                target="name"
                v-model="itemsT"
              />
              <p class="py-2">
                valeur: {{itemsT}}
              </p>
            </div>

            <div>
              <h3 class="py-3"> Select multiple sans target  :</h3>
              <Vselect 
                :options="fruits"
                :multiple="true"
                target="name"
                v-model="itemsMultiple"
              />
              <p class="py-2">
                valeur: {{itemsMultiple}}
              </p>
            </div>

            <div>
              <h3 class="py-3"> Select multiple avec target  :</h3>
              <Vselect 
                :options="fruits"
                :multiple="true"
                target="name"
                v-model="itemsMultipleT"
              />
              <p class="py-2">
                valeur: {{itemsMultipleT}}
              </p>
            </div>

          </div>
        
          <div>
            <h1 class="font-semibold py-4">Vform</h1>
            <vform 
            template="default"
            :isRounded="true" 
            :sendRequest="false" 
            :inputs="inputs" 
            :cols="cols" 
            submitText="Envoyé"
            cancelText="Annuler"
            @getFiles="getFiles"
            @getImage="getImage"
            @sendForm="sendForm"
          ></vform>
          </div>

      </div>
      
      
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue';
import { extractFormData,resetForm } from '@/utils/index'
import Vform from '@/components/Vform.vue'
import type { FormData } from '@/types/formData';
import type { Option } from '@/types/options';
import Vselect from '@/components/Vselect.vue';

const fruits = reactive<Option[]>([
  {id:1,name:'tomate'},
  {id:2,name:'mangue'},
  {id:3,name:'banane'},
  {id:4,name:'orange'},
  {id:5,name:'papaye'},
])

const items = ref<Option[] | Option>([])
const itemsT = ref<Option[] | Option>([])
const itemsMultiple = ref<Option[] | Option>([])
const itemsMultipleT = ref<Option[] | Option>([])

const optionsCheckbox = reactive([
  {id:1,name:"Orange"},
  {id:2,name:"Mangue"},
  {id:3,name:"Banane"},
  {id:4,name:"Papaye"},
  {id:5,name:"Citron"},
])


const Roles = reactive<Option[]>([
  {id:2,name:'Responsable'},
  {id:3,name:'Controleur'},
  {id:4,name:'Agent'}
])

const optionsRadio = reactive([
  {id:1,name:'Homme'},
  {id:2,name:'Femme'},
  {id:3,name:'Bisexuelle'},
  {id:4,name:'Autre'}
])
const projetAttributs = ['nom', 'description', 'debut', 'fin', 'objectifGlobaux', 'budgetNational', 'pret', 'couleur', 'ville', 'bailleurId', 'tauxEngagement']
const inputs = ref<FormData[]>([
  { name: 'Nom du projet', key: "nom", type: 'text', placeholder: "Nom du projet", data: '', required: true, errors: [] },
  { name: 'Prêt', type: 'number', key: "pret", placeholder: "", data: '', required: true, errors: [] },
  { name: 'Budget Nationnal', key: "budgetNational", type: 'number', placeholder: "", data: '', required: true, errors: [] },
  { name: 'Date début', key: "debut", type: 'date', placeholder: "", data: '', required: true, },
  { name: 'Date fin', type: 'date', key: "fin", placeholder: "", data: '', required: true, errors: [] },
  { name: 'Couleur', type: 'color', key: "couleur", placeholder: 'Choississez une couleur',data: '', required: true, errors: [] },
  { name: 'couverture du projet', type: 'file', placeholder: 'Choississez une couverture', isImage: true,  data: '', required: true, errors: [] },
  { name: 'Pièce jointe', type: 'file', placeholder: 'televerser des fichiers', isSelect: false, isImage: false,  data: '', required: false, errors: [] },
  { name: 'Objectifs specifiques', key: "objectifSpecifique", type: 'text', placeholder: 'Definir les objectifs', data: '', required: false, errors: [] },
  { name: 'Taux engagement', key: "tauxEngagement", type: 'text', placeholder: 'Taux engagement', data: '', required: false, errors: [] },
  { name: 'Description', key: "description", placeholder: 'Description du projet', isTextArea: true, data: '', required: false, errors: [] },
  { name: 'Objectifs globaux', key: "objectifGlobaux", placeholder: '', isTextArea: true, data: '', required: false, errors: [] },
  { name: 'Votre fruits preferé',key:"fruits", placeholder: '', isCheckbox:true, data: [], options: optionsCheckbox, value: 'name',position:'horizontal', required: false, errors: [] },
  { name: 'Votre genre',key:"genre", data: '', options: optionsRadio,isRadio:true,  value: 'name',position:'vertical', required: false, errors: [] },
  { name: 'Profil',key:"role", placeholder: '', isSelect:true, data: [], options: Roles,  required: false, errors: [] },
])
const cols = ref<number>(2)

function getFiles(files:FileList) {
  console.log(files)
}

function getImage(image: FileList) {
  console.log(image)
}


function sendForm() {
  const data = extractFormData(inputs.value,projetAttributs)
  inputs.value = resetForm(inputs.value)
  console.log(inputs.value,data)
}
</script>


