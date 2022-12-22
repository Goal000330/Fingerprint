import clsx from "clsx";
interface Props {
  content?: string;
  className?: any;
  onClick?: () => void;
  bordered?: boolean;
  disable?: boolean;
}

export default function OrangeBtn({
  content,
  className,
  onClick,
  bordered,
  disable,
}: Props) {
  const onEmpty = () => {};
  return (
    <div
      className={clsx("c-orangeBtn-root", className, {
        "c-orangeBtn-borderRoot": bordered === true,
        "c-orangeBtn-disableRoot": disable === true,
      })}
      onClick={!disable ? onClick : onEmpty}
    >
      {content}
    </div>
  );
}
