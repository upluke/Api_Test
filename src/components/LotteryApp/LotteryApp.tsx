import { Lottery } from "./Lottery";

export const LotteryApp = () => {
  return (
    <div className="App">
      <Lottery title="Mini Daily" numBalls={4} maxNum={10} />
      <Lottery title="My Daily" numBalls={5} maxNum={15} />
    </div>
  );
};
