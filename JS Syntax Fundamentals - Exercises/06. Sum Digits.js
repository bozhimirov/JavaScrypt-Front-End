function sumDigits(num){
	let sum = 0
	while (num > 0) {
		let lastDigit = num % 10;
		sum += lastDigit;
		num = Math.trunc(num / 10);
	}
	console.log(sum)
}