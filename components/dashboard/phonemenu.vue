<template>
  <nav>
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="toggleSideBar"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="toggleSideBar"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="
        transform
        top-0
        left-0
        w-64
        bg-white
        fixed
        h-full
        overflow-auto
        ease-in-out
        transition-all
        duration-300
        z-30
      "
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <span
        @click="toggleSideBar"
        class="flex w-full items-center p-4 border-b"
      >
        <nuxt-link to="/">
            <img src="~/static/img/logo-two.png" />
        </nuxt-link>
      </span>
      <!-- start link -->
      <ul class="side-nav mt-10 px-2">
        <nuxt-link
          title="Dashboard"
          to="/user"
          class="flex items-center py-3 px-4 nav-item"
        >
          <i class="fa fa-th-large mr-3" />
          <span>Dashboard</span>
        </nuxt-link>

        <nuxt-link
          to="/user/my-farms"
          title="Farm store"
          class="flex items-center py-3 px-4 mt-2 nav-item"
        >
          <i class="fa fa-pagelines mr-3" />
          <span>my Farms</span>
        </nuxt-link>

        <nuxt-link
          to="/user/calendar"
          title="Transactions"
          class="flex items-center py-3 mt-2 px-4 nav-item"
        >
          <i class="fa fa-calendar-check-o mr-3" />
          <span>Calendar</span>
        </nuxt-link>

        <nuxt-link
          to="/user/transactions"
          title="Support"
          class="flex items-center py-3 mt-2 px-4 nav-item"
        >
          <i class="fa fa-bar-chart-o mr-3" />
          <span>Transactions</span>
        </nuxt-link>

        <nuxt-link
          to="/user/monitor"
          title="Settings"
          class="flex items-center py-3 mt-2 px-4 nav-item"
        >
          <i class="fa fa-desktop mr-3" />
          <span>Monitor</span>
        </nuxt-link>

        <nuxt-link
          to="/user/weather"
          title="Settings"
          class="flex items-center py-3 mt-2 px-4 nav-item"
        >
          <i class="fa fa-cloud mr-3" />
          <span>Weather</span>
        </nuxt-link>

        <nuxt-link
          to="/user/messages"
          title="Settings"
          class="flex items-center py-3 mt-2 px-4 nav-item"
        >
          <i class="fa fa-comments-o mr-3" />
          <span>Messages</span>
        </nuxt-link>

        <nuxt-link
          to="/user/inventory"
          title="Settings"
          class="flex items-center py-3 mt-2 px-4 nav-item"
        >
          <i class="fa fa-briefcase mr-3" />
          <span>Inventory</span>
        </nuxt-link>

        <nuxt-link
          to="/user/farm-library"
          title="Settings"
          class="flex items-center py-3 mt-2 px-4 nav-item"
        >
          <i class="fa fa-book mr-3" />
          <span>Farm Library</span>
        </nuxt-link>
      </ul>
    </aside>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      isOpen: "isOpen",
    }),
  },

  methods: {
    toggleSideBar() {
      this.$store.dispatch("toggleSideBar");
    },
  },
};
</script>

<style scoped>
.nuxt-link-exact-active{
  border-radius: 16px;
  background : rgba(32, 110, 0, 0.1);
  color:#206e00 !important;
}

.nav-item {
    color: #767676;
}
</style>