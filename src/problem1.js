/**
 * @param {*} pobi
 * @param {*} crong
 * @returns
 * 예외 처리
 * 왼쪽 페이지가 1이거나 오른쪽 페이지가 400일 경우
 * 오른쪽 페이지 - 왼쪽 페이지 > 1
 *
 * 기능 구현
 * 1.각 자리 숫자를 더하는 함수 생성, 각 자리 숫자를 곱하는 함수 생성.
 * 2.오른쪽 페이지의 번호의 각 자리 숫자를 더한 값과 곱한 값중 큰 수를 구한다.
 * 3.1값과 2값중 큰 값을 자신의 점수로 정한다.
 * 4.점수가 큰 사람이 이긴다.
 *
 */
function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) return -1;
  if (pobi[0] === 1 || pobi[1] === 400 || crong[0] === 1 || crong[1] === 400)
    return -1;
}
module.exports = problem1;
