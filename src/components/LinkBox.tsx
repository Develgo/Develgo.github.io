import { Link } from "react-router-dom";

interface LinkBoxDetails {
    className: string;
    destination: string;
    tag: string;
    children: any;
}

const LinkBox = (props: LinkBoxDetails) => {
    return (
        <Link className="hover:mix-blend-luminosity" to={props.destination}>
            <div className={`relative w-64 h-64 develgo-box ${props.className} p-8`}>
                <div className="text-2xl font-bold">
                    {props.children}
                </div>
                <div className="absolute bottom-8 right-8 bg-slate-900 opacity-50 p-1 rounded font-mono">{props.tag}</div>
            </div>
        </Link>
    );
}

export default LinkBox;