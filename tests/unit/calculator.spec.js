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
		wrapper.vm.add(5);
		expect(wrapper.vm.runningTotal).to.equal(9);
	});

	it('should be able to add four plus one', () => {
		wrapper.vm.previousTotal = 4;
		wrapper.vm.add(1);
		expect(wrapper.vm.runningTotal).to.equal(5);
	});

	it('should be able to subtract four from seven', () => {
		wrapper.vm.previousTotal = 7;
		wrapper.vm.subtract(4);
		expect(wrapper.vm.runningTotal).to.equal(3);
	});

	it('should be able to multiply three by fifteen', () => {
		wrapper.vm.previousTotal = 3;
		wrapper.vm.multiply(5);
		expect(wrapper.vm.runningTotal).to.equal(15);
	});

	it('should be able to divide twenty-one by seven', () => {
		wrapper.vm.previousTotal = 21;
		wrapper.vm.divide(7);
		expect(wrapper.vm.runningTotal).to.equal(3);
	});

	it('should be able to concatenate multiple number clicks', () => {
		wrapper.vm.numberClick(7);
		wrapper.vm.numberClick(7);
		wrapper.vm.numberClick(9);
		wrapper.vm.numberClick(0);
		expect(wrapper.vm.runningTotal).to.equal(7790);
	});

	it('should be able to chain multiple operations together', () => {
		wrapper.vm.numberClick(7);
		wrapper.vm.operatorClick('+');
		wrapper.vm.numberClick(9);
		wrapper.vm.operatorClick('-');
		wrapper.vm.numberClick(10);
		wrapper.vm.operatorClick('*');
		wrapper.vm.numberClick(4);
		wrapper.vm.operatorClick('/');
		wrapper.vm.numberClick(6);
		wrapper.vm.operatorClick('=');

		expect(wrapper.vm.runningTotal).to.equal(4);
	});

	// it('should be able to clear running total without changing previous total', () => {
	// 	wrapper.vm.numberClick(7);
	// 	wrapper.vm.numberClick(7);
	// 	wrapper.vm.numberClick(9);
	// 	wrapper.vm.numberClick(0);
	// 	expect(wrapper.vm.runningTotal).to.equal(7790);
	// });
});
