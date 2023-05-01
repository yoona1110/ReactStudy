// import * as D from "../data";

// TailwindCSS: PostCSS 플러그인 방식으롣 동작하는 진보된 CSS 프레임워크
/* CSS 관점에서 브라우저 호환성 문제란?
= CSS 표준: linear-gradient / 구글 크롬, 애플 사파리 브라우저: -webkit-linear-gradient / MS 브라우저: -ms-linear-gradient으로 사용해야 하는 문제
-> autoprefixer: 대표적인 PostCSS 플러그인으로 이런 벤더 접두사 문제를 해결해 주는 역할을 함
*/
export default function TailwindCSS() {
  return (
    // 바탕색은 불투명도가 70%인 검정색
    // 무채색은 접두사-색상명/불투명도(얘는 생략 가능) / 유채색은 접두사-색상이름-채도/불투명도(얘는 생략 가능)
    <div className="bg-black/70">
      <p className="w-full p-4 text-3xl text-white"> Tailwindcss </p>
      {/* line-clamp-3: 텍스트가 3줄을 넘으면 안됨 */}
      {/* <p className="italic text-grey-50 line-clamp-3"> {D.randomParagraphs(10)} </p> */}
      <button className="btn btn-primary" style={{ textTransform: "none" }}>
        Button
      </button>
    </div>
  );
}
