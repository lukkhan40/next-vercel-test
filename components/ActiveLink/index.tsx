import { CSSProperties, FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ActiveLinkProps } from "./interfaces";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink: FC<ActiveLinkProps> = (props) => {
  const { text, href } = props;
  const { asPath } = useRouter();

  return (
    <Link href={href} style={asPath === href ? style : undefined}>
      {text}
    </Link>
  );
};
