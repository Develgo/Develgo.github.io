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
                    <img className="h-32" src="react.svg" alt="react" />
                    <img className="h-32" src="github.svg" alt="github" />
                    <img className="h-32" src="html5.svg" alt="html5" />
                    <img className="h-32" src="css3.svg" alt="css3" />
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );
};

export default HomePage;