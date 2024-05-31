let subscriber = null

export function signal(value) {
	const subscriptions = new Set()

	return {
		get value() {
			if (subscriber) {
				subscriptions.add(subscriber)
			}
			return value
		},
		set value(updated) {
			value = updated
			subscriptions.forEach((fn) => fn())
		},
	}
}

export function effect(fn) {
	subscriber = fn
	fn()
	subscriber = null
}

export function derived(fn) {
	const derived = signal()
	effect(() => {
		derived.value = fn()
	})
	return derived
}
