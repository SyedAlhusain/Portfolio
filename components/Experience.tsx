import { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component

const ExperienceSection = () => {
  const experiences = [
    {
      company: "U.S. Army DEVCOM Army Research Laboratory",
      location: "Aberdeen, Maryland",
      position: "Machine Learning Researcher",
      duration: "Jun 2024 – Present",
      logo: "/armyresearchlab_logo.jpeg", // Add logo path
      bullets: [
        "Developed DRL algorithms using PyTorch for vibration control of TRAST model systems, achieving a 95% reduction in vibration moment",
        "Enhanced algorithm robustness for aircraft whirl flutter suppression, resulting in a 90% improvement in control stability",
        "Developed ML models to predict the TRAST model data at various velocity speed knots with 97% accuracy",
        "Conducted simulations and performance assessments demonstrating a 95% increase in system-damping efficiency",
      ],
    },
    {
      company: "WSSC Water",
      location: "Laurel, Maryland",
      position: "IBM FileNet Developer",
      duration: "Jun 2023 – Aug 2023",
      logo: "wsscwater_logo.jpeg", // Add logo path
      bullets: [
        "Spearheaded enhancements in document workflow resulting in a 20% reduction in processing time using Content Platform Engine (ACCE)",
        "Optimized out-of-the-box(OOTB) workflows in IBM Content Navigator(ICN) to boost automation efficiency by 30%",
        "Demonstrated mastery in P8 Administrative control for repository management and IBM FileNet technology stack for configuring Enterprise Content Management (ECM) solutions",
        "Elevated user satisfaction by revamping UI templates with CSS and HTML for workflow definitions",
      ],
    },
    {
      company: "Personic Virtual Clinic LLC",
      location: "Vienna, Virginia",
      position: "Data Management Analyst",
      duration: "Dec 2021 – Jan 2022",
      logo: "personic_health_logo.jpeg", // Add logo path
      bullets: [
        "Improved database performance for medical reports by successfully implementing CRUD operations through MySQL",
        "Applied data analysis of medical reports using Python libraries such as Scikit-learn, NumPy, and Pandas",
        "Utilized Tableau to create insightful data visualizations to boost operational efficiency by a significant 40%",
      ],
    },
  ];  
  
  return (
    <section id="experience">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-wrap flex-row justify-center z-10 md:justify-start mb-8">
            <div className="flex items-center space-x-4"> {/* Adjusted to align logo and text */}
              <Image 
                src={experience.logo} 
                alt={experience.company} 
                width={50} // Set appropriate width
                height={50} // Set appropriate height
                className="rounded-full" // Optional: makes the logo rounded
              />
              <div>
                <h2 className="text-xl font-semibold">{experience.company}</h2>
                <p className="text-lg">{experience.position}</p>
                <p className="text-gray-500">{experience.duration}</p>
              </div>
            </div>
            <ul className="mt-4">
              {experience.bullets.map((bullet, idx) => (
                <li key={idx} className="mb-2">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex justify-center">
          <a href="https://782b8ba1-e9c9-4458-a8c3-262498a2091d.filesusr.com/ugd/40204f_67e42f7a2e164a878e1d2cbfc3cec9c9.pdf" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;


// import { useState } from 'react';

// const ExperienceSection = () => {
//   const experiences = [
//     {
//       company: "U.S. Army DEVCOM Army Research Laboratory",
//       location: "Aberdeen, Maryland",
//       position: "Machine Learning Researcher",
//       duration: "Jun 2024 – Present",
//       bullets: [
//         "Developed DRL algorithms using PyTorch for vibration control of TRAST model systems, achieving a 95% reduction in vibration moment",
//         "Enhanced algorithm robustness for aircraft whirl flutter suppression, resulting in a 90% improvement in control stability",
//         "Developed ML models to predict the TRAST model data at various velocity speed knots with 97% accuracy",
//         "Conducted simulations and performance assessments demonstrating a 95% increase in system-damping efficiency",
//       ],
//     },
//     {
//       company: "WSSC Water",
//       location: "Laurel, Maryland",
//       position: "IBM FileNet Developer",
//       duration: "Jun 2023 – Aug 2023",
//       bullets: [
//         "Spearheaded enhancements in document workflow resulting in a 20% reduction in processing time using Content Platform Engine (ACCE)",
//         "Optimized out-of-the-box(OOTB) workflows in IBM Content Navigator(ICN) to boost automation efficiency by 30%",
//         "Demonstrated mastery in P8 Administrative control for repository management and IBM FileNet technology stack for configuring Enterprise Content Management (ECM) solutions",
//         "Elevated user satisfaction by revamping UI templates with CSS and HTML for workflow definitions",
//       ],
//     },
//     {
//       company: "Personic Virtual Clinic LLC",
//       location: "Vienna, Virginia",
//       position: "Data Management Analyst",
//       duration: "Dec 2021 – Jan 2022",
//       bullets: [
//         "Improved database performance for medical reports by successfully implementing CRUD operations through MySQL",
//         "Applied data analysis of medical reports using Python libraries such as Scikit-learn, NumPy, and Pandas",
//         "Utilized Tableau to create insightful data visualizations to boost operational efficiency by a significant 40%",
//       ],
//     },
//   ];  
  
//   return (
//     <section id="experience">
//       <div className="my-12 pb-12 md:pt-16 md:pb-48">
//         <h1 className="text-center font-bold text-4xl">
//           Experience
//           <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
//         </h1>

//         {experiences.map((experience, index) => (
//           <div key={index} className="flex flex-wrap flex-row justify-center z-10 md:justify-start mb-8">
//             <div>
//               <h2 className="text-xl font-semibold">{experience.company}</h2>
//               <p className="text-lg">{experience.position}</p>
//               <p className="text-gray-500">{experience.duration}</p>
//             </div>
//             <ul>
//               {experience.bullets.map((bullet, idx) => (
//                 <li key={idx} className="mb-2">{bullet}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//         <div className="flex justify-center">
//           <a href="https://782b8ba1-e9c9-4458-a8c3-262498a2091d.filesusr.com/ugd/40204f_67e42f7a2e164a878e1d2cbfc3cec9c9.pdf" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">Download Resume</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;

