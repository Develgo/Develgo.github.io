import LinkBox from "../components/LinkBox";
import ProfileImage from "../components/ProfileImage";

const HomePage = () => {
    return (
        <div className="bg-hero-image bg-cover">
            <div className="flex flex-wrap container mx-auto p-4 justify-around">
                <ProfileImage />
                <div className="self-center text-5xl text-slate-900 font-black">
                    <div>Contributing to society</div>
                    <div>through technology</div>
                    <div>and leadership</div>
                </div>
            </div>
            <div className="bg-slate-900 bg-opacity-50 py-2">
                <div className="flex flex-wrap container mx-auto place-content-center justify-between">
                    <img className="h-32" src="swift.svg" alt="swift" />
                    <img className="h-32" src="angular.svg" alt="angular" />
                    <img className="h-32 apple-icon" src="react.svg" alt="react" />
                    <img className="h-32" src="github.svg" alt="github" />
                    <img className="h-32" src="html5.svg" alt="html5" />
                    <img className="h-32" src="css3.svg" alt="css3" />
                </div>
            </div>
            <div className="container flex flex-wrap justify-center mx-auto my-4 space-x-4 space-y-4 md:space-y-0">
                <LinkBox className="bg-gradient-to-r from-sky-500 to-indigo-500" destination="/git-cheat-sheet" tag="git">
                    <div>Getting a handle on <span className="font-mono">git</span> in the terminal</div>
                </LinkBox>
                <LinkBox className="bg-gradient-to-r from-violet-500 to-fuchsia-500" destination="/git-cheat-sheet" tag="leadership">
                    <div>Leading people and coaching for excellence</div>
                </LinkBox>
                <LinkBox className="bg-gradient-to-r from-green-500 to-teal-500" destination="/git-cheat-sheet" tag="reactjs">
                    <div>Creating a ReactJS app with Typescript and TailwindCSS</div>
                </LinkBox>
            </div>
            <br />
            <br />
        </div>
    );
};

export default HomePage;