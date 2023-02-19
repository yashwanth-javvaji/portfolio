import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import moment from "moment";

export default function ContainerBlock({ children, ...customMeta } : any) {
    const router = useRouter();

    const meta = {
        title: "Yashwanth Javvaji - Portfolio",
        description: "As a highly motivated and detail-oriented individual, I have a passion for computer science and am constantly seeking to expand my knowledge and skills in the field. With a Master of Science in Computer Science from The University of Texas at Dallas, I have gained expertise in areas such as software engineering, data science, and machine learning. Through my experiences in various projects and internships, I have developed strong problem-solving and critical thinking abilities, as well as excellent communication and collaboration skills. Currently, I am seeking opportunities to apply my skills and knowledge in a challenging and dynamic environment. I am interested in pursuing roles in software engineering, data science, and machine learning, and I am open to internships, co-op positions, and full-time roles.",
        image: "/avatar.png",
        type: "website",
        date: moment().format("MM-DD-YYYY"),
        ...customMeta,
    };
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={`https://yourwebsite.com${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://yourwebsite.com${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <main className="bg-gray-100 dark:bg-gray-800 w-full">
                <Navbar />
                <div>{children}</div>
            </main>
        </div>
    );
}