import SyntaxHighlighter from "react-syntax-highlighter";
import PageTitle from "../components/PageTitle";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SwiftMockDataProviderPage = () => {
    const resourceEnum: string = `enum Resource: String {
    case topic = "MockTopicData"
    case folder = "MockFolderData"
}`;

    const loadFile: string = `private static func loadFile<T: Decodable>(resource: Resource) -> T? {
    if let filePath = Bundle.main.url(forResource: resource.rawValue, withExtension: "json") {
        do {
            let json = try String(contentsOf: filePath)
            guard let jsonData = json.data(using: .utf8) else { return nil }
            return try? JSONDecoder().decode(T.self, from: jsonData)
        } catch {
            print ("Unable to load resource for \(resource).\\n\\(error.localizedDescription)")
        }
    }
    fatalError("Unable to load resource for \(resource).")
}`;

    const loadFolderData: string = `static func loadFolderData() -> [FolderModel]? {
    return loadFile(resource: .folder)
}`;

    return (
        <div className="bg-develgo-blue">
            <PageTitle title="Swift Mock Data Provider" />
            <div className="container mx-auto p-4">
                <div>When building a Swift app, I find the easiest way to get mock data into the app is using JSON files.</div>
                <div>I created a helper class with a generic function to decode the JSON data into the appropriate model.</div>
                
                <br />
                <div className="bg-slate-900/50 p-4 rounded-2xl">
                    <div>This is an enumeration where the value is the name of the JSON file.</div>
                    <SyntaxHighlighter language='swift' style={dark} showLineNumbers={true}>
                        {resourceEnum}
                    </SyntaxHighlighter>
                </div>

                <br />
                <div className="bg-slate-900/50 p-4 rounded-2xl">
                    <div>This is a generic function to load the content of the JSON file from the application's main bundle and then decodes it into a model.</div>
                    <SyntaxHighlighter language='swift' style={dark} showLineNumbers={true}>
                        {loadFile}
                    </SyntaxHighlighter>
                </div>

                <br />
                <div className="bg-slate-900/50 p-4 rounded-2xl">
                    <div>Finally I have a function that calls the loadFile function and returns the appropriate model type.</div>
                    <SyntaxHighlighter language='swift' style={dark} showLineNumbers={true}>
                        {loadFolderData}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export default SwiftMockDataProviderPage;
