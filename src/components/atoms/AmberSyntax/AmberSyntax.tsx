import React from "react";
import styles from "./AmberSyntax.module.css";

export function Import({ functions, from }: { functions: string[], from: string }) {
    return <div>
        <span className={styles.keyword}>import </span>
        <span className={styles.delimiter}>{'{ '}</span>
        {functions.map((func, i) => (
            <span key={i} className={styles.ident}>{func}{i < functions.length - 1 && <span className={styles.delimiter}>, </span>}</span>
        ))}
        <span className={styles.delimiter}>{' }'} </span>
        <span className={styles.keyword}>from </span>
        <Region text={[`"${from}"`]} />
    </div>
}

interface FunctionArg {
    name: string;
    type?: string;
}

interface FunctionInitProps {
    name: string;
    args: FunctionArg[];
    returnType?: string;
    children?: React.ReactNode;
}

export function FunctionInit({ name, args, returnType, children }: FunctionInitProps) {
    return <>
        <span className={styles.keyword}>fun </span>
        <span className={styles.function}>{name}</span>
        <span className={styles.delimiter}>(</span>
        {args.map((arg, i) => (
            <span key={i}>
                <span className={styles.ident}>{arg.name}</span>
                {arg.type && <>
                    <span className={styles.delimiter}>: </span>
                    <span className={styles.type}>
                        <Type text={arg.type} />
                    </span>
                </>}
                {i < args.length - 1 && <span className={styles.delimiter}>, </span>}
            </span>
        ))}
        <span className={styles.delimiter}>)</span>
        {returnType && <>
            <span className={styles.delimiter}>: </span>
            <span className={styles.type}>
                <Type text={returnType} />
            </span>
        </>}
        &nbsp;
        <Block>
            {children}
        </Block>
    </>
}

export function FunctionCall({ name, children }: { name: string, children?: React.ReactNode }) {
    return <>
        <span className={styles.function}>{name}</span>
        <span className={styles.delimiter}>(</span>
        {React.Children.map(children, (child, i) => (
            <span key={i}>
                {child}
                {i < React.Children.count(children) - 1 && <span className={styles.delimiter}>, </span>}
            </span>
        ))}
        <span className={styles.delimiter}>)</span>
    </>
}

export function VariableInit({ name, isConst = false, children }: { name: string, isConst?: boolean, children: React.ReactNode }) {
    return <>
        <span className={styles.keyword}>{isConst ? "const" : "let"} </span>
        <span className={styles.ident}>{name}</span>
        <span className={styles.delimiter}> = </span>
        {children}
    </>
}

export function VariableSet({ name, op = "=", children }: { name: string, op?: string, children: React.ReactNode }) {
    return <>
        <span className={styles.ident}>{name}</span>
        <span className={styles.delimiter}> {op} </span>
        {children}
    </>
}

export function VariableGet({ name }: { name: string }) {
    return <>
        <span className={styles.ident}>{name}</span>
    </>
}

export function Block({ children }: { children: React.ReactNode }) {
    return <>
        <span className={styles.delimiter}>{'{'}</span>
        {React.Children.map(children, (child) => (
            <div className={styles.indent}>{child}</div>
        ))}
        <span className={styles.delimiter}>{'}'}</span>
    </>;
}

export function Array({ children }: { children: React.ReactNode }) {
    return <>
        <span className={styles.delimiter}>[</span>
        {React.Children.map(children, (child, i) => <>
            {child}
            {i < React.Children.count(children) - 1 && <span className={styles.delimiter}>, </span>}
        </>)}
        <span className={styles.delimiter}>]</span>
    </>;
}

export function Loop({ variable, iterable, children }: { variable?: string, iterable?: string, children: React.ReactNode }) {
    if (!variable || !iterable) {
        return <>
            <span className={styles.keyword}>loop </span>
            <Block>
                {children}
            </Block>
        </>
    }

    return <>
        <span className={styles.keyword}>for </span>
        <span className={styles.ident}>{variable}</span>
        <span className={styles.keyword}> in </span>
        <span className={styles.ident}>{iterable} </span>
        <Block>
            {children}
        </Block>
    </>
}

export function Region({ text, inter }: { text: string[], inter?: React.ReactNode[] }) {
    const result = []
    for (let i = 0; i < text.length + (inter?.length ?? 0); i++) {
        if (i % 2 === 0) {
            result.push((
                <span className={styles.region}>{text[Math.floor(i / 2)]}</span>
            ));
        } else {
            if (inter) {
                result.push(<>
                    <span className={styles.delimiter}>{"{"}</span>
                    {inter[Math.floor(i / 2)]}
                    <span className={styles.delimiter}>{"}"}</span>
                </>);
            } else {
                result.push((
                    <span className={styles.delimiter}>{"{}"}</span>
                ));
            }
        }
    }
    return result
}

export function Failed({ children }: { children: React.ReactNode }) {
    return <>
        <span className={styles.keyword}> failed </span>
        <Block>
            {children}
        </Block>
    </>
}

export function Builtin({ name, children }: { name: string, children?: React.ReactNode }) {
    return <>
        <span className={styles.keyword}>{name} </span>
        {children}
    </>
}

export function Type({ text }: { text: string }) {
    const isFailable = text.endsWith("?");
    if (isFailable) {
        text = text.slice(0, -1);
    }
    if (text.startsWith("[") && text.endsWith("]")) {
        return (
            <span className={styles.type}>
                <span className={styles.delimiter}>[</span>
                <span>{text.slice(1, -1)}</span>
                <span className={styles.delimiter}>]</span>
                {isFailable && <span className={styles.delimiter}>?</span>}
            </span>
        );
    }
    return <>
        <span className={styles.type}>{text}</span>
        {isFailable && <span className={styles.delimiter}>?</span>}
    </>;
}
