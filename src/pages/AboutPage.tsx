const AboutPage = () => {
    const workedAtEntelect = () => {
        const entelectStart = new Date("2019-12-01").getTime();
        const today = new Date().getTime();
        const diff = new Date(today - entelectStart);
        const inception = new Date(0);
        const months = diff.getMonth() - inception.getMonth() + 1;
        const years = diff.getFullYear() - inception.getFullYear();
        if (years <= 1) {
            return "[I'd tell you, but your date is in the past]";
        }
        if (months >= 6) {
            return `${years} and a half`;
        }
        return `${years}`;
    }
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-500 to-rose-500 p-4">
                <div className="flex flex-wrap container mx-auto p-4 justify-center">
                    <img className="w-64 h-64 rounded-full mr-4 mb-4" src="nitesh_profile.jpeg" alt="Nitesh" />
                    <div className="self-center text-5xl font-black">
                        <div>Contributing to society</div>
                        <div>through technology</div>
                        <div>and leadership</div>
                    </div>
                </div>
                <div className="container mx-auto flex justify-center pb-4">
                    <div>
                        <div>Hi, I'm Nitesh Maharaj, a technology professional from South Africa.</div>
                        <div>As a software engineer, I work with my team and the client to build solutions.</div>
                        <div>As a team leader, I ensure that everyone on my team has the opportunity to grow.</div>
                        <br />
                        <div>My passion for programming was sparked the first time I ran a Pascal</div>
                        <div>program on a 386 machine at the age of 12. I was fascinated by the</div>
                        <div>ability to control what gets printed to the screen.</div>
                        <br />
                        <div>From Visual Basic 6 to C# on .NET. From Windows applications on the desktop to</div>
                        <div>web based applications in the cloud, I had the opportunity to hone my craft in</div>
                        <div>a constantly changing technology ecosystem surrounded by brilliant minds.</div>
                        <br />
                        <div>I enjoy taking on big problems, and creating customer-centric solutions.</div>
                        <div>Being able to communicate with technical teams as well as business leaders,</div>
                        <div>I've been able to bridge the divide between requirements and successful delivery.</div>
                        <div>My curiousity ensures that I'm always learning.</div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-300 text-slate-900">
                <div className="flex flex-wrap container mx-auto p-4 justify-center">
                    <div className="self-center">
                        <div className="text-3xl font-bold">Entelect</div>
                        <div>I spent over {workedAtEntelect()} years at Entelect.</div>
                        <div>In that time, I've had the opportunity to work with various clients,</div>
                        <div>in a software engineering and team lead capacity.</div>
                        <br />
                        <div>Entelect is a unique place, where I've been able to</div>
                        <div>flourish as a technology specialist, as well as a leader.</div>
                        <div>I've had the fortune of being exposed to several different</div>
                        <div>technology stacks working on multiple projects with different teams.</div>
                        <br />
                        <div>Read more about my career on <a className="underline hover:decoration-2" href="https://www.linkedin.com/in/nitesh-maharaj-5b32b594/" target="_blank" rel="noreferrer">LinkedIn</a></div>
                    </div>

                    <img src="entelect-logo.png" className="ml-4 w-64 h-64" alt="entelect" />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;