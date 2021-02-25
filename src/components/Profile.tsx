import { useChallenge } from "../hooks/useChallenge";

import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useChallenge();

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/guilhermeddc.png"
        alt="Guilherme Rodrigues"
      />
      <div>
        <strong>Guilherme Rodrigues</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
