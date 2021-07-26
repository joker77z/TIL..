// and =========================
// 앞: true일 때는 뒤가 뭐든 상관없이 뒤를 출력.
console.log('1' && '1') // 1(뒤)
console.log('1' && null) // null(뒤)

// 앞: false일 때는 뒤가 뭐든 상관없이 앞을 출력.
console.log(null && '1') // null(앞)
console.log(null && undefined) // null(앞)


// or ==============================
// 앞: true일 때는 뒤가 뭐든 상관없이 앞을 출력.
console.log('1' || '2') // 1(앞)
console.log('1' || null) // 1(앞)

// 앞: false일 때는 뒤가 뭐든 상관없이 앞을 출력.
console.log(null || '1'); // 1(뒤)
console.log(null || undefined); // undefined(뒤)