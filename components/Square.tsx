import { ReactNode } from "react";
import styles from "../styles/Square.module.css";
import React, { useState } from "react";

type Props = {
  value: ReactNode;
};
export default function Square(props: Props) {
  const [value, setValue] = useState(null);
  return (
    // <button
    //   className={styles.square}
    //   onClick={function () {
    //     alert("click");
    //   }}
    // >
    //   {props.value}
    // </button>
    <button className={styles.square} onClick={() => setValue("X")}>
      {value}
    </button>
  );
}
