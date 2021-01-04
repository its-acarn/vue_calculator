import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallowMount(App);
	});

	it('enterNum changes running total', () => {
		wrapper.vm.previousTotal = 4;
		wrapper.vm.add('5');
		expect(wrapper.vm.runningTotal).to.equal(9);
	});

	it('should be able to add four plus one', () => {
		wrapper.vm.previousTotal = 4;
		wrapper.vm.add('1');
		expect(wrapper.vm.runningTotal).to.equal(5);
	});
});
