import { signal, effect, derived } from './signals.js'

const btn = document.querySelector('button')
btn.addEventListener('click', () => count.value++)

const count = signal(0)
const double = derived(() => count.value * 2)

effect(() => {
	btn.innerText = count.value
})

effect(() => {
	if (count.value > 10) {
		console.log('dangerously high')
		count.value = 0
	}
})

effect(() => console.log(double.value))

/*
import { observable } from './observable.js'

const btn = document.querySelector('button')
btn.addEventListener('click', () => counter.increment())

const counter = observable(0)

counter.subscribe((count) => {
	btn.innerText = count
})

const unsubscribe = counter.subscribe((count) => {
	console.log(count)
})

unsubscribe()
*/
