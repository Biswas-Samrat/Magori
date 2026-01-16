import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ title, description }) => {
    const siteTitle = "Magori Gastrobar | Pamplona";
    const defaultDesc = "Modern Spanish Gastrobar in Pamplona. Tapas, A la Brasa, and Fire Cooking. Experience the best of Spanish fusion cuisine.";

    return (
        <Helmet>
            <title>{title ? `${title} | Magori Gastrobar` : siteTitle}</title>
            <meta name="description" content={description || defaultDesc} />
            <meta property="og:title" content={title ? `${title} | Magori Gastrobar` : siteTitle} />
            <meta property="og:description" content={description || defaultDesc} />
            <meta property="twitter:title" content={title ? `${title} | Magori Gastrobar` : siteTitle} />
            <meta property="twitter:description" content={description || defaultDesc} />
        </Helmet>
    );
};

export default SEOHead;
