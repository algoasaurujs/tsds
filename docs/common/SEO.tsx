import React from 'react'
import Head from 'next/head';

export type SEOProps = {
    title: string;
}

const SEO: React.FC<SEOProps> = ({ title }) => {
    const htmlTitle = "TSDS | " + title;
    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{htmlTitle}</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="Creative Agency, Corporate and Portfolio React JS Template" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
    )
}

export default SEO;