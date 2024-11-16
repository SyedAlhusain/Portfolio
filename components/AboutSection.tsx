import Image from 'next/image'; // Import Image component if not already imported

const AboutSection = () => {
  const programmingSkills = [
    { skill: 'Python' },
    { skill: 'R' },
    { skill: 'C++' },
    { skill: 'C' },
    { skill: 'Java' },
    { skill: 'Assembly' },
    // Add more programming skills if needed
  ];

  const webDevelopmentSkills = [
    { skill: 'JavaScript' },
    { skill: 'TypeScript' },
    { skill: 'Next.js' },
    { skill: 'React' },
    { skill: 'HTML' },
    { skill: 'CSS' },
    // Add more web development skills if needed
  ];

  const backendDevelopmentSkills = [
    { skill: 'Node.js' },
    { skill: 'Flask' },
    { skill: 'SQL' },
    { skill: 'AWS' },
    // Add more backend development skills if needed
  ];

  const dataAnalysisSkills = [
    { skill: 'R' },
    { skill: 'PySpark' },
    { skill: 'Scikit-learn' },
    { skill: 'PyTorch' },
    // Add more data analysis skills if needed
  ];

  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Syed Husain and I am a{" "}
              <span className="font-bold">{"enthusiastic"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Machine Learning Researcher
              based in Jessup, MD.
            </p>
            <br />
            <p>
              I have substantial experience across programming languages including Python, C++, C, Java, JavaScript, Node.js, JavaFX, and x86 Assembly.
            </p>
            <br />
            <p>
              I&apos;m proficient in data analysis and have internship experience using FileNet. I hold certifications in SQL, Machine Learning, DevOps, and AWS. I&apos;m goal-driven with a talent for solving problems using a data-driven approach.
            </p>
            <br />
            <p>
              I am excited to see where my career takes me and am always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-col justify-center z-10 md:justify-start">
              <div>
                <h2 className="text-lg font-semibold mb-2">Programming Skills</h2>
                <div className="flex flex-wrap flex-row justify-center">
                  {programmingSkills.map((item, idx) => (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2 mt-6">Web Development Skills</h2>
                <div className="flex flex-wrap flex-row justify-center">
                  {webDevelopmentSkills.map((item, idx) => (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2 mt-6">Backend Development Skills</h2>
                <div className="flex flex-wrap flex-row justify-center">
                  {backendDevelopmentSkills.map((item, idx) => (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2 mt-6">Data Analysis Skills</h2>
                <div className="flex flex-wrap flex-row justify-center">
                  {dataAnalysisSkills.map((item, idx) => (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;

