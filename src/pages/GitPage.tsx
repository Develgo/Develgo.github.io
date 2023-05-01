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

const getStageAndSnapshot = (): CommandDescription[] => {
    return [
        {
            command: 'git status',
            description: "show modified files in working directory, staged for your next commit"
        },
        {
            command: 'git add [file]',
            description: "add a file as it looks now to your next commit (stage)"
        },
        {
            command: 'git reset [file]',
            description: "unstage a file while retaining the changes in the working directory"
        },
        {
            command: 'git diff',
            description: "diff of what is changed but not staged"
        },
        {
            command: 'git diff --staged',
            description: "diff of what is staged but not yet committed"
        },
        {
            command: 'git commit -m "[descriptive message]"',
            description: "commit your staged content as a new commit snapshot"
        }
    ];
}

const getBranchAndMerge = (): CommandDescription[] => {
    return [
        {
            command: 'git branch',
            description: "list your branches. a * will appear next your currently active branch"
        },
        {
            command: 'git branch [branch-name]',
            description: "create a new branch at the current commit"
        },
        {
            command: 'git checkout',
            description: "switch to another branch and check it out inot your working directory"
        },
        {
            command: 'git merge [branch]',
            description: "merge the specific branch's history into the current one"
        }
    ];
}

const getInspectAndCompare = (): CommandDescription[] => {
    return [
        {
            command: 'git log',
            description: "show the commit history for the currently active branch"
        },
        {
            command: 'git log branchB..branchA',
            description: "show the commits in branchA that are not on branchB"
        },
        {
            command: 'git log --follow [file]',
            description: "show commits that changed file, even across renames"
        },
        {
            command: 'git diff branchB..branchA',
            description: "show the diff of what is in branchA that is not in branchB"
        },
        {
            command: 'git show [SHA]',
            description: "show any object in git in human-readable format"
        }
    ];
}

const getShareAndUpdate = (): CommandDescription[] => {
    return [
        {
            command: 'git remote add [alias] [url]',
            description: "add a git url as an alias"
        },
        {
            command: 'git fetch [alias]',
            description: "fetch all the branches from that git remote"
        },
        {
            command: 'git merge [alias]/[branch]',
            description: "merge a remote branch into your current branch to bring it update to date"
        },
        {
            command: 'git push [alias] [branch]',
            description: "transmit local branch commits to the remote repository branch"
        },
        {
            command: 'git pull',
            description: "fetch and merge any commits from the tracking remote branch"
        }
    ];
}

const getTrackingPathChanges = (): CommandDescription[] => {
    return [
        {
            command: 'git rm [file]',
            description: "delete the file from project and stage the removal for commit"
        },
        {
            command: 'git mv [existing-path] [new-path]',
            description: "change an existing file path and stage the move"
        },
        {
            command: 'git log --stat -M',
            description: "show all commit logs with indiciation of any paths that moved"
        }
    ];
}

const getRewrteHistory = (): CommandDescription[] => {
    return [
        {
            command: 'git rebase [branch]',
            description: "apply any commits of current branch ahead of specified one"
        },
        {
            command: 'git reset --hard [commit]',
            description: "clear staging area, rewrite working tree from specified commit"
        }
    ];
}

const getTemporaryCommits = (): CommandDescription[] => {
    return [
        {
            command: 'git stash',
            description: "Save modified and staged changes"
        },
        {
            command: 'git stash list',
            description: "list stack-order of stashed file changes"
        },
        {
            command: 'git stash pop',
            description: "write working from top of stash stack"
        },
        {
            command: 'git stash drop',
            description: "discard the changes from top of stash stack"
        }
    ];
}

const GitPage = () => {
    return (
        <div className="bg-develgo-blue">
            <PageTitle title="Getting a handle on git in the terminal" />
            <div className="flex flex-wrap container mx-auto p-4 gap-4 justify-center">
                <div>
                    <div>Git is an open source distributed version control system. There are several GUI applications that you can use to manage a git repository, but knowing how to work with git in the terminal can be quite powerful and efficient.</div>
                    <div>This is a cheat sheet with some of the most commonly used git commands for easy reference.</div>
                </div>
                <CommandPalette title="Setup & Init" description="Configuring user information, initializing and cloning repositories" commandSource={getSetupAndInitCommands} />
                <CommandPalette title="Stage & Snapshot" description="Working with snapshots and git staging area" commandSource={getStageAndSnapshot} />
                <CommandPalette title="Branch & Merge" description="Isolating the working branches, changing context, and integrating changes" commandSource={getBranchAndMerge} />
                <CommandPalette title="Inspect & Compare" description="Examining logs, diffs and object information" commandSource={getInspectAndCompare} />
                <CommandPalette title="Share & Update" description="Retrieving updates from antoher repository and updating local repos" commandSource={getShareAndUpdate} />
                <CommandPalette title="Tracking Path Changes" description="Versioning file removes and path changes" commandSource={getTrackingPathChanges} />
                <CommandPalette title="Rewrite History" description="Rewriting branches, updating commits and clearing history" commandSource={getRewrteHistory} />
                <CommandPalette title="Temorary Commits" description="Temporarily store modified, tracked files in order to change branches" commandSource={getTemporaryCommits} />
            </div>
        </div>
    );
}

export default GitPage;