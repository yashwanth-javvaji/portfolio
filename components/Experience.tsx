
import Position from "~/components/Position";

const experiences = [
    {
        "Title": "Software Engineer Intern",
        "Company name": "Tesla",
        "Start date": "August 2023",
        "End date": "Present",
        "Description": [
            "Instrumental the development and ongoing maintenance of production-critical code within the Material Flow System (MFS) at Giga Texas, ensuring the uninterrupted production of Model Y and Cybertrucks.",
            "Created an Order Troubleshooting System within MFS, efficiently tracking various production flows, validating demand configurations, and ensuring proper station signal transmission. Provides a detailed checklist of critical steps with success/failure status and potential issue reasons for swift support team resolution, bolstering overall production efficiency.",
            "Improved the Gantry Unload functionality, enhancing user experience by implementing features such as real-time display of active sessions, their potential conflicts, and providing clear progress indicators for containers scanned along with their scan statuses resulting in smoother operations and minimized material handling errors."
        ]
    },
    {
        "Title": "Software Dev Engineer Intern",
        "Company name": "Amazon Web Services (AWS)",
        "Start date": "May 2023",
        "End date": "August 2023",
        "Description": [
            "Designed and implemented a Validation Lambda function enabling secure file-based communication between customers and partners within the AWS Supply Chain. This system validates shared artifacts against predefined rules, enhancing data integrity, compliance, and efficiency in various supply chain processes such as invoicing.",
            "Utilized Amazon's Evidently tool for A/B testing, providing data-driven insights, including request response time. Implemented a feature toggle for dynamic enablement or disablement based on project requirements.",
            "Resolved 2 critical policy engine issues in artifacts service code pipeline: Added bake time approval for production stages, ensuring careful monitoring for slow-burning impacts post-deployment, preventing adverse effects across regions; Restructured the pipeline to feature separate stages for each AWS region, ensuring regional isolation, geographical redundancy, and efficient management of region-specific configurations, enhancing deployment resilience and accuracy."
        ]
    },
    {
        "Title": "Microsoft Learn Student Ambassador",
        "Company name": "UT Dallas Office of Information Technology",
        "Start date": "January 2023",
        "End date": "April 2023",
        "Description": [
            "Successfully completed the Microsoft Ambassador Program, honing expertise in Microsoft 365 tools and technologies through immersive workshops and training sessions.",
            "Demonstrated proficiency by delivering a comprehensive presentation on Microsoft Integration to diverse audiences. Engaged in team-based activities and workshops, fostering effective communication, problem-solving, and collaboration skills."
        ]
    },
    {
        "Title": "Student Assistant",
        "Company name": "The Erik Jonsson School of Engineering and Computer Science at UT Dallas",
        "Start date": "February 2023",
        "End date": "March 2023",
        "Description": [
            "Collaborated with a research team on an ongoing project aimed at developing a Neural Network model for detecting potential errors in C programs, including memory leaks, overflows, user after free, double free, etc.",
            "Played a pivotal role by generating a dataset of over 500 vulnerable C programs and providing accurate labeling, addressing the data scarcity issue, and facilitating the training of the error identification model."
        ]
    },
    {
        "Title": "Software Development Intern",
        "Company name": "ServiceNow",
        "Start date": "January 2022",
        "End date": "June 2022",
        "Description": [
            "Implemented an application that utilizes historical instance data and time series modeling technique to optimize the automation processes, such as backups and restores, for ServiceNow instances, leading to substantial reductions in execution times to about 63% and improved operational efficiency.",
            "Developed 100% automated Service Usage and Health Analytics (SUHA) dashboards for team-owned services, enabling real-time monitoring of crucial parameters such as service load and request volume. Utilized Impala SQL to extract and transform data from our extensive data storage infrastructure."
        ]
    },
    {
        "Title": "Placement Coordinator",
        "Company name": "Chaitanya Bharathi Institute Of Technology",
        "Start date": "April 2021",
        "End date": "July 2022",
        "Description": [
            "Efficiently managed student placement records and internship opportunities, delivering regular reports to the department head. Orchestrated on-campus recruitment events, including job fairs and company presentations, facilitating valuable connections between students and potential employers.",
            "Offered comprehensive support to students during the placement process, encompassing resume and cover letter crafting, interview readiness, and effective job search strategies. Resulted in a remarkable increase of over 100 placements within the computer science department compared to the previous year."
        ]
    },
    {
        "Title": "Software Engineer Intern",
        "Company name": "Advance Auto Parts India",
        "Start date": "April 2021",
        "End date": "July 2021",
        "Description": [
            "Created a user-friendly front-end component that streamlined vendor item requests and approval workflows, including L1 and L2 approvals. Utilized ag-grid to provide robust data management capabilities, enhancing data accessibility and facilitating efficient decision-making for requesters and approvers.",
            "Authored a suite of API tests to guarantee the system's precision, covering Okta authentication, retrieval of user information, service integrations. These tests ensured a reliable and accurate system performance."
        ]
    },
    {
        "Title": "Full Stack Web Development Intern",
        "Company name": "Practo",
        "Start date": "May 2020",
        "End date": "June 2020",
        "Description": [
            "Developed a user-friendly diagnostic test ordering application that reduced paperwork by 75% by allowing doctors to upload prescriptions digitally, streamlining the process and enhancing eco-friendliness.",
            "Independently led database design, wireframing, cross-browser testing, and security enhancements, actively incorporating valuable feedback from a mentor. This ensured the development of a responsive and secure web application meeting industry standards."
        ]
    }
];

const Experience = () => {
    return (
        <>
            <h3 className="uppercase tracking-[11px] text-center font-semibold text-gray-800 dark:text-gray-100 text-2xl pl-[11px] mb-9">
                Experience
            </h3>
            <ol className="relative border-l-2 border-gray-300 dark:border-gray-600">
                {experiences.map((experience, index) => (
                    <Position experience={experience} key={index} />
                ))}
            </ol>
        </>
    )
}

export default Experience;