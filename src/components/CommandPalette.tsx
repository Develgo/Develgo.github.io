export interface CommandDescription {
    command: string;
    description: string;
}

interface CommandPaletteProps {
    title: string;
    description: string;
    commandSource: () => CommandDescription[];
}
const CommandPalette = (props: CommandPaletteProps) => {
    const getBackgroundColor = (line: number) => {
        return line % 2 === 0 ? "bg-slate-600" : "bg-slate-700";
    }

    const commands = props.commandSource();
    return (
        <div className="bg-slate-900/50 p-4 rounded-2xl">
            <div className="text-xl font-bold">{props.title}</div>
            <div>{props.description}</div>
            <div className="mt-4">
            {
                commands.map((c, index) => {
                    return (
                        <div className={`${getBackgroundColor(index)} p-1`} key={index}>
                            <div className="font-mono">{c.command}</div>
                            <div className="text-develgo-light-blue">{c.description}</div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

export default CommandPalette;