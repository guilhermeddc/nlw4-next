import { useContext } from "react";
import {
  ChallengesContext,
  ChallengesProvider,
} from "../contexts/ChallengeContext";

function useChallenge() {
  const context = useContext(ChallengesContext);

  if (!context) {
    throw new Error("useChallenge must be used within an ChallengesProvider");
  }

  return context;
}

export { ChallengesProvider, useChallenge };
