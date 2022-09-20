import { useState } from "react";
import { infoData } from "../../assets/data";
import styles from "./info.module.scss";

function Info() {
  const [activeInfo, setActiveInfo] = useState(0);

  return (
    <section className={styles.info}>
      <h1>{infoData[activeInfo].h1}</h1>
      <p>{infoData[activeInfo].p}</p>
      <button onClick={() => setActiveInfo(2)}>test</button>
    </section>
  );
}
export default Info;
