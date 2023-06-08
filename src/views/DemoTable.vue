<template>
  <div class="container mx-auto py-6">
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">#</th>
                  <th scope="col" class="px-6 py-4">First</th>
                  <th scope="col" class="px-6 py-4">Last</th>
                  <th scope="col" class="px-6 py-4">Email</th>
                  <th scope="col" class="px-6 py-4">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(user,index) in users" :key="index"
                  @click="toggleClick(user)"
                  :class="{'bg-green-500 text-white':user.isActive}"
                  class="border-b transition duration-300 ease-in-out cursor-pointer">
                  <td class="whitespace-nowrap px-6 py-4 font-medium"> {{ index }} </td>
                  <td class="whitespace-nowrap px-6 py-4"> {{ user.name }} </td>
                  <td class="whitespace-nowrap px-6 py-4"> {{ user.username }} </td>
                  <td class="whitespace-nowrap px-6 py-4"> {{ user.email }} </td>
                  <td class="whitespace-nowrap px-6 py-4"> {{ user.phone }} </td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <pre>
      {{ users }}
    </pre>
    <div class="py-2 flex justify-end">
      <span class="font-semibold">{{ elementClicked.length }} selectionnés / {{ users.length }} totals </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref ,computed} from 'vue'


const users = ref([
	{
		"id": 1,
		"name": "Leanne Graham",
		"username": "Bret",
		"email": "Sincere@april.biz",
		"phone": "1-770-736-8031 x56442",
		"isActive": false
	},
	{
		"id": 2,
		"name": "Ervin Howell",
		"username": "Antonette",
		"email": "Shanna@melissa.tv",
		"phone": "010-692-6593 x09125",
    "isActive": false
	},
	{
		"id": 3,
		"name": "Clementine Bauch",
		"username": "Samantha",
		"email": "Nathan@yesenia.net",
		"phone": "1-463-123-4447",
		"isActive": false
	},
	{
		"id": 4,
		"name": "Patricia Lebsack",
		"username": "Karianne",
		"email": "Julianne.OConner@kory.org",
		"phone": "493-170-9623 x156",
    "isActive": false
		
	},
	{
		"id": 5,
		"name": "Chelsey Dietrich",
		"username": "Kamren",
		"email": "Lucio_Hettinger@annie.ca",
		"phone": "(254)954-1289",
    "isActive": false
		
	},
	{
		"id": 6,
		"name": "Mrs. Dennis Schulist",
		"username": "Leopoldo_Corkery",
		"email": "Karley_Dach@jasper.info",
		"phone": "1-477-935-8478 x6430",
    "isActive": false
		
	},
	{
		"id": 7,
		"name": "Kurtis Weissnat",
		"username": "Elwyn.Skiles",
		"email": "Telly.Hoeger@billy.biz",
		"phone": "210.067.6132",
    "isActive": false
	
	},
	{
		"id": 8,
		"name": "Nicholas Runolfsdottir V",
		"username": "Maxime_Nienow",
    "email": "Chaim444_McDermott@dana.io",
		"phone": "586.493.6943 x140",
    "isActive": false
	},
	{
		"id": 9,
		"name": "Glenna Reichert",
		"username": "Delphine",
		"email": "Chaim_McDermott@dana.io",
		"phone": "(775)976-6794 x41206",
		"isActive": false
	},
	{
		"id": 10,
		"name": "Clementina DuBuque",
		"username": "Moriah.Stanton",
		"email": "Rey.Padberg@karina.biz",
		"phone": "024-648-3804",
		"isActive": false
	}
]


)


const toggleClick = (data:any) => {
  
  users.value.forEach((user) => {
    if(user.id === data.id) {
      user.isActive = !user.isActive
    }
  })

}

const elementClicked = computed(() => {
  return users.value.filter((user) => user.isActive === true)
})













</script>

<style scoped>

</style>