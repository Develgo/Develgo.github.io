import CommandPalette, { CommandDescription } from "../components/CommandPalette";
import PageTitle from "../components/PageTitle";

const getSetupAndInitCommands = (): CommandDescription[] => {
    return [
        {
            command: `git config --global user.name "[firstName lastName]"`,
            description: "set a name that is identifiable for credit when review version history"
        },
        {
            command: `git config --global user.email "[valid-email]"`,
            description: "set an email address that will be associated with each history marker"
        },
        {
            command: 'git init',
            description: "initialize an existing directory as a git repository"
        },
        {
            command: 'git clone [url]',
            description: "retrieve an entire repository from a hosted location via URL"
        }
    ];
}

const GitPage = () => {
    return (
        <div className="bg-develgo-blue">
            <PageTitle title="Getting a handle on git in the terminal" />
            <div className="flex flex-wrap container mx-auto p-4 gap-4">
                <div>
                    <div>Git is an open source distributed version control system. There are several GUI applications that you can use to manage a git repository, but knowing how to work with git in the terminal can be quite powerful and efficient.</div>
                    <div>This is a cheat sheet with some of the most commonly used git commands for easy reference.</div>
                </div>
                <CommandPalette title="Setup & Init" description="Configuring user information, initializing and cloning repositories" commandSource={getSetupAndInitCommands} />
            </div>
        </div>
    );
}

export default GitPage;