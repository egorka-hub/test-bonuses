import React, { useEffect, useState } from 'react';
import {getAccessToken} from "./api/getAccessToken";
import {BonusInfo, getBonuses} from "./api/getBonuses";
import formatDate from './utils/formatData'

import Container from './components/Container';
import styles from "./main.module.scss"

import FIRE_ICON from "../src/images/fire-icon.svg";
import INFO_ICON from "../src/images/info.svg";
import ARROW_ICON from "../src/images/arrow.svg";

function Main() {
  const [data, setData] = useState<BonusInfo | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getData(): Promise<string | void> {
      const token = await getAccessToken();

      if (token) {
        const data = await getBonuses(token);
        if (data) {
          setData(data)
        }
      } else {
        setError(true)
      }
    }

    getData();
  }, []);


  return (
    <div className='App'>
      <Container>
      <header className={styles.header}>
        <div className={styles.logo}>ЛОГОТИП</div>
        <img src={INFO_ICON} alt='info' />
      </header>
        <>
          {data && (
            <div className={styles.bonusesContent}>
              <div>
                <h2 className={styles.title}>{data.currentQuantity} бонусов</h2>
                <div className={styles.descBlock}>
                  <div className={styles.textFire}>{formatDate(data.dateBurning)} сгорит <img className={styles.svgFire} src={FIRE_ICON} alt='fire'/></div>
                  <div className={styles.text}>{data.forBurningQuantity} бонусов</div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.roundIcon}>
                  <span><img src={ARROW_ICON} alt='arrow' /></span>
                </div>
              </div>
            </div>
          )}
          {error && 'Произошла ошибка'}
        </>
      </Container>
      <div className={styles.overlay} />
    </div>
  );
}

export default Main;
