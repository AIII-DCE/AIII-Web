const Footer = () => {

    const socialLinks = [
        {
            img: "src/images/socials/instagram.png",
            link: "#"
        },
        {
            img: "src/images/socials/facebook.png",
            link: "#"
        },
        {
            img: "src/images/socials/github.png",
            link: "#"
        },
        {
            img: "src/images/socials/linkedin.png",
            link: "#"
        },
        {
            img: "src/images/socials/twitter.png",
            link: "#"
        },
    ]

    return (
        <section className="flex flex-col w-full pt-16 justify-center bg-white">
            <div className="flex flex-col w-1/2 text-center gap-2 self-center max-w-lg">
                <h2 className="text-2xl font-bold uppercase my-4">Connect with us</h2>
                <span className="w-1/2 border self-center " />
            </div>
            <div style={{ backgroundImage: `url("src/images/banner.png")` }} className="py-1 rounded-md w-1/2 bg-cover self-center bg-left my-8" >
            </div>
            <div className="flex gap-8 self-center mt-8 mb-24" >
                {
                    socialLinks.map(({ img, link }) => (
                        <div>
                            <a href={link} target="_blank" >
                                <img src={img} height={50} width={50} />
                            </a>
                        </div>
                    ))
                }
            </div>
            <div className="self-center my-2" >
                <span className="font-bold" >COPYRIGHT @ 2023 AIII Developers.</span>
            </div>
        </section>
    );
}

export default Footer;