import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const getInitialState = () => true;

export default function Component() {
  const [visible, setVisibility] = useState(getInitialState);

  const handlClick = () => {
    setVisibility((currentValue) => !currentValue);
  };

  return (
    <div className="container">
      <h1>What is React?</h1>

      <Button variant="primary" onClick={handlClick}>
        Show
      </Button>

      {visible && (
        <Card>
          <Card.Body> A JavaScript library with virtual DOM </Card.Body>
        </Card>
      )}
    </div>
  );
}
