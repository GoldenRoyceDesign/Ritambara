import React, { useState } from 'react';
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import service4 from '../assets/service4.png'
import service5 from '../assets/service5.png'

const activities = [
    {
        title: "Stevedoring & Shore Handling",
        image: service1,
        paragraph: `Our skilled team manages the loading and unloading of cargo, ensuring safe and efficient handling at ports. We cater to various types of cargo, maintaining high standards of safety and efficiency.`,
        subheading: "Specializing in efficient cargo handling at ports, we ensure:",
        bullets: [
            "Safe and swift loading and unloading of vessels",
            "Careful management of cargo transfer",
            "Minimized turnaround times",
            "Adherence to strict safety protocols"
        ]
    },
    {
        title: "Custom Broking",
        image: service2,
        paragraph: `Navigating customs procedures can be complex. Our experts facilitate the clearance of goods, ensuring compliance with regulations and minimizing delays. We handle all documentation and liaison with customs authorities for a hassle-free experience.`,
        subheading: "Our expert custom brokers:",
        bullets: [
            "Handle all documentation processes",
            "Ensure compliance with international trade regulations",
            "Facilitate smooth clearance of imports and exports",
            "Minimize delays and potential complications"
        ]
    },
    {
        title: "Freight Forwarding",
        image: service3,
        paragraph: `We offer comprehensive freight forwarding solutions, managing the transportation of goods across air, sea, and land. Our services include shipment booking, route planning, and cargo tracking, ensuring timely and secure delivery.`,
        subheading: "We provide flexible and reliable freight forwarding solutions:",
        bullets: [
            "Comprehensive international and domestic shipping",
            "Multiple transportation modes (sea, air, road)",
            "Customized logistics strategies",
            "End-to-end shipment tracking"
        ]
    },
    {
        title: "Regular Transportation",
        image: service4,
        paragraph: `We provide reliable transportation services for standard cargo, ensuring safe and timely delivery to the desired destination.`,
        subheading: "",
        bullets: [
            "Dependable cargo movement across different routes",
            "Well-maintained fleet",
            "Timely and secure delivery",
            "Competitive pricing"
        ]
    },
    {
        title: "Over Dimensional Cargo (ODC) Transportation",
        image: service5,
        paragraph: `Handling oversized cargo requires specialized equipment and expertise. Our team is equipped to transport ODC safely, adhering to all regulatory requirements and ensuring secure delivery.`,
        subheading: "",
        bullets: [
            "Specialized handling for oversized and heavy cargo",
            "Custom transportation solutions",
            "Advanced routing and planning",
            "Specialized equipment for unique cargo requirements"
        ]
    },
];


const Service = () => {
    const [activeIndex, setActiveIndex] = useState(2); // default active: Jeep Safari

    return (
        <>
            <div className='service p-lg-5 p-4' id='service'>
                <h1 className='text-uppercase fw-bold'>our services</h1>
                <p>We offer full-service logistics support, handling all aspects of vessel operations. Our team manages port calls, coordinates with authorities, processes documentation, and oversees cargo operations to ensure smooth, efficient logistics.</p>
            </div>
            <section
                className="service-section"
                style={{ backgroundImage: `url(${activities[activeIndex].image})` }}
            >
                <div className="overlay">
                    {activities.map((activity, idx) => (
                        <div
                            key={idx}
                            className={`activity-column ${idx === activeIndex ? 'active' : ''}`}
                            onMouseEnter={() => setActiveIndex(idx)}
                        >
                            <span className="activity-title text-uppercase fw-bold">{activity.title}</span>

                            {idx === activeIndex && (
                                <div className="activity-details p-4">
                                    <p className='mb-5'>{activity.paragraph}</p>
                                    <h6 className="mt-3 text-uppercase">{activity.subheading}</h6>
                                    <ul className="ps-3">
                                        {activity.bullets.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>


        </>
    );
};

export default Service;
