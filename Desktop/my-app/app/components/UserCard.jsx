import styles from "./UserCard.module.css";

export default function UserCard({ name, age, city }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.info}>Yosh: {age}</p>
      <p className={styles.info}>Shahar: {city}</p>
    </div>
  );
}
