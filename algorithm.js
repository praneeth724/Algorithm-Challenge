// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 2. Find the second-largest number in an array
function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)]; // Remove duplicates
    if (uniqueArr.length < 2) return null;
    uniqueArr.sort((a, b) => b - a); // Sort in descending order
    return uniqueArr[1];
}

// 3. Check if a string is a palindrome
function isPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Test cases
console.log(reverseString("hello")); // Output: "olleh"
console.log(secondLargest([10, 20, 4, 45, 99, 99])); // Output: 45
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
