function Observer(data) {
	this.data = data
	this.init(data)
}
Observer.prototype.init = function(obj) {
	let val
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			val = obj[key]
			if (typeof val === 'object') {
				new Observer(val)
			}
			this.convert(key, val)
		}
	}
}
Object.prototype.convert = function(key, val) {
	Object.defineProperty(this.data, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			return val
		},
		set: function(newVal) {
			if (newVal === val) {
				return
				val = newVal
			}
		}
	})
}

let app1 = new Observer({
	name: 'youngwind',
	age: 25
})
let app2 = new Observer({
	university: 'bupt',
	major: 'computer'
})
