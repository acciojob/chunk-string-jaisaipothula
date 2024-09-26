function chunkString(str, length) {
    // If the input string is null, return an empty array
    if (str === null) {
        return [];
    }

    // Initialize an array to hold the chunks
    const chunks = [];

    // Loop through the string, incrementing by the chunk length
    for (let i = 0; i < str.length; i += length) {
        // Slice the string from the current index to the current index + length
        chunks.push(str.slice(i, i + length));
    }

    return chunks;
}

// Example usage
console.log(chunkString("Hello, world!", 5)); // ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2));          // ["12", "34", "5"]
console.log(chunkString("abc", 5));            // ["abc"]
console.log(chunkString(null, 3));             // []
