import { defineStore } from "pinia";

export const useStoreTask = defineStore('tasks', {
    state() {
        return {
            tasks: []
        }
    },
    actions: {
        removeTask(id) {
            if (confirm("Voulez-vous supprimer cette taches?")) {
                return this.tasks.splice(this.tasks.findIndex(task => task.id === id), 1);
            }
        },

        filterTask(value) {
            return this.tasks.filter(task => task.completed == value)
        }
    },
    getters: {
        completedTasks(state) {
            return state.tasks.filter(task => task.completed).length;
        },
        pendingTask() {
            return this.tasks.length - this.completedTasks;
        },
        toDoTask() {
            return this.tasks.length;
        },
        totalTask() {
            return this.tasks.length
        }
    },

});