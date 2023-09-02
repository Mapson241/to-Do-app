<template>
  <div class="flex-col space-y-4 items-center justify-center px-4 bg-white-200">
    <div class="w-full max-w-sm p-4 bg-yellow-300 rounded-md shadow-md">
      <h2 class="text-md text-white">Pending : {{ userStore.pendingTask }}</h2>
    </div>
    <div class="w-full max-w-sm p-4 bg-green-500 rounded-md shadow-md">
      <h2 class="text-md text-white">Done : {{ userStore.completedTasks }}</h2>
    </div>
    <div class="w-full max-w-sm p-4 bg-red-400 rounded-md shadow-md">
      <h2 class="text-md text-white">Total : {{ userStore.totalTask }}</h2>
    </div>

    <div class="w-full max-w-sm p-4 bg-pink-500 rounded-md shadow-md">
      <router-link to="/add">
        <h2 class="text-md text-white">Ajouter une tache</h2>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useStoreTask } from "../store/tasks";
const userStore = useStoreTask();
</script>
