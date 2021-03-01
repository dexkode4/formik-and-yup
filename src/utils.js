export const encodePwd = (string) => {
    const lettersMap = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    }
    const alphabetArray = Object.keys(lettersMap);
    let encoded = '';
    const SIZE = alphabetArray.length;
    let regex = /^[a-z]+$/i;

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (regex.test(char)) {
            if (char === char.toUpperCase()) {
                char = char.toLowerCase()
                encoded += alphabetArray[SIZE - lettersMap[char]].toUpperCase()
            }
            else {           
                encoded += alphabetArray[SIZE - lettersMap[char]]
            }
        }
        else {
            encoded += char;
        }
    }
    return encoded
}
