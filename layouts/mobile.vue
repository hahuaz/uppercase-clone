<template>
  <v-app class="mobile">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app flat hide-on-scroll height="80">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link to="/">
        <div>
          <v-img height="55" width="85" src="/logo.png"></v-img>
        </div>
      </nuxt-link>
      <div></div>
    </v-app-bar>
    <Nuxt />
    <footer>
      <div class="tw-max-w-screen-xl tw-mx-auto">
        <div class="tw-container tw-mx-auto">
          <div class="tw-text-center tw-space-y-12">
            <p class="tw-text-lg">
              Copyright © 2020 Uppercase. All Rights Reserved. Designed by
              Uppercase.
            </p>
            <div class="tw-grid tw-grid-flow-col tw-gap-6 tw-justify-center">
              <a
                href="https://www.instagram.com/uppercasebrands/"
                target="__blank"
                class="tw-transition-all hover:tw-scale-110"
              >
                <v-icon large> mdi-instagram</v-icon>
              </a>
              <a
                href="https://www.facebook.com/uppercasebrands/"
                target="__blank"
                class="tw-transition-all hover:tw-scale-110"
              >
                <v-icon large> mdi-facebook</v-icon>
              </a>
              <a
                href="https://www.linkedin.com/company/uppercase-brands/"
                target="__blank"
                class="tw-transition-all hover:tw-scale-110"
              >
                <v-icon large> mdi-linkedin</v-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
    }
  },
}
</script>
<style lang="scss">
.v-application--wrap {
  * {
    // border: 1px solid red;
  }
}
.mobile {
  .v-toolbar__content {
    justify-content: space-between;
  }
}
</style>
<style lang="scss" scoped>
footer {
  @apply tw-py-8;
  background-image: url('~/assets/image/footer.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
