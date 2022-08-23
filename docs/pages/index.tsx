import type { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import SEO from 'common/SEO';
import HeroBanner from '@/components/HeroBanner';
import BlogOne from 'components/blog/BlogOne';
import BrandOne from 'components/brand/BrandOne';
import CounterUpOne from 'components/counterup/CounterUpOne';
import CtaLayoutOne from 'components/cta/CtaLayoutOne';
// import ProjectOne from 'components/project/ProjectOne';
import ServicePropOne from 'components/service/ServicePropOne';
import TestimonialOne from 'components/testimonial/TestimonialOne';
import SectionTitle from 'elements/section-title/SectionTitle';

const Home: NextPage = () => {

  return (
    <>
      <SEO title="Creative Agency" />
      <HeroBanner />
      <div className="section section-padding">
        <div className="container">
          <SectionTitle
            subtitle="What We Can Do For You"
            title="Services we can <br> help you with"
            description=""
            textAlignment="heading-left mb--20 mb_md--70"
            textColor=""
          />
          <div className="row">
            <ServicePropOne colSize="col-lg-4" serviceStyle="service-style-2" itemShow="3" marginTop="yes" />
          </div>
        </div>
        <ul className="shape-group-7 list-unstyled">
          <li className="shape shape-1"><Image src={"/images/others/circle-2.png"} alt="circle" width="886" height="888" /></li>
          <li className="shape shape-2"><Image src={"/images/others/bubble-2.png"} alt="Line" width="150" height="150" /></li>
          <li className="shape shape-3"><Image src={"/images/others/bubble-1.png"} alt="Line" width="88" height="88" /></li>
        </ul>

      </div>
      {/* <ProjectOne parentClass="bg-color-light"/> */}
      <CounterUpOne />
      <TestimonialOne />
      <BrandOne />
      <BlogOne />
      <CtaLayoutOne />
    </>
  )
}

export default Home
