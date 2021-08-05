/*
    문제
    need, plan 파라미터 2개가 있는데
    need에 있는 과목순서가 plan에 그대로 순서에 있어야 한다. 떨어져도 상관없고.
    잘됬다면 yes, 아니면 no

    풀이
    need에 있는 것들을 배열화해서 queue에 넣어놓는다.

    plan에 있는 것들을 하나씩 need와 비교한다.
    만약 plan에서 꺼낸것이 need에 있다면
    need에서 shift()한다.
    만약 x와 다르다면 바로 return "NO"한다.

    ✨ 즉, 같은 요소 순서만 비교하면 된다.
    plan에 있는 것들을 하나씩 꺼내면서 queue에 include한지 검사해서 include하다면 꺼낸 요소가 queue.shift한 것과 같은지 비교해서 다르면 바로 return false;
*/