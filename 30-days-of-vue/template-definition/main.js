let singleLineTemplate = {
  template: '<div class="card"><header class="card-header\
  card-header-title">{{ message }}</header></div>',
  props: ['message']
}

let multiLineTemplate = {
  template: `
    <div class="card">
      <header class="card-header card-header-title">
        {{ message }}
      </header>
    </div>
   `,
  props: ['message']
}

new Vue({
  el: '#app',
  data : {
    message: 'Greeetings',
  },
  components: {
    // 'single-line-template': singleLineTemplate
    'inline-temp': multiLineTemplate
  }
})