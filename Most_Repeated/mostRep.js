function mostRep() {
	let hash = {}

	let test = [3,4,4,4,4,4,4,6,6,6,1,1,4,4,4]
	for( i = 0; i < test.length; i++) {
		let num = test[i] 
		if( hash[num]) {
			// number exists already in the hash hash[2] = 1 + 1
			hash[num] += 1	 
		} else {
			// number not in the hash
			hash[num]
		}
	}

	//let stortedValue = 0
	//let storedKey = -1

	let stored = {
		key:0,
		value:-1
	}

	//let keysArray = Object.keys(hash)
	Object.keys(hash).forEach(key => {
		let value = hash[key]
		if (value > storted.value) {
			storted.value = value
			stored.key = key
		}
	})

	return stored.key
}