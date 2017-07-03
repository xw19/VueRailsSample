/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> and
// <%= stylesheet_pack_tag 'hello_vue' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.js'
import VueTurbolinksAdapter from 'vue-turbolinks'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    mixins: [ VueTurbolinksAdapter ],
    data: {
      message: 'Hello from Vue and Rails'
    }
  })

  console.log(app)
})
