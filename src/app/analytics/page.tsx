"use client";

import { useState, useEffect, useCallback } from "react";
import style from "./page.module.css";

const DataTable = () => {
    const [data, setData] = useState<any[]>([]);
    const [lastVisibleId, setLastVisibleId] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = useCallback(async (first = false) => {
        setLoading(true);
        try {
            const res = await fetch(
                `/api/fetch?lastVisibleId=${lastVisibleId || ""}`,
            );
            const result = await res.json();
            if (res.ok) {
                if (first)
                    setData(() => result.data);
                else
                    setData((prevData) => [...prevData, ...result.data]);
                setLastVisibleId(result.newLastVisibleId);
                setHasMore(result.data.length === 50); // If less than 50 items are returned, no more data is available
            } else {
                console.error(result.error);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
        setLoading(false);
    }, [lastVisibleId]);

    useEffect(() => {
        fetchData(true);
    }, []);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight ||
            loading ||
            !hasMore
        )
            return;
        fetchData();
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll, fetchData]);

    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1 className={style.title}>Unique user installations</h1>
                <p className={style.text}>
                    This page features publicly available data on installation instances, optionally aggregated during the installation process.
                </p>
            </div>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>OS</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className={style.name}>
                                {item.githubURL ? (
                                    <a href={item.githubURL}>{item.name}</a>
                                ) : (
                                    item.name
                                )}
                            </td>
                            <td className={style.os} {...{ os: item.os }}>{item.os}</td>
                            <td className={style.id}>{item.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={style.loading}>{loading && <p>Loading...</p>}</div>
        </div>
    );
};

export default DataTable;
