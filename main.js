// Write a function alphabetSoup that takes a single string parameter and returns the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

var alphabetSoup = function(str) {
	var subString = str.split('');
	subString.sort(function(a,b) {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});
	return subString.join('');
};

// Write a function vowelCount that takes a single string parameter and returns the number of vowels the string contains (ie. "All cows eat grass" would return 5).

var vowelCount = function(str) {
	var vowels = ['a','e','i','o','u'];
	var count = 0;
	var subString = (str.toLowerCase()).split('');
	for (var i=0; i<vowels.length; i++) {
		subString.filter(function(a) {
			(a === vowels[i]) ? count ++ : false;
		});
	}
	return count;
};
