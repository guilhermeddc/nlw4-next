import Head from "next/head";
import { GetServerSideProps } from "next";

import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallengesProvider } from "../hooks/useChallenge";
import { CountdownProvider } from "../hooks/useCountdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { Countdown } from "../components/Countdown";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

interface IProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  level,
  challengesCompleted,
  currentExperience,
}: IProps) {
  return (
    <ChallengesProvider
      level={level}
      challengesCompleted={challengesCompleted}
      currentExperience={currentExperience}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
