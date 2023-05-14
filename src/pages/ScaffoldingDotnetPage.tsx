import SyntaxHighlighter from "react-syntax-highlighter";
import PageTitle from "../components/PageTitle";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const createDirectory = `$ mkdir TodoList
$ cd TodoList`;

const createSrcDirectory = `$ mkdir src
$ cd src`;

const createTodoApi = `$ dotnet new webapi --name TodoApi
$ cd ..
$ dotnet sln add src/TodoApi/TodoApi.csproj
`;

const createConsoleApp = `$ cd src
$ dotnet new console --name todo
$ cd ..
$ dotnet sln add src/todo/todo.csproj `;

const ScaffoldingDotnetPage = () => {
    return (
        <div className="bg-develgo-blue">
            <PageTitle title="Scaffolding a solution using the dotnet CLI" />
            <div className="container mx-auto p-4">
                <div>Creating a solution using an IDE like Visual Studio is the common approach to creating a new solution. However, Microsoft also provides us with the dotnet CLI, which enables us to do things like create a new solutions, projects, and add projects to solutions as well as nuget packages to projects.</div>
                <div>The question to ask is, why would you want to do this? There could be many reasons, including the ability to script the scaffolding for a solution, which doesn't tie it to any IDE. </div>

                <br />
                <div className="bg-slate-900/50 p-4 rounded-2xl">
                    <div className="mb-1">Create a new directory can switch to the directory that you just created.</div>
                    <SyntaxHighlighter language='bash' style={dark}>
                        {createDirectory}
                    </SyntaxHighlighter>
                </div>

                <br />
                <div className="bg-slate-900/50 p-4 rounded-2xl">
                    <div className="mb-1">Initialize an empty git repository.</div>
                    <SyntaxHighlighter language='bash' style={dark}>
                        $ git init
                    </SyntaxHighlighter>
                </div>

                <br />
                <div className="bg-slate-900/50 p-4 rounded-2xl">
                    <div className="mb-1">The dotnet CLI has an easy way to create a gitignore file.</div>
                    <SyntaxHighlighter language='bash' style={dark}>
                        $ dotnet new gitignore
                    </SyntaxHighlighter>
                </div>

                <br />
                <div className="bg-slate-900/50 p-4 rounded-2xl">
                    <div className="mb-1">Create an empty solution file named TodoList.</div>
                    <SyntaxHighlighter language='bash' style={dark}>
                        $ dotnet new sln --name TodoList
                    </SyntaxHighlighter>
                </div>

                <br />
                <div className="bg-slate-900/50 p-4 rounded-2xl">
                    <div className="mb-1">I like putting all of my projects in a src directory, and having the solution file in the root.</div>
                    <SyntaxHighlighter language='bash' style={dark}>
                        {createSrcDirectory}
                    </SyntaxHighlighter>
                </div>

                <br />
                <div className="bg-slate-900/50 p-4 rounded-2xl">
                    <div className="mb-1">Create a TodoApi Web API project, and add it to the solution.</div>
                    <SyntaxHighlighter language='bash' style={dark}>
                        {createTodoApi}
                    </SyntaxHighlighter>
                </div>

                <br />
                <div className="bg-slate-900/50 p-4 rounded-2xl">
                    <div className="mb-1">Create a todo Console project, and add it to the solution.</div>
                    <SyntaxHighlighter language='bash' style={dark}>
                        {createConsoleApp}
                    </SyntaxHighlighter>
                </div>

                <br />
                Now once you open the solution file in an IDE of your choice, it will have the two project files in it. This is just the tip of the iceberg when it comes to the dotnet CLI. Take a look at the documentation to learn about all of the other commands contained in the CLI which includes everything from adding and/or creating nuget packages to publishing and executing projects.
                <br />
                Check out the <a target="_blank" rel="noreferrer" className="underline hover:decoration-2" href="https://learn.microsoft.com/en-us/dotnet/core/tools/">.NET CLI overview</a> for further reading.
            </div>
        </div>
    );
};

export default ScaffoldingDotnetPage;