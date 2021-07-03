<template>
    <header class="w-full items-center gray-background py-2 px-4 lg:px-32 flex">
        <div class="w-1/2">
             <button
                @click="openSideBar"
                class="header-text focus:outline-none sm:hidden"
            >
                <i  :class="!isOpen ? 'fa fa-bars' : 'fa fa-times'"></i>
            </button>
        </div>
        <div class=" relative w-1/2 flex justify-end">
            <ul class="flex lg:flex-row list-none ml-auto">
                <li class="nav-item">
                    <span class="mx-3 py-2 flex items-center header-text hover:opacity-75">
                        <i class="fa fa-bell-o" />
                    </span>
                </li>
                <li class="nav-item">
                    <span class="mx-3 py-2 flex items-center header-text hover:opacity-75">
                        <i class="fa fa-user" />
                    </span>
                </li>
            </ul>
        </div>
    </header>
</template>
<script>
import { mapGetters } from 'vuex' 
export default {
    data(){
        return{
            
        }
    },

    computed : {
        ...(mapGetters({
            isOpen : 'isOpen'
        }))
    },

    methods : {
        openSideBar(){
            this.$store.dispatch('toggleSideBar')
        }
    }
}
</script>