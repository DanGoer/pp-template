import { useState } from "react";
import { infoData, infoButton } from "../../assets/data";
import styles from "./info.module.scss";

function Info() {
  const [activeInfo, setActiveInfo] = useState(0);

  return (
    <section
      className={`${styles.info__bg} ${styles[`info__info-${activeInfo}`]}`}
    >
      <div className={styles.info}>
        <h1>{infoData[activeInfo].h1}</h1>
        <p>{infoData[activeInfo].p}</p>
        <div>
          {infoButton.map((button, index) => {
            return (
              <button key={button.button} onClick={() => setActiveInfo(index)}>
                {button.button}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Info;

{
  /* @ts-ignore */
}
