interface PageTitleProps {
    title: string;
}

const PageTitle = (props: PageTitleProps) => {
    return (
        <div className="bg-gradient-to-r from-slate-900 to-develgo-blue">
            <div className="container mx-auto font-white text-2xl font-bold p-4">
                {props.title}
            </div>
        </div>
    );
}

export default PageTitle;