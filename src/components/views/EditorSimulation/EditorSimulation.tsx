'use client'

import {
    Array,
    Builtin,
    Failed,
    FunctionCall,
    FunctionInit,
    Import,
    Loop,
    Region,
    Type,
    VariableGet,
    VariableInit,
    VariableSet
} from "@/components/atoms/AmberSyntax/AmberSyntax";
import citiesMap from "./cities.json";
import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./EditorSimulation.module.css";
import Image from "next/image";
import iconAmberFile from "@/../public/icons/amber-file.svg";
import iconTerminal from "@/../public/icons/terminal.svg";

const getShellPromptCode = () => (
    <>
        <span className={styles.primary}>amber </span>
        <span className={styles.secondary}>run </span>
        script.ab
        <br />
    </>
);

const getNewCities = () => {
    const cities = citiesMap.cities;
    const newCities = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * cities.length);
        newCities.push(cities[randomIndex]);
    }
    return newCities;
}

export default function EditorSimulation() {
    const [isTermOpen, setIsTermOpen] = useState(false);
    const [shellCode, setShellCode] = useState<ReactNode[]>([]);
    const [inputValues, setInputValues] = useState<string[]>([]);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const outputRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setInputValues(getNewCities());
    }, [])

    const getWeather = async (input: string[]) => {
        setShellCode((prev) => [
            ...prev,
            <>
                <div className={styles.loading} />
            </>,
        ]);
        const temperatures: React.ReactNode[] = [];
        for (const city of input) {
            try {
                const res = await fetch(`https://wttr.in/${city}?format=3`);
                const result = await res.text();
                temperatures.push(<div>{result}</div>);
            } catch {
                temperatures.push(<div>Error: Failed to get weather for {city}</div>);
            }
        }
        setShellCode((prev) => [
            ...prev.slice(0, prev.length - 1),
            <>
                {temperatures}
                <span className={styles.prompt}>$ </span>
            </>,
        ]);
    }

    const runScript = async (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        if (isRunning) return;
        setIsRunning(true);
        setIsTermOpen(true);
        setShellCode((prev) => [...prev, getShellPromptCode()]);
        await getWeather(inputValues);
        setInputValues(getNewCities());
        setIsRunning(false);
    };

    return <>
        <h1 className={styles.title}>See it in action</h1>
        <div className={[styles.container, isTermOpen && styles['term-open']].filter(Boolean).join(' ')}>
            <div className={styles.apps}>
                <div className={styles.editor}  onClick={() => setIsTermOpen(false)}>
                    <div className={styles.code}>
                        <Import functions={["join"]} from="std/text" />
                        <br />
                        <FunctionInit
                            name="get_weather"
                            args={[{ name: "cities", type: "[Text]" }]}
                            returnType="Null"
                        >
                            <VariableInit name="temperatures">
                                <Type text="[Text]" />
                            </VariableInit>
                            <Loop variable="city" iterable="cities">
                                <VariableInit name="result" isConst>
                                    <Region
                                        text={[
                                            '$ curl -s "https://wttr.in/',
                                            '?format=1" $',
                                        ]}
                                        inter={[<VariableGet name="city" key="city" />]}
                                    />
                                    <Failed>
                                        <Builtin name="echo">
                                            <Region
                                                text={['"Error: Failed to get weather for ', '"']}
                                                inter={[<VariableGet name="city" key="city" />]}
                                            />
                                        </Builtin>
                                        <Builtin name="continue" />
                                    </Failed>
                                </VariableInit>
                                <VariableSet name="temperatures" op="+=">
                                    <Array>
                                        <VariableGet name="result" />
                                    </Array>
                                </VariableSet>
                            </Loop>
                            <Builtin name="return">
                                <VariableGet name="temperatures" />
                            </Builtin>
                        </FunctionInit>
                    </div>
                    <div className={[styles.run, isRunning && styles.running].join(' ')} onClick={(event) => runScript(event)}>
                        <FunctionCall name="get_weather">
                            <Array>
                                {inputValues.map((city, i) => (
                                    <Region text={[`"${city}"`]} key={i} />
                                ))}
                            </Array>
                        </FunctionCall>
                    </div>
                </div>
                <div className={styles.terminal} onClick={() => setIsTermOpen(true)}>
                    <div className={styles.output} ref={outputRef}>
                        {shellCode.length === 0 ? <>
                            <span className={styles.prompt}>$ </span>
                            <i>Click: </i>
                            <div className={styles.button} onClick={(event) => runScript(event)}>
                                <FunctionCall name="get_weather">
                                    <Array>
                                        {inputValues.map((city, i) => (
                                            <Region text={[`"${city}"`]} key={i} />
                                        ))}
                                    </Array>
                                </FunctionCall>
                            </div>
                            <i> to run the function </i>
                        </> : <>
                            <span className={styles.prompt}>$ </span>
                            {shellCode}
                        </>}
                    </div>
                </div>
            </div>
            <div className={styles.dock}>
                <div className={[styles.icon, !isTermOpen && styles.selected].join(' ')} onClick={() => setIsTermOpen(false)}>
                    <Image src={iconAmberFile} alt="Amber File Icon" style={{ width: '100%', height: '100%' }} />
                </div>
                <div className={[styles.icon, isTermOpen && styles.selected].join(' ')} onClick={() => setIsTermOpen(true)}>
                    <Image src={iconTerminal} alt="Terminal Icon" style={{ width: '100%', height: '100%' }} />
                </div>
            </div>
        </div>
    </>;
}
