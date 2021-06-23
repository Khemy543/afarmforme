<template>
  <ol class="breadcrump-last-child">
    <li>
        <nuxt-link to="/">
            <span>Home</span>
        </nuxt-link>
    </li>
    <span>/</span>
    <li
      v-for="(crumb, index) in crumbs"
      :key="index"
      property="itemListElement"
      typeof="ListItem"
    >
      <nuxt-link property="item" typeof="WebPage" :to="crumb.path" v-if="isNaN(crumb.title)">
        <span class="mr-1 font-semibold text:sm lg:text-md capitalize" property="name">{{
            crumb.title
        }}</span>
        <span v-if="index !== crumbs.length-1">/</span>
      </nuxt-link>
      <meta property="position" :content="index + 2" />
    </li>
  </ol>
</template>

<script>

  export default {
    props: {
      title: {
        type: String,
        default: null
      }
    },

    computed: {
      crumbs() {
        const fullPath = this.$route.fullPath
        const params = fullPath.startsWith('/')
          ? fullPath.substring(1).split('/')
          : fullPath.split('/');
        const crumbs = []
        let path = '';
        /* params = params.split('#')[0] */
        params.forEach((param, index) => {
          path = `${path}/${param}`
          const match = this.$router.match(path)
          if (match.name !== null) {
            crumbs.push({
              title: param.split('#')[0].replace(/-|\?.*$/g, ' '),
              ...match
            })
          }
        })
        return crumbs
      }
    }
  }
</script>
<style scoped>
  ol {
    list-style: none;
  }
  li {
    display: inline;
  }
  
  ol li:last-child a {
    opacity: 0.5 !important;
  }
  span {
    font-size: 25px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
  }
</style>
