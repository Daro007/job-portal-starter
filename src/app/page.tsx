import Image from 'next/image'
import styles from './page.module.css'
import Finanzas from '../../assets/images/finanzas.svg'
import Ambiente from '../../assets/images/ambiente-relajado.svg'
import Practico from '../../assets/images/Practico.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.mainTitle}> Why us ? </h2>
      <div className={styles.reasons}>
        <div className={styles.item}>
          <div>
            <Image src={Practico} alt="Practico" className={styles.svg}  />{" "}
          </div>
          <div>
            <h3 className={styles.reasonsTitle}> Fast & easy </h3>
            <p className={styles.reasonsDescription}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia,
              aliquet lacinia ligula ut vestibulum eros urna ullamcorper, cras
              sodales eleifend massa ac magna dictum.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <Image src={Ambiente} alt="Ambiente de Start-up" className={styles.svg} />{" "}
          </div>
          <div>
            <h3 className={styles.reasonsTitle}> Professionals</h3>
            <p className={styles.reasonsDescription}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia,
              aliquet lacinia ligula ut vestibulum eros urna ullamcorper, cras
              sodales eleifend massa ac magna dictum.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <Image src={Finanzas} alt="Grafico finanzas" className={styles.svg} />{" "}
          </div>
          <div>
            <h3 className={styles.reasonsTitle}> Transparent</h3>
            <p className={styles.reasonsDescription}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia,
              aliquet lacinia ligula ut vestibulum eros urna ullamcorper, cras
              sodales eleifend massa ac magna dictum.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
