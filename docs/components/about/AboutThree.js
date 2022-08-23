import React from 'react';
import Image from 'next/image';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Exceed clients’ and colleagues’ expectations",
        para: "Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl. Maecenas scelerisque dignissim elit."
    },
    {
        id: 2,
        title: "Take ownership and question the status quo in a constructive manner",
        para: "Nulla facilisi. Vestibulum vel urna eget magna condimentum faucibus. Sed arcu mi, semper sed suscipit vel, rhoncus vel justo."
    },
    {
        id: 3,
        title: "Be brave, curious and experiment – learn from all successes and failures",
        para: "Quisque aliquet quis est in faucibus. Aenean eget lorem ac risus placerat convallis eget a eros. Suspendisse dignissim ultrices tellus, id placerat mauris lacinia a."
    },
    {
        id: 4,
        title: "Act in a way that makes all of us proud",
        para: "Proin dignissim facilisis tortor a mattis. Morbi non maximus nunc, ut mattis tellus. In hac habitasse platea dictumst. Mauris viverra enim tellus, vel ultrices dolor aliquam non."
    },
    {
        id: 5,
        title: "Build an inclusive, transparent and socially responsible culture",
        para: "Maecenas eros sapien, egestas at elit nec, eleifend sagittis orci."
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Our Valus"
                    title="Why should you work with us?"
                    description="Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet."
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><Image src={"/images/others/circle-1.png"} alt="Circle" layout='fill' /></li>
                <li className="shape shape-2"><Image src={"/images/others/line-3.png"} alt="Circle" layout='fill' /></li>
                <li className="shape shape-3"><Image src={"/images/others/bubble-5.png"} alt="Circle" layout='fill' /></li>
            </ul>
        </div>
    )
}

export default AboutThree;