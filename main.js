// simplest way to make a global component in vue
let jumbotron = Vue.component('jumbotron', {
    // there needs to be a single HTML element that contains the rest of the component's template
    template: `
    <div class="jumbotron jumbotron-fluid">
	    <div class="container">
		    <h1 class="display-3">{{ header }}</h1>
		    <p class="lead">{{ text }}</p>
	    </div>
    </div>
    `,
    props: ['header', 'text'],
})


var mainVm = new Vue({
    // the main vm has an `el` property, because we mount it immediately after we create it
    el: '#app',
    data: {

    },
    components: {
    	jumbotron,
    }
})