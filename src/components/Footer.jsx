const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className="flex items-start justify-between px-24 py-36 mob:px-10 mob:flex-col-reverse mob:gap-10 mob:items-center">
            <div className="textAcorn text-2xl mob:text-xl">
                <h1> &copy; {year} Abdullah ElMetwali</h1>
            </div>
            <div className="flex gap-16">
                <div>
                    <h1 className="textAcorn text-2xl mob:text-xl tracking-wide">Thereabouts</h1>
                    <div className="my-2 textUbuntu text-xl">
                        <ul>
                            <li><a target="_blank" href="https://www.linkedin.com/in/abdullahelmetwali/" className="opacity-70 hover:opacity-100">LinkedIn</a></li>
                            <li><a target="_blank" href="https://github.com/abdullahelmetwali" className="opacity-70 hover:opacity-100">Github</a></li>
                            <li><a target="_blank" href="https://read.cv/abdullahelmetwali" className="opacity-70 hover:opacity-100">CV</a></li>
                            <li><a target="_blank" href="https://x.com/AbdullahAmrz" className="opacity-70 hover:opacity-100">X</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className="textAcorn text-2xl tracking-wide mob:text-xl">Correspondence</h1>
                    <ul className="mt-4 textUbuntu text-xl">
                        <li><a className="opacity-70 hover:opacity-100" target="_blank" href="mailto:abdullahelmetwali@gmail.com" >Message</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer