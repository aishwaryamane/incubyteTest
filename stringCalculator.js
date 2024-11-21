export default add=(numbers)=> {
    if (!numbers) return 0;
  
    // Check for custom delimiter
    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const delimiterIndex = numbers.indexOf('\n');
      delimiter = numbers.slice(2, delimiterIndex);
      numbers = numbers.slice(delimiterIndex + 1);
    }
  
    // Split the string by delimiter (comma, newline, or custom delimiter)
    const regex = new RegExp(`[${delimiter}\n]`);
    const numberArray = numbers.split(regex);
  
    let sum = 0;
    let negativeNumbers = [];
  
    // Calculate the sum and check for negative numbers
    numberArray.forEach(num => {
      const number = parseInt(num, 10);
      if (isNaN(number)) return;  // Skip any non-numeric values
      if (number < 0) {
        negativeNumbers.push(number);
      } else {
        sum += number;
      }
    });
  
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`);
    }
  
    return sum;
  }
  
console.log(`Test Result: ${add("1,2,3")}`);
  