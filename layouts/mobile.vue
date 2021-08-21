<template>
  <v-app class="mobile">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      width="100%"
      class="drawer tw-bg-blue-dark-lighten"
    >
      <div class="">
        <div class="tw-grid tw-grid-cols-3 tw-items-center tw-py-4">
          <v-btn
            text
            class="
              tw-text-3xl
              tw-text-gray-800
              tw-font-sans
              tw-font-thin
              tw-justify-self-start
              hover:tw-bg-opacity-0
            "
            @click="drawer = !drawer"
          >
            X
          </v-btn>
          <div>
            <v-img height="55" width="85" src="/logo.png"></v-img>
          </div>
        </div>

        <v-list class="tw-mt-12 tw-text-center">
          <v-list-item exact router to="/">
            <v-list-item-content>
              <v-list-item-title class="tw-text-2xl"> Home </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                class="tw-text-2xl"
                @click="showSubAbout = true"
              >
                About >
              </v-list-item-title>
              <v-dialog
                v-model="showSubAbout"
                fullscreen
                hide-overlay
                transition="scroll-x-reverse-transition"
                scrollable
              >
                <div
                  class="
                    tw-h-full
                    tw-w-full
                    tw-bg-blue-dark-lighten
                    tw-grid
                    tw-items-center
                    tw-justify-center
                  "
                >
                  <v-list class="tw-bg-transparent tw-text-center">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title
                          class="tw-text-gray-800"
                          @click="showSubAbout = false"
                        >
                          &#60; Back
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item exact router to="/uppercase">
                      <v-list-item-content>
                        <v-list-item-title class="tw-text-2xl">
                          Uppercase
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item exact router to="/founders-story">
                      <v-list-item-content>
                        <v-list-item-title class="tw-text-2xl">
                          Founder's Story
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item exact router to="/team">
                      <v-list-item-content>
                        <v-list-item-title class="tw-text-2xl">
                          Team
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </div>
              </v-dialog>
            </v-list-item-content>
          </v-list-item>
          <v-list-item exact router to="/testimonials">
            <v-list-item-content>
              <v-list-item-title class="tw-text-2xl">
                Testimonials
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item exact router to="/case-studies">
            <v-list-item-content>
              <v-list-item-title class="tw-text-2xl">
                Case Studies
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
    <v-app-bar app flat hide-on-scroll height="80" class="appbar">
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
      drawer: false,
      showSubAbout: false,
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
.v-toolbar__content {
  justify-content: space-between !important;
  padding: 4px 16px !important;
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
