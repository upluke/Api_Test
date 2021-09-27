 
import {Machine} from './Machine'

export const SlotMachine=()=>{
  return (
    <div className="App">
      <Machine s1="x" s2="y" s3="y" />
      <Machine s1="x" s2="x" s3="x" />
      <Machine s1="x" s2="z" s3="x" />
    </div>
  );
}
