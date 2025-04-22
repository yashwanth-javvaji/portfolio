
import Position from "~/components/Position";

const experiences = [
    {
        "Title": "Software Dev Engineer",
        "Company name": "Amazon",
        "Start date": "Feb 2025",
        "End date": "Present",
        "Description": [
            "Built Nexus, a real-time data engine using AWS Neptune, consolidating multiple data streams and enabling millisecond-level query responses. Eliminated the need for individual data pipelines, reducing development effort and improving efficiency for Workforce Staffing and Talent Acquisition systems.",
            "Developed a GenAI Proof of Concept (POC) for Nexus using GraphRAG, enabling natural language queries with 90%+ accuracy, improving accessibility to real-time workforce data."
        ]
    },
    {
        "Title": "Software Dev Engineer",
        "Company name": "Amazon Web Services (AWS)",
        "Start date": "May 2024",
        "End date": "Feb 2025",
        "Description": [
            "Led AppSec process for Inventory Management System (IMS) Phase 1 & 2 launches, ensuring compliance with Baseline Security Controls (BSCs) and mitigating critical security threats. Designed the threat model, pen-test scoping document, and security reviews, enabling a secure go-live.",
            "Developed AWS CDK infrastructure for the IMS Regional Replicator (IRR), enabling real-time synchronization of 20M+ inventory records across Aurora RDS, DMS, Kinesis, Lambda, and IMS APIs. Ensured secure cross-service communication and 99.99% data consistency across regions.",
            "Implemented robust input data validation across all IMS APIs, preventing malicious data entry and potential data corruption. Designed regex-based static validations and cross-service dynamic checks, ensuring compliance and data integrity.",
            "Added non-serialized inventory support to IMS, filling a major functional gap overlooked by the legacy system. Conducted extensive workflow analysis and edge case testing, improving operational efficiency for thousands of daily transactions.",
            "Extended IMS to support Pallets and Totes, enabling IMS to manage millions of containerized inventory movements daily. Integrated dependency services for hierarchical container tracking, ensuring 100% accuracy in inventory operations for Create, Pick, Stow, and Consume workflows.",
            "Implemented attribute change tracking for audit purposes by developing a historical diff-writing mechanism. Logged the modifications, enhancing transparency and compliance."
        ]
    },
    {
        "Title": "Software Engineer Intern",
        "Company name": "Tesla",
        "Start date": "Jan 2024",
        "End date": "May 2024",
        "Description": [
            "Developed a unified document generation system, replacing multiple disconnected systems for Bill of Lading, Inspection Checklists, Invoices, and more. Designed document templates and APIs to streamline and standardize document creation.",
            "Automated ZPL-to-PDF conversion and printing, removing the need for manual processing. Built a system that automatically detects ZPL labels, converts them to PDFs, and sends them directly to printers, improving processing speed by 60%.",
            "Implemented internationalization in the Angular frontend, enabling localization in 5 languages and enhancing the document generation system's adaptability for global teams, improving accessibility for thousands of users."
        ]
    },
    {
        "Title": "Software Engineer Intern",
        "Company name": "Tesla",
        "Start date": "August 2023",
        "End date": "Jan 2024",
        "Description": [
            "Developed and maintained production-critical code for the Material Flow System (MFS) at Giga Texas, ensuring seamless manufacturing of 5,000 Model Y's and 1,000 Cybertrucks per week with zero downtime.",
            "Designed and implemented an Order Troubleshooting System within MFS, reducing troubleshooting time by 90% by enabling real-time tracking of production flows, validating demand configurations, and ensuring accurate station signal transmission. The system provides a detailed checklist with success/failure statuses and root-cause analysis, accelerating support resolution and optimizing production efficiency.",
            "Enhanced Gantry Unload functionality, improving container scan accuracy through real-time session tracking, conflict detection, and progress indicators for scanned containers, leading to smoother operations and fewer material handling errors."
        ]
    },
    {
        "Title": "Software Dev Engineer Intern",
        "Company name": "Amazon Web Services (AWS)",
        "Start date": "May 2023",
        "End date": "August 2023",
        "Description": [
            "Designed and implemented a Validation Lambda function enabling secure file-based communication between customers and partners within the AWS Supply Chain. This system validates shared artifacts against predefined rules, enhancing data integrity, compliance, and efficiency in various supply chain processes such as invoicing.",
            "Utilized Amazon's Evidently tool for A/B testing, providing data-driven insights, including request response time. Analyzed 1000+ requests, optimizing performance and reliability. Implemented a feature toggle for dynamic enablement or disablement, reducing deployment risks and improving rollout efficiency.",
            "Resolved 2 critical policy engine issues in artifacts service code pipeline: Added bake time approval for production stages, ensuring careful monitoring for slow-burning impacts post-deployment, preventing adverse effects across regions; Restructured the pipeline to feature separate stages for each AWS region, ensuring regional isolation, geographical redundancy, and efficient management of region-specific configurations, enhancing deployment resilience and accuracy."
        ]
    },
    {
        "Title": "Student Assistant",
        "Company name": "The Erik Jonsson School of Engineering and Computer Science at UT Dallas",
        "Start date": "February 2023",
        "End date": "March 2023",
        "Description": [
            "Collaborated with a research team to develop a Neural Network model for detecting 5 key types of vulnerabilities in C programs: CWE-190 (integer overflow), CWE-121 (stack-based buffer overflow), CWE-122 (heap-based buffer overflow), CWE-415 (double free), and CWE-416 (use after free).",
            "Played a pivotal role by generating a dataset of over 500 vulnerable C programs and providing accurate labeling, addressing the data scarcity issue, and facilitating the training of the error identification model.",
            "Developed a comprehensive dataset by writing diverse vulnerable and non-vulnerable C programs, ensuring balanced class representation and enhancing the effectiveness of vulnerability detection."
        ]
    },
    {
        "Title": "Software Development Intern",
        "Company name": "ServiceNow",
        "Start date": "January 2022",
        "End date": "June 2022",
        "Description": [
            "Implemented an application that utilizes historical instance data and time series modeling technique to optimize the automation processes, such as backups and restores, for ServiceNow instances, leading to substantial reductions in execution times to about 63% and improved operational efficiency.",
            "Developed 100% automated Service Usage and Health Analytics (SUHA) dashboards for team owned services, enabling real-time monitoring of crucial parameters such as service load and request volume. Utilized Impala SQL to extract and transform data from our extensive data storage infrastructure.",
            "Authored comprehensive team documentation, including onboarding guides for new hires and a detailed project document for SUHA dashboards, outlining the end-to-end process of creating dashboard widgets to ensure knowledge transfer and streamlined adoption."
        ]
    },
    {
        "Title": "Placement Coordinator",
        "Company name": "Chaitanya Bharathi Institute Of Technology",
        "Start date": "April 2021",
        "End date": "July 2022",
        "Description": [
            "Managed 200+ student placement records and job opportunities, generating and delivering regular reports to the department head for informed decision-making.",
            "Organized and led on-campus recruitment events, including job fairs and company presentations, fostering strong connections between students and potential employers.",
            "Provided end-to-end support for students during the placement process, including resume and cover letter development, interview preparation, and job search strategies. This effort contributed to a increase in 100 placements within the Computer Science department compared to the previous year."
        ]
    },
    {
        "Title": "Software Engineer Intern",
        "Company name": "Advance Auto Parts India",
        "Start date": "April 2021",
        "End date": "July 2021",
        "Description": [
            "Created a user-friendly front-end component that streamlined vendor item requests and approval workflows, including L1 and L2 approvals. Utilized ag-grid to provide robust data management capabilities, enhancing data accessibility and facilitating efficient decision-making for requesters and approvers.",
            "Implemented automated tests using Jest, ensuring UI reliability and increasing test coverage to 93%, leading to a more robust and maintainable codebase.",
            "Authored a suite of postman API tests to guarantee the system's precision, covering Okta authentication, retrieval of user information, service integrations. These tests ensured a reliable and accurate system performance."
        ]
    },
    {
        "Title": "Full Stack Web Development Intern",
        "Company name": "Practo",
        "Start date": "May 2020",
        "End date": "June 2020",
        "Description": [
            "Developed a user-friendly diagnostic test ordering application that reduced paperwork by 75% by allowing doctors to upload prescriptions digitally, streamlining the process and enhancing eco-friendliness.",
            "Built an intuitive admin dashboard that reduced manual workload by 40%, enabling streamlined user management, prescription approvals, and diagnostic request tracking, minimizing administrative overhead and improving operational efficiency.",
            "Independently led database design, wire-framing, cross-browser testing, and security enhancements, actively incorporating valuable feedback from a mentor. This ensured the development of a responsive and secure web application meeting industry standards."
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