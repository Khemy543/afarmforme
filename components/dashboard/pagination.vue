<template>
    <div>
    <nav>
        <ul class="relative z-0 inline-flex -space-x-px shadow-sm" aria-label="Pagination">
            <li :class="!pagination.prev_link?'hidden':''" @click="loadData(pagination.prev_link)" class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 cursor-pointer hover:bg-gray-50">
                <p ><i class="fa fa-chevron-left" /></p>
            </li>
            <li v-for="n in pagination.last_page" :key="n" :class="pagination.current_page == n?' bg-orange-500 text-white':''"  class="relative inline-flex items-center px-4 py-2 text-sm font-bold border cursor-pointer border-gray-30 hover:bg-gray-50" @click="loadData(pagination.path_page + n )">
                <p>{{n}}</p>
            </li>
            <li :class="!pagination.next_link?'hidden':''" @click="loadData(pagination.next_link)" class="relative inline-flex items-center px-2 py-2 text-sm font-bold text-gray-800 bg-white border border-gray-300 cursor-pointer hover:bg-gray-50">
                <p><i class="fa fa-chevron-left" /></p>
            </li>
        </ul>
    </nav>
    </div>
</template>
<script>
export default {
    props:{
        pagination:{
            type:Object
        },
        loadData:{
            type: Function
        }
    },
    data(){
        return{

        }
    }
}
</script>
