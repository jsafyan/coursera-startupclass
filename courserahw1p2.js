/****************************************
        FIND THE FIRST 100 PRIMES
*****************************************/

var fs = require('fs');
//The output filename
var outfile = "primes.txt";
var out = "";
//A list of the prime numbers
var primes = [];
//The single digit primes
primes.push(2,3,5,7);
var i = 9;


//Yes, this is slow, but it is fast enough for small n.
while (primes.length < 100) {
	//Quick check to see if the number is divisible by any of 
	//the single-digit primes
	if (i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
		//If not, check to make sure it doesn't have larger prime factors
		for (var j = 0; j < primes.length; j++) {
			if (i % primes[j] != 0) {
				//If it doesn't have prime factors and all of the factors have
				//been checked, add it to the array.
				if (j == primes.length -1) {
					primes.push(i);
					console.log(i);
				} 
			//If any of the prime checks fail, break from the loop
			} else {
				break;
			}
		}
	}
	//Increment by 2 (only check odd numbers)
	i += 2;
}

//Join the array with a comma to make it comma-delimited
out = primes.join(",");

//Synchronously write the string to the output file
fs.writeFileSync(outfile, out);