import { FaArrowRight } from 'react-icons/fa';

import Skill from "~/components/Skill";

const skills = [
    "GO",
    "TypeScript",
    "Kotlin",
    "Swift",
    "Java",
    "Python",
    "JavaScript",
    "C",
    "C++",
    "C Sharp",
    "PHP",
    "SwiftUI",
    "Next.js",
    "React",
    "Angular",
    "Flutter",
    "Node.js",
    "Express.js",
    "Spring",
    "ASP.NET",
    "Django",
    "Flask",
    "Laravel",
    "GraphQL",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Neo4j",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Git",
    "Jira",
    "Splunk",
    "ServiceNow",
    "GenAI",
    "UI/UX Design",
    "Kafka",
    "RabbitMQ",
    "Jest",
    "JUnit"
];

const Skills = () => {
    return (
        <>
            <h3 className="uppercase tracking-[11px] text-center font-semibold text-gray-800 dark:text-gray-100 text-2xl pl-[11px] mb-9">
                Skills
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                {skills.map((skill, index) => (
                    <Skill skill={skill} key={index} />
                ))}
            </div>
            <a href="#achievements" className="mt-10 flex flex-row justify-center items-center mx-auto text-base font-semibold leading-7 text-black dark:text-white hover:scale-110 transition duration-100">
                Check out my accolades &nbsp; <FaArrowRight className="inline-block" />
            </a>
        </>
    )
}

export default Skills;