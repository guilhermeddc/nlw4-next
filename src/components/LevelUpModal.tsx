import { useChallenge } from "../hooks/useChallenge";

import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallenge();

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar" />
        </button>
      </div>
    </div>
  );
}
