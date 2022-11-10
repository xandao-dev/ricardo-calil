import { defineStore } from 'pinia';

export const useSidebar = defineStore('sidebar', {
    state: () => ({
        isOpen: false,
    }),
    actions: {
        toggleOpen() {
            this.isOpen = !this.isOpen;
        },
    },
});
