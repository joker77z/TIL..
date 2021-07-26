// getSound 함수를 이용해서 강아지 소리나 고양이 소리를 알고 싶다. 어떻게 해야 될까?
// + 만약 비어있다면? useful이 아니고 동물을 잘못입력했따는 문구를 출력하자.

/*
const getSound = (animal) => {
    const animalSound = {
        고양이: '야옹',
        멍멍이: '멍멍',
    }

    return animalSound[animal] || '...?';
}

console.log(getSound('고양이'));
*/


// + bonus ===========================================================
// 함수로 실행되게 하기.
// + 만약 비었다면?
const getSound = (animal) => {
    const animals = {
        개() {
            return '멍멍'  
        },
        고양이() {
            return '야옹'
        },
    }
    if(!animals[animal]) {
        return '없는 동물이거나 비어있습니다.';
    }
    return animals[animal]();
}

console.log(getSound('고양이2'))