<template>
    <aside class="relative bg-white h-screen w-64 hidden sm:block shadow-xl">
        <div  class=" mt-5 pl-6">
            <nuxt-link to="/">
                <img src="~/static/img/logo-two.png" />
            </nuxt-link>
        </div>
        <nav class=" mt-28">
            <ul class="side-nav px-6">
                <nuxt-link title="Dashboard" to="/user" class="flex items-center py-2 px-4  nav-item">
                    <i class=" fa fa-th-large mr-3" />
                    <span>Dashboard</span>
                </nuxt-link>

                <nuxt-link to="/user/my-farms" title="Farm store" class="flex items-center py-2 px-4 mt-2  nav-item">
                    <i class=" fa fa-pagelines mr-3"/>
                    <span>my Farms</span>
                </nuxt-link>

                <nuxt-link to="/user/calendar" title="Transactions" class="flex items-center py-2 mt-2 px-4 mt-64nav-item">
                    <i class="fa fa-calendar-check-o mr-3" />
                    <span>Calendar</span>
                </nuxt-link>

                <nuxt-link to="/user/transactions" title="Support" class="flex items-center py-2 mt-2 px-4 nav-item">
                    <i class="fa fa-bar-chart-o mr-3" />
                    <span>Transactions</span>
                </nuxt-link>
                
                <nuxt-link to="/user/monitor" title="Settings" class="flex items-center py-2 mt-2 px-4 nav-item">
                    <i class="fa fa-desktop mr-3" />
                    <span>Monitor</span>
                </nuxt-link>
                
                <nuxt-link to="/user/weather" title="Settings" class="flex items-center py-2 mt-2 px-4 nav-item">
                    <i class="fa fa-cloud mr-3" />
                    <span>Weather</span>
                </nuxt-link>
                
                <nuxt-link to="/user/messages" title="Settings" class="flex items-center py-2 mt-2 px-4 nav-item">
                    <i class="fa fa-comments-o mr-3" />
                    <span>Messages</span>
                </nuxt-link>
                
                <nuxt-link to="/user/inventory" title="Settings" class="flex items-center py-2 mt-2 px-4 nav-item">
                    <i class="fa fa-briefcase mr-3" />
                    <span>Inventory</span>
                </nuxt-link>
                
                <nuxt-link to="/user/farm-library" title="Settings" class="flex items-center py-2 mt-2 px-4 nav-item">
                    <i class="fa fa-book mr-3" />
                    <span>Farm Library</span>
                </nuxt-link>

            </ul>
        </nav>
    </aside>
</template>
<script>
export default {

}
</script>
<style scoped>
.nuxt-link-exact-active{
  border-radius: 16px;
  background : rgba(32, 110, 0, 0.1);
  color:#206e00;
}

</style>