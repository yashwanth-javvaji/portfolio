import { motion } from "framer-motion";
import Position from "./Position";

type Props = {};

const experiences = [
    {
        "Title": "Software Dev Engineer Intern",
        "Company name": "Amazon Web Services (AWS)",
        "Start date": "May 2023",
        "End date": "Current",
        "Description": "",
    },
    {
        "Title": "Microsoft Learn Student Ambassador",
        "Company name": "UT Dallas Office of Information Technology",
        "Start date": "January 2023",
        "End date": "April 2023",
        "Description": "Successfully finished the Microsoft Ambassador Program, an esteemed initiative that enhances knowledge and skills related to Microsoft 365. Developed advanced abilities in utilizing Microsoft 365 tools and technologies through interactive workshops and training sessions. Delivered a final presentation on Microsoft Integration to diverse audiences, effectively communicating complex concepts. Engaged in team-based activities and workshops, fostering effective communication, problem-solving, and collaboration skills.• Successfully finished the Microsoft Ambassador Program, an esteemed initiative that enhances knowledge and skills related to Microsoft 365. • Developed advanced abilities in utilizing Microsoft 365 tools and technologies through interactive workshops and training sessions. • Delivered a final presentation on Microsoft Integration to diverse audiences, effectively communicating complex concepts. • Engaged in team-based activities and workshops, fostering effective communication, problem-solving, and collaboration skills.",
    },
    {
        "Title": "Student Assistant",
        "Company name": "The Erik Jonsson School of Engineering and Computer Science at UT Dallas",
        "Start date": "February 2023",
        "End date": "March 2023",
        "Description": "Contributed to a funded project focused on detecting and defending against software vulnerabilities, strengthening cybersecurity practices. Generated high-quality vulnerability data for the most common types of vulnerabilities, improving software vulnerability detection and repair tools. Collaborated in a team to label 300 code samples, injecting 66 realistic vulnerabilities while preserving core functionality. Utilized C programming expertise and knowledge of common code structures to identify and introduce vulnerabilities accurately. Communicated progress and worked closely with team members, ensuring a collaborative and efficient workflow.",
    },
    {
        "Title": "Software Development Intern",
        "Company name": "ServiceNow",
        "Start date": "January 2022",
        "End date": "June 2022",
        "Description": "Developed a JavaScript application that improved automation efficiency by suggesting optimal completion times, resulting in a significant 63% reduction in time taken. Created 100% automated dashboards for Service Usage and Health Analytics (SUHA) across various services within our team. Wrote clean and well-tested code, along with technical documentation, for the JavaScript application and SUHA dashboard projects. Identified and implemented key features to meet customer requirements through consistent software development. Utilized Scrum and Agile methodologies to deliver well-structured and timely solutions.",
    },
    {
        "Title": "Placement Coordinator",
        "Company name": "Chaitanya Bharathi Institute Of Technology",
        "Start date": "April 2021",
        "End date": "July 2022",
        "Description": "Maintained accurate records of student placements and internship opportunities and provided regular reports to the department head. Organized and coordinated on-campus recruitment events, such as job fairs and company presentations, to connect students with potential employers. Provided support and guidance to students throughout the placement process, including resume and cover letter writing, interview preparation, and job search strategies. Improved the number of placements in the computer science department by more than 100 as compared to the previous year.",
    },
    {
        "Title": "Software Engineer Intern",
        "Company name": "Advance Auto Parts India",
        "Start date": "April 2021",
        "End date": "July 2021",
        "Description": "Implemented the front-end component of the web application for the merchandise upload facility utilizing the NextJS framework, achieving about 1.5 times increase in productivity. Performed thorough manual testing on the web application, checking for various test cases to ensure high-quality software and identify any issues or bugs. To make the system 100% accurate, wrote postman tests to verify that Okta authentication is operating as intended, returning user information legitimately, service integrations are reliable, and any modifications haven’t disrupted current functionality. Collaborated with a cross-functional team of developers, product managers, and QA engineers to design and implement new features, identify and resolve bugs, and improve the overall user experience.",
    },
    {
        "Title": "Full Stack Web Development Intern",
        "Company name": "Practo",
        "Start date": "May 2020",
        "End date": "June 2020",
        "Description": "Developed a streamlined application for diagnostic test ordering, reducing paperwork by 75% through doctor prescription uploads and optimizing the user experience. Designed of the application's database structure and created wireframes using Adobe, providing a solid foundation for implementation. Conducted comprehensive testing to ensure cross-browser functionality and device compatibility, addressing any issues and optimizing code for optimal performance across various devices and browsers. Collaborated closely with project mentor to integrate new design features and ensure adherence to industry best practices, resulting in a secure web application that met high standards of web security.",
    }
];

export default function Experience({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className="min-h-screen flex flex-col max-w-5xl justify-start items-center mx-auto pt-10 pb-40 px-9"
        >
            <h3 className="uppercase tracking-[11px] text-center font-semibold text-gray-800 dark:text-gray-100 text-2xl pl-[11px] mb-9">
                Experience
            </h3>
            <ol className="relative border-l-2 border-gray-300 dark:border-gray-600">
                {experiences.map((experience, index) => (
                    <Position experience={experience} key={index} />
                ))}
            </ol>
        </motion.div>
    )
}