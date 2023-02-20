import { motion } from "framer-motion";
import Position from "./Position";

type Props = {};

const experiences = [
    {
        "Title": "Software Development Intern",
        "Company name": "ServiceNow",
        "Start date": "January 2022",
        "End date": "June 2022",
        "Description": "Developed a JavaScript application that suggests the ideal time to complete automations, such as backups, achieving a 63% reduction in the time taken to expedite the automation using JavaScript language. Created 100% automated Service Usage and Health Analytics (SUHA) dashboards for different services. Wrote clean, clear, well-tested code, and technical documentation for various projects. Identified key application features and met customer needs with consistent software developments. Used Scrum and Agile processes to develop sophisticated, well-structured solutions.",
    },
    {
        "Title": "Software Engineer Intern",
        "Company name": "Advance Auto Parts India",
        "Start date": "April 2021",
        "End date": "July 2021",
        "Description": "Implemented the front-end component of the web application for the merchandise upload facility utilizing the NextJS framework, achieving about 1.5 times increase in productivity. Performed both manual testing and automation testing using Jest framework with a code coverage of 93% to produce high standard software. To make the system 100% accurate, wrote postman tests to verify that Okta authentication is operating as intended, returning user information legitimately, service integrations are reliable, and any modifications haven’t disrupted current functionality. Collaborated with a cross-functional team of developers, product managers, and QA engineers to design and implement new features, identify and resolve bugs, and improve the overall user experience.",
    },
    {
        "Title": "Placement Coordinator",
        "Company name": "Chaitanya Bharathi Institute Of Technology",
        "Start date": "April 2021",
        "End date": "July 2022",
        "Description": "Maintained accurate records of student placements and internship opportunities and provided regular reports to the department head. Organized and coordinated on-campus recruitment events, such as job fairs and company presentations, to connect students with potential employers. Provided support and guidance to students throughout the placement process, including resume and cover letter writing, interview preparation, and job search strategies. Improved the number of placements in the computer science department by more than 100 as compared to the previous year.",
    },
    {
        "Title": "Full Stack Web Development Intern",
        "Company name": "Practo",
        "Start date": "May 2020",
        "End date": "June 2020",
        "Description": "Built a full-stack web application for placing orders for diagnostics tests through doctor prescription upload, which reduces the amount of paperwork; estimated at about 75%. Collaborated with project mentor to test and integrate new design feature capabilities. Adhered to best practices for web security. Troubleshot and debugged code ensuring compatibility with devices, and browsers.",
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