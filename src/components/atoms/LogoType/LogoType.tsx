'use client'

import styles from './LogoType.module.css'
import Image from 'next/image'
import AmberDefault from '@/../public/logotypes/amber-default.svg'
import AmberChristmas from '@/../public/logotypes/amber-christmas.svg'

export default function SeasonalLogoType() {
    const month = new Date().getMonth();
    if (month === 11) {
        return <Image
            src={AmberChristmas}
            alt="Amber logo christmas edition"
            style={{
                position: 'relative',
                width: 'auto',
                // This image is 150% of the default logo
                height: '150%',
                top: '-50%',
                transform: 'translateX(-4%)',
            }}
        />
    }
    return <Image
        src={AmberDefault}
        alt="Amber logo"
        style={{ height: '100%', width: 'auto' }}
    />
}
