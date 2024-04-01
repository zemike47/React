import { buildQueries } from "@testing-library/react";
import { Children, useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/*} <Steps />*/}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  ///const [test, setTest] = useState({ name: "jonas" });
  const [isOpen, setIsOpen] = useState(true);

  function handlerPrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handlerNext() {
    if (step < 3) setStep((s) => s + 1);

    //setTest({ name: "fred" });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            step {step}:{messages[step - 1]}
          </p>

          <div className="buttons">
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handlerPrevious}
            >
              <span>👈</span>
              previous
            </Button>

            <Button textColor="#fff" bgColor="#7950f2" onClick={handlerNext}>
              Next
              <span>👉 </span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, textColor: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
