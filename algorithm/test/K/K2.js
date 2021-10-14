/*
    카카오 스포츠 경기

    어피치 왕국 각 선수 1, 2, 3으로 증가하는 고유 공격력 부여되있다.

    처음 팀에 x공격력 가진 선수 한 명.  
*/

function solution(power, person) {   
    let attacker = [];
    const queue = [];
    queue.push(power);

    // for(let k=0; k<person; k++) {
        power = queue.shift();
        let tmpPower = 1;
        for(let i=1; i<=power; i++) {
            tmpPower *= i;
        }
        queue.push(tmpPower);
    }
}
console.log(solution(4, 8));