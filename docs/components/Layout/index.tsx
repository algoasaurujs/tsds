import React from 'react';
import Footer from 'common/Footer';
import Header from 'common/Header';
import ColorSwitcher from 'elements/switcher/ColorSwitcher';

type LayoutProps = {
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                {children}
                <Footer />
            </main>
        </>
    );
}

export default Layout;
