const Footer = () => {
    const year = (): number => {
        const date = new Date();
        return date.getFullYear();
    };

    return (
        <div className="bg-slate-900">
            <div className="container mx-auto py-20 text-center">
            © {year()} <span className="font-bold">Nitesh Maharaj</span>. All Rights Reserved.
            </div>
        </div>
    );
}

export default Footer;