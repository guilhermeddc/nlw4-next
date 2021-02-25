import { useContext } from "react";
import {
  CountdownContext,
  CountdownProvider,
} from "../contexts/CountdownContext";

function useCountdown() {
  const context = useContext(CountdownContext);

  if (!context) {
    throw new Error("useCountdown must be used within an CountdownsProvider");
  }

  return context;
}

export { CountdownProvider, useCountdown };
