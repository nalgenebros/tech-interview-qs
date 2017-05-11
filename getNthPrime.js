/*

++ Coding challenge as phone tech interview 
	 from company June @http://juneoven.com

Write the code for getNthPrime function
so that when a number gets passed in, the function
should return the prime number at that position

ex. Input				Output
			2						3
			3						5
			10					29

another example: [2, 3, 5, 7, 11 ... 47]
									1  2  3  4  5      15
 */
 


function getNthPrime(n) {

}


getNthPrime(pass_a_number_here);





/*
	ANSWER SECTION or AN APPROACH TO ANSWERING THIS CODING CHALLENGE


// a helper function to find if number is a prime
// returns true or false
function primeTester (n) {
  
  if(n < 2) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

primeTester(11);

function getNthPrime(n) {
  
  var memo = {};
  var count = 1;

  // this loop works where n gets subtracted ONLY if
  // current number or iteration is a prime number.
  // This will keep happening until 0 < n
  // Otherwise, j will keep on increasing to be tested
  // if j is currently a prime number
  for (var j = 1; 0 < n; j++) {
    if (primeTester(j)) {
      count = j;
      n--;
    }
  }
  return count;

}	

 */
