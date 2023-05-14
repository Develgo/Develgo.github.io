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

const MongoDbPage = () => {
    return (
        <div className="bg-develgo-blue">
            <PageTitle title="Creating a Todo List with .NET and MongoDB" />
            <div className="container mx-auto p-4">
                <div>In this tutorials we're going to cover a lot of fundamentals, which include:</div>
                <ul className="list-disc ml-4">
                    <li>Using the dotnet CLI to create a new solution and projects</li>
                    <li>Creating a Web API</li>
                    <li>MongoDB CRUD operations with the .NET driver</li>
                    <li>Creating a console app, with an interactive CLI</li>
                </ul>

                <br />
                <div>Create a new directory</div>
                <SyntaxHighlighter language='bash' style={dark}>
                    {createDirectory}
                </SyntaxHighlighter>

                <br />
                <div>Create an empty git repository</div>
                <SyntaxHighlighter language='bash' style={dark}>
                    $ git init
                </SyntaxHighlighter>

                <br />
                <div>Create a .NET gitignore file</div>
                <SyntaxHighlighter language='bash' style={dark}>
                    $ dotnet new gitignore
                </SyntaxHighlighter>

                <br />
                <div>Create a .NET solution file</div>
                <SyntaxHighlighter language='bash' style={dark}>
                    $ dotnet new sln --name TodoList
                </SyntaxHighlighter>

                <br />
                <div>Create a src directory</div>
                <SyntaxHighlighter language='bash' style={dark}>
                    {createSrcDirectory}
                </SyntaxHighlighter>

                <br />
                <div>Create a TodoApi Web API project, and add it to the solution</div>
                <SyntaxHighlighter language='bash' style={dark}>
                    {createTodoApi}
                </SyntaxHighlighter>

                <br />
                <div>Create a todo Console project, and add it to the solution</div>
                <SyntaxHighlighter language='bash' style={dark}>
                    {createConsoleApp}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default MongoDbPage;