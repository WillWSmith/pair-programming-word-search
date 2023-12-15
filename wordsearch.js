const wordSearch = (letters, word) => {
    // Check if the matrix is null, has no rows, or the rows have no columns
    if (word === '' || !letters || letters.length === 0 || letters[0].length === 0) {
        return false;
    }

    // Join each row to form a string and check horizontally
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    // Check vertically
    for (let i = 0; i < letters[0].length; i++) {
        const verticalJoin = letters.map(ls => ls[i]).join('');
        if (verticalJoin.includes(word)) return true;
    }

    // Return false if the word is not found in either direction
    return false;
};


module.exports = wordSearch