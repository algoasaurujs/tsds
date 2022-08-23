import React from 'react';
import Link from 'next/link';

export type LogoProps = {
    /**
     * Light logo version
     */
    limage: string;
    /**
     * Dark logo version
     */
    dimage: string;
    /**
     * Sticky logo version
     */
    simage: string;
}

const Logo: React.FC<LogoProps> = ({ limage, dimage, simage }) => {
    return (
        <Link href="/">
            <a>
                <img className="light-version-logo" src={limage} alt="logo" />
                <img className="dark-version-logo" src={dimage} alt="logo" />
                <img className="sticky-logo" src={simage} alt="logo" />
            </a>
        </Link>
    )
}


export default Logo;