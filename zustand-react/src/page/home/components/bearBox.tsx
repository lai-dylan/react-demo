import React from "react";
import {Button, Card} from "antd";

import useBearStore from "@/store/bearStore.ts";

const BearBox: React.FC = () => {

  // method 1
  // const bears = useBearStore((state) => state.bears);
  // const increaseBears = useBearStore(state => state.increaseBears);
  // const removeAllBears = useBearStore(state => state.removeAllBears);

  // method 2
  const {bears, increaseBears, removeAllBears} = useBearStore();

  return (
    <div className="container">
      <Card title={`Bears: ${bears}`} bordered={true}>
        <div>{Math.random()}</div>
        <div>
          <Button onClick={() => increaseBears(2)}>add bear</Button>
          <Button onClick={removeAllBears}>remove bear</Button>
        </div>
      </Card>
    </div>
  );
};

export default BearBox;