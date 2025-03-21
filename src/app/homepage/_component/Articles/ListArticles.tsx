import React from "react";
import { CardArticle } from "./CardArticle";

const articles = [
    {
        title: "Richters & Hüls",
        description: "Richters & Hüls is an engineering company for environment and pollution control. Together we refreshed their corporate design and gave their website a new, modern look.",
        imageUrl: "/assets/images/ava.png",
        href: "/images/ava.png"
    },
    {
        title: "Richters & Hüls",
        description: "Richters & Hüls is an engineering company for environment and pollution control. Together we refreshed their corporate design and gave their website a new, modern look.",
        imageUrl: "/assets/images/ava.png",
        href: "/images/ava.png"
    },
    {
        title: "Richters & Hüls",
        description: "Richters & Hüls is an engineering company for environment and pollution control. Together we refreshed their corporate design and gave their website a new, modern look.",
        imageUrl: "/assets/images/ava.png",
        href: "/images/ava.png"
    },
    {
        title: "Richters & Hüls",
        description: "Richters & Hüls is an engineering company for environment and pollution control. Together we refreshed their corporate design and gave their website a new, modern look.",
        imageUrl: "/assets/images/ava.png",
        href: "/images/ava.png"
    },
    {
        title: "Richters & Hüls",
        description: "Richters & Hüls is an engineering company for environment and pollution control. Together we refreshed their corporate design and gave their website a new, modern look.",
        imageUrl: "/assets/images/ava.png",
        href: "/images/ava.png"
    },
    {
        title: "Richters & Hüls",
        description: "Richters & Hüls is an engineering company for environment and pollution control. Together we refreshed their corporate design and gave their website a new, modern look.",
        imageUrl: "/assets/images/ava.png",
        href: "/images/ava.png"
    },
    {
        title: "Richters & Hüls",
        description: "Richters & Hüls is an engineering company for environment and pollution control. Together we refreshed their corporate design and gave their website a new, modern look.",
        imageUrl: "/assets/images/ava.png",
        href: "/images/ava.png"
    },
    {
        title: "Richters & Hüls",
        description: "Richters & Hüls is an engineering company for environment and pollution control. Together we refreshed their corporate design and gave their website a new, modern look.",
        imageUrl: "/assets/images/ava.png",
        href: "/images/ava.png"
    }
];

export const ListArticles = () => (
    <div className="container mx-auto flex flex-col gap-20">
        {articles.map((article, index) => (
            <CardArticle
                key={index}
                title={article.title}
                description={article.description}
                imageUrl={article.imageUrl}
                href={article.href} />
        ))}
    </div>
);
