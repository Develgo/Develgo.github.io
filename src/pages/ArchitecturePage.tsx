import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ArchitecturePage = () => {
    const multiline: string = `public class Person { 
        public string FirstName { get; set; }
    }`;
        return (
            <div className='text-left'>Home
                <br />
                <SyntaxHighlighter language='csharp' style={dark} showLineNumbers={true}>
                    {multiline}
                </SyntaxHighlighter>
            </div>
        );
};

export default ArchitecturePage;