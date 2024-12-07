import { defineStore } from "pinia";

export const useAuthStore = defineStore( 'auth', {

    state: () => ({
        user: null,
        isUserValid: null,
        isUserLogged: null
    }),

    actions: {

         setUsername(value){
            this.user = value;
        },

        setIsUserLogged(){
            this.isUserLogged = true
        }
    },

    getters: {
        getIsUserLogged: (state) => state.isUserLogged
    }
})