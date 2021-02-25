import React, { ReactNode } from "react";

import { ChallengesProvider } from "./ChallengeContext";

interface IProps {
  children: ReactNode;
}

export function ContextProvider({ children }: IProps) {
  return <ChallengesProvider>{children}</ChallengesProvider>;
}
