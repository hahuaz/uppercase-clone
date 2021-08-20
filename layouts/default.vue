<template>
  <v-app>
    <v-app-bar app flat hide-on-scroll height="180">
      <div class="tw-grid tw-grid-cols-3 tw-w-full">
        <div class="nav tw-flex tw-gap-6 tw-items-center">
          <nuxt-link to="/">Home</nuxt-link>
          <v-menu open-on-hover bottom offset-y>
            <template #activator="{ on, attrs }">
              <a
                v-bind="attrs"
                href="javascript:void(0)"
                :class="{
                  'nuxt-link-exact-active':
                    $route.path === '/uppercase' ||
                    $route.path === '/founders-story' ||
                    $route.path === '/team',
                }"
                v-on="on"
              >
                About
              </a>
            </template>

            <v-list color="blue-dark">
              <v-list-item>
                <v-list-item-title
                  ><nuxt-link to="/uppercase"
                    >Uppercase</nuxt-link
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><nuxt-link to="/founders-story"
                    >Founder's Story</nuxt-link
                  ></v-list-item-title
                > </v-list-item
              ><v-list-item>
                <v-list-item-title
                  ><nuxt-link to="/team">Team</nuxt-link></v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
          <nuxt-link to="/testimonials">Testimonials</nuxt-link>
          <nuxt-link to="/case-studies">Case Studies</nuxt-link>
        </div>
        <nuxt-link to="/" class="tw-justify-self-center tw-inline-block">
          <v-img
            height="120"
            width="190"
            contain
            position="center start"
            src="/logo.png"
          ></v-img>
        </nuxt-link>
      </div>
    </v-app-bar>

    <!-- don't use vuetify main layout. I prefer custom layout and make configuration via tailwind  -->
    <!-- don't wrap nuxt with v-main and v-container on layout for bakcground-image -->
    <main>
      <Nuxt />
    </main>
    <footer>
      <div class="tw-max-w-screen-xl tw-mx-auto">
        <div class="tw-container tw-mx-auto">
          <div class="tw-text-center tw-space-y-12">
            <p class="tw-text-xl">
              Copyright © 2020 Uppercase. All Rights Reserved. Designed by
              Uppercase.
            </p>
            <div class="tw-grid tw-grid-flow-col tw-gap-6 tw-justify-center">
              <a
                href="https://www.instagram.com/uppercasebrands/"
                target="__blank"
                class="tw-transition-all hover:tw-scale-110"
              >
                <v-icon x-large> mdi-instagram</v-icon>
              </a>
              <a
                href="https://www.facebook.com/uppercasebrands/"
                target="__blank"
                class="tw-transition-all hover:tw-scale-110"
              >
                <v-icon x-large> mdi-facebook</v-icon>
              </a>
              <a
                href="https://www.linkedin.com/company/uppercase-brands/"
                target="__blank"
                class="tw-transition-all hover:tw-scale-110"
              >
                <v-icon x-large> mdi-linkedin</v-icon>
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
    return {}
  },
}
</script>
<style>
.v-app-bar {
  background-color: transparent !important;
  transition: background-color 500ms ease-in-out 500ms !important;
}

.v-app-bar.v-app-bar--is-scrolled {
  @apply tw-bg-blue-dark !important;
}

.nav a,
.v-menu__content a {
  @apply tw-text-gray-50 tw-font-medium tw-text-xl !important;
}

.nav a.nuxt-link-exact-active {
  border-bottom: 1px solid white;
}
</style>
<style lang="scss" scoped>
::v-deep .v-toolbar__content {
  padding: 30px 50px;
}

footer {
  @apply tw-py-48;
  background-image: url('~/assets/image/footer.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
