import Vue from 'vue/dist/vue.min.js';
import singleSpaVue from 'single-spa-vue';
import DemoGrid from './demo-grid.component.js';

const vueLifecycles = singleSpaVue({
	Vue,
	appOptions: {
		el: '#vue-app',
		template: `
			<div id="vue-app">
				<form id="search">
					<div class="row">
						<div class="input-field col s12">
							<div class='input-field'>
								<input name="query" v-model="searchQuery">
								<label class="active" for="query">Search</label>
							</div>
						</div>
					</div>
				</form>
				<demo-grid
					 :data="gridData"
					 :columns="gridColumns"
					 :filter-key="searchQuery">
				</demo-grid>
			</div>
		`,
		components: {
			'demo-grid': DemoGrid,
		},
		data: {
			searchQuery: '',
			gridColumns: ['name', 'power'],
			gridData: [
				{ name: 'Chuck Norris', power: Infinity },
				{ name: 'Bruce Lee', power: 9000 },
				{ name: 'Jackie Chan', power: 7000 },
				{ name: 'Jet Li', power: 8000 }
			]
		}
	}
});

export const bootstrap = [
	vueLifecycles.bootstrap,
];

export const mount = [
	vueLifecycles.mount,
];

export const unmount = [
	vueLifecycles.unmount,
];
