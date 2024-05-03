
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import SlideUp from "./SlideUp";
// import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

// const projects = [
//   {
//     name: "Drift Travel App",

//     description:
//       "Implemented CRUD operations for user features such as posts, comments, likes, lodgings, and destination folders using React, Javascript, HTML, and CSS.",
//     image: "/Drift-Travel-App.jpg",
//     github: "https://github.com/SyedAlhusain/Drift-Travel-App",
//     link: "https://github.com/SyedAlhusain/Drift-Travel-App",
//   },
//   {
//     name: "S&P 500 Stock Predictor",
//     description: "Trained machine learning models to predict stock price trends using Linear Regression, Polynomial Regression, and RBF Regression. Utilized Python libraries such as Pandas, NumPy, and Scikit-learn for preprocessing and model implementation. Scripted the predictive stock price model and obtained a prediction accuracy of 93.47%.",
//     github: "https://github.com/SyedAlhusain/Stock-Price-Prediction-Machine-Learning-Models/tree/main",
//     link: "https://github.com/SyedAlhusain/Stock-Price-Prediction-Machine-Learning-Models/tree/main",
//   },
// ];

// const ProjectsSection = () => {
//   return (
//     <section id="projects">
//       <h1 className="my-10 text-center font-bold text-4xl">
//         Projects
//         <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
//       </h1>

//       <div className="flex flex-col space-y-28">
//         {projects.map((project, idx) => {
//           return (
//             <div key={idx}>
//               <SlideUp offset="-300px 0px -300px 0px">
//                 <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
//                   <div className=" md:w-1/2">
//                     <Link href={project.link}>
//                       <div className="rounded-xl shadow-xl hover:opacity-70">
//                         <Image
//                           src={`/project${idx + 1}.png`} // Assuming you have project images named as project1.png, project2.png, ...
//                           alt={project.name}
//                           width={1000}
//                           height={1000}
//                         />
//                       </div>
//                     </Link>
//                   </div>
//                   <div className="mt-8 md:w-1/2">
//                     <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
//                     <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-row align-bottom space-x-4">
//                       <Link href={project.github} target="_blank">
//                         <BsGithub
//                           size={30}
//                           className="hover:-translate-y-1 transition-transform cursor-pointer"
//                         />
//                       </Link>
//                       <Link href={project.link} target="_blank">
//                         <BsArrowUpRightSquare
//                           size={30}
//                           className="hover:-translate-y-1 transition-transform cursor-pointer"
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </SlideUp>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;

import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Drift Travel App",
    description:
      "Drift is a travel app that allows user to share their trips/journeys, find new ones and create destination folders for saving and organizing favorite trips.",
    image: "/Drift-Travel-App.jpg",
    github: "https://github.com/SyedAlhusain/Drift-Travel-App",
    link: "https://github.com/SyedAlhusain/Drift-Travel-App",
  },
  {
    name: "Stock Agent Chat Bot ",
    description: "The Stock Trader Chat Bot uses OpenAI's GPT-3.5 model to deliver tailored stock trading insights in a more casual friendly way. It uses Flask for web routing with a user-friendly react frontend.",
    image: "/Chat_Bot.webp",
    github: "https://github.com/SyedAlhusain/Stock-Trader-Chat-Bot",
    link: "https://syedhusain331.pythonanywhere.com/",
  },
  {
    name: "Home Sales Price Trends Predictor",
    description: "This project aim's in predicting the trends in average sales prices of US homes over time using various regression models including Linear Regression, Polynomial Regression, Ridge Regression, and Support Vector Regression (SVR).",
    image: "/Housing_Predictor.png",
    github: "https://github.com/SyedAlhusain/Predicting-US-Home-Sales-Price-Trends",
    link: "https://syedahusain.pythonanywhere.com/",
  },
  {
    name: "S&P 500 Stock Predictor",
    description: "The S&P 500 Stock Predictor trains machine learning models to forecast stock price trends for companies listed on the S&P 500 index. The project utilized historical stock data from the year 2000 to 2020 for various tickers within the S&P 500. ",
    image: "/Stock_Predictor.avif",
    github: "https://github.com/SyedAlhusain/Stock-Price-Prediction-Machine-Learning-Models/tree/main",
    link: "https://github.com/SyedAlhusain/Stock-Price-Prediction-Machine-Learning-Models/tree/main",
  },
  
    

]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
