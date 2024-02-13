import { Button } from '@/app/ui/components/Buttons/buttons';
import Logo from '@/app/ui/components/Logo/jupter-logo';

import Link from 'next/link';
import styles from './onboard.module.css';
import AccountButton from '@/app/ui/components/AccountButton/account-button';
import Image from 'next/image';


export default function Page() {
    return (
        <div className={styles.Section}>
            <div className={styles.Container}>
                <div className={styles.Modal}>
                    <div className={styles.ModalContent}>
                        <div className={styles.ModalHeader}>
                            <p className={styles.ModalHeading}>
                                That is awesome!
                            </p>
                            <p className={styles.ModalSubtitle}>
                                Check below the list of investors on this deal and how to proceed!
                            </p>
                        </div>
                        <div className={styles.DealInformation}>
                            <div className={styles.DealInformationSection}>
                                <h2 className={styles.DealInformationTitle}>Brief Description:</h2>
                                <p className={styles.DealBulletPoints}>- Rodada de R$ 32 milhões</p>
                                <p className={styles.DealBulletPoints}>- ARR de R$ 220 milhões e EV/ARR de 3.2x</p>
                                <p className={styles.DealBulletPoints}>- Startup em break even, com alto crescimento e geração de receita ‍</p>
                                <p className={styles.DealBulletPoints}>- Crescimento incrível de 135% em 2021‍‍</p>
                                <p className={styles.DealBulletPoints}>- Mais de R$ 122 milhões em receita em 2022 com estimativa de chegar a R$1 Bilhão em 2027‍</p>
                                <p className={styles.DealBulletPoints}>- Aproximadamente R$ 10 Bilhões transacionados em 2022</p>
                                <p className={styles.DealBulletPoints}>- 96 mil clientes em 2022 representando 63% de crescimento no ano‍</p>
                                <p className={styles.DealBulletPoints}>- Valuation de R$ 700 milhões pre money com receita projetada superior a R$ 300 milhões nos próximos 12 meses</p>
                            </div>
                            <div className={styles.DealInformationSection}>
                                <h2 className={styles.DealInformationTitle}>Links:</h2>
                                <div className={styles.DealLinksBox}>
                                    <a className={styles.DealLink}>Deal Room</a>
                                    <a className={styles.DealLink}>Deal Memo</a>
                                    <a className={styles.DealLink}>Deal FAQ</a>
                                </div>
                            </div>
                            <div className={styles.DealInformationSection}>
                                <h2 className={styles.DealInformationTitle}>Why should you invest:</h2>
                                <p className={styles.WhyToInvest}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <div className={styles.DealInformationSection}>
                                <h2 className={styles.DealInformationTitle}>Meet the founders:</h2>
                                <p className={styles.WhyToInvest}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className={styles.ButtonsBox}>
                            <Link className={styles.ButtonLink} href="/deals"><Button text="Reserve my quota"/></Link>
                            <Link href="/deals/not-interested"><Button text="Unfollow Deal"/></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.LogoWrapper}>
                    <Image 
                        alt='Jupter logo'
                        className='Logo'
                        src="/jupter-logo.png"
                        width={200}
                        height={50}
                    />
                </div>
            </div>
            <AccountButton />
        </div>
    );
}