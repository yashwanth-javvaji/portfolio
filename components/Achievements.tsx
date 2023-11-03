import { FaArrowRight } from "react-icons/fa";

import Achievement from "~/components/Achievement";

const achievements = [
    {
        "Title": "Successful Organizer of Data Addicts Event",
        "Description": "Successfully planned and executed the Data Addicts event, centered around SQL, with a staggering turnout of over 350 attendees. The event required strategic planning, marketing, and excellent communication skills to ensure its success. The attendees praised the event for its educational value and engaging atmosphere.",
        "Date": "March 2021",
    },
    {
        "Title": "Dashboard Designer for Global Egg Surplus, Demand, and Supply Data",
        "Description": "Won the prestigious JPMC Code for Good 2020 competition by designing a comprehensive dashboard that displays worldwide egg surplus, demand, and supply data for the Sight and Life Foundation. The design required a deep understanding of data analytics and visualization techniques and was recognized for its impact and accuracy.",
        "Date": "August 2020",
    },
    {
        "Title": "Technical Fest Champion for Fast and Furious and Kodecrypt Events",
        "Description": "Secured 1st position in Fast and Furious events and was selected as a finalist in Kodecrypt event, both of which were a part of our college's annual technical fest. The events were highly competitive and tested a variety of technical skills such as coding, problem-solving, and teamwork.",
        "Date": "September 2019",
    },
];

const Achievements = () => {
    return (
        <>
            <h3 className="uppercase tracking-[11px] text-center font-semibold text-gray-800 dark:text-gray-100 text-2xl pl-[11px] mb-9">
                Achievements
            </h3>
            <ol className="relative border-l-2 border-gray-300 dark:border-gray-600">
                {achievements.map((achievement, index) => (
                    <Achievement achievement={achievement} key={index} />
                ))}
            </ol>
            <a href="#achievements" className="mt-10 flex flex-row justify-center items-center mx-auto text-base font-semibold leading-7 text-black dark:text-white hover:scale-110 transition duration-100">
                Get it touch &nbsp; <FaArrowRight className="inline-block" />
            </a>
        </>
    )
}

export default Achievements;