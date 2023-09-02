<template>
  <div class="flex items-center justify-center h-screen px-9 bg-white-200">
    <div class="w-full max-w-sm p-9 bg-white rounded-md shadow-md">
      <form class="mt-4 space-y-4" @submit="send">
        <input
          id="nom"
          v-model="name"
          type="text"
          placeholder="tasks"
          class="block w-full mt-1 border-gray-200 rounded-md focus:border-gray-600 focus:ring focus:ring-opacity-40 focus:ring-gray-500"
        />
        <textarea
          id="message"
          v-model="description"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="description"
        ></textarea>

        <div class="mt-6">
          <button
            id="send"
            type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-green-600 rounded-md focus:outline-none hover:bg-gray-500"
          >
            {{ props.id == null ? "Send" : "Update" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStoreTask } from "../store/tasks";
import { v4 as uuidv4 } from "uuid";
import router from "../router/index";
const userStore = useStoreTask();
const name = ref("");
const description = ref("");
const props = defineProps(["id"]);

onMounted(() => {
  userStore.tasks.forEach((task) => {
    if (task.id === props.id) {
      name.value = task.name;
      description.value = task.description;
    }
  });
});

function send() {
  userStore.tasks.push({
    id: uuidv4(),
    name: name.value,
    description: description.value,
  });

  name.value = "";
  description.value = " ";
  router.push("/");
}

function update() {
  userStore.tasks.forEach((task) => {
    if (task.id === props.id) {
      task.name = name.value;
      task.description = description.value;
    }
  });
  router.push("/");
}
</script>
