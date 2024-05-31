export function observable(value) {
	const subscribers = new Set()

	return {
		increment() {
			value++
			this.update(value)
		},
		subscribe(fn) {
			subscribers.add(fn)
			return () => subscribers.delete(fn)
		},
		update(value) {
			subscribers.forEach((fn) => fn(value))
		},
	}
}
