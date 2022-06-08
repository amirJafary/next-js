import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <nav>
                <ul className='flex pt-8'>
                    <li className='mr-16 font-bold'>
                        <Link href={'/shop'}>
                            shop
                        </Link>
                    </li>
                    <li className='mr-16 font-bold'>
                        <Link href={'/contactUs'}>
                            contact us
                        </Link>
                    </li>
                    <li className='font-bold'>
                        <Link href={'/aboutUs'}>
                            about us
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
