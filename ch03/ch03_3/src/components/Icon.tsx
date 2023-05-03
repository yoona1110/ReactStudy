import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";

type ReactSpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export type IconProps = ReactSpanProps & {
  // Icon 컴포넌트에 name, style 속성 추가
  name: string;
  //   // style은 선택 속성이니까 앞에 ? 추가
  //   style?: CSSProperties;
};

// 매개변수 props는 변수이므로 비구조화 할당 구문을 적용할 수 있음 - ({name})
export const Icon: FC<IconProps> = ({
  name,
  className: _className,
  ...props
}) => {
  const className = ["material-icons", _className].join(" ");
  return (
    <span {...props} className={className}>
      {" "}
      {name}{" "}
    </span>
  );
};
