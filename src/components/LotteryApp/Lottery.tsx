import React from "react";
import {Ball} from "./Ball";
import "./Lottery.css";

const defaultProps = {
  title: "Loto",
  maxBalls: 6,
  maxNum: 40
};

interface LotteryProp {
  title: string;
  numBalls: number;
  maxNum: number;
}

export const Lottery: React.FC<LotteryProp> = ({ title, numBalls, maxNum }) => {
  const [nums, setNums] = React.useState(Array.from({ length: numBalls }));

  // generate() {
  //   this.setState((curState) => ({
  //     nums: curState.nums.map(
  //       (n) => Math.floor(Math.random() * this.props.maxNum) + 1
  //     )
  //   }));
  // }
  const generate = () => {
    setNums((curState) =>
      curState.map((n) => Math.floor(Math.random() * maxNum) + 1)
    );
  };

  const handleClick = () => {
    generate();
  };

  return (
    <section className="Lottery">
      <h1>{title}</h1>
      <div>
        {nums.map((n:any) => (
          <Ball  num={n} />
        ))}
      </div>
      <button onClick={() => handleClick()}>Generate</button>
    </section>
  );
};
