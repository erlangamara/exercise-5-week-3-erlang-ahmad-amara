function palindrome(kata){
    var result = false;
    var terbalik = ''
    for (i = kata.length - 1; i >= 0; i--){
        terbalik += kata[i];
    }

    if (kata === terbalik){
        result = true;
    }

    return result;
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false