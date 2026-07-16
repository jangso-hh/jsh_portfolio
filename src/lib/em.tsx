import { Fragment, type ReactNode } from "react";

/**
 * 데이터 문자열의 경량 마크업을 JSX로 변환한다.
 *   **텍스트**  → <b>텍스트</b>            (문맥별 색상은 CSS가 결정)
 *   ==텍스트==  → <b class="em-teal">…</b> (히어로의 민트 강조)
 *   \n          → <br />
 */
export function em(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|==[^=]+==|\n)/g);
  return parts.map((part, i) => {
    if (part === "\n") return <br key={i} />;
    if (part.startsWith("**") && part.endsWith("**")) {
      return <b key={i}>{part.slice(2, -2)}</b>;
    }
    if (part.startsWith("==") && part.endsWith("==")) {
      return (
        <b key={i} className="em-teal">
          {part.slice(2, -2)}
        </b>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
