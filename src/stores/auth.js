import { defineStore } from "pinia";

export const useAuthStore = defineStore( 'auth', {

    state: () => ({
        user: null,
        isUserValid: null
    }),

    actions: {

         setUsername(value){
            this.user = value;
        },

        setUserValid(){
            this.isUserValid = true
        }
    }
})