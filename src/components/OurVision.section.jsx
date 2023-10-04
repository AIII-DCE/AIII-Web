const OurVisionSection = () => {

    const cards = [
        {
            title: "Purpose",
            description: "Our purpose: Igniting curiosity, fostering collaboration, and driving innovation in the world of AI, one idea, one project, one breakthrough at a time.",
            img: "src/images/vision.png"
        },
        {
            title: "Purpose",
            description: "Our purpose: Igniting curiosity, fostering collaboration, and driving innovation in the world of AI, one idea, one project, one breakthrough at a time.",
            img: "src/images/vision.png"
        },
        {
            title: "Purpose",
            description: "Our purpose: Igniting curiosity, fostering collaboration, and driving innovation in the world of AI, one idea, one project, one breakthrough at a time.",
            img: "src/images/vision.png"
        },
        {
            title: "Purpose",
            description: "Our purpose: Igniting curiosity, fostering collaboration, and driving innovation in the world of AI, one idea, one project, one breakthrough at a time.",
            img: "src/images/vision.png"
        },
    ]

    const CardOdd = ({ card: { title, description, img }, index }) => (
        <div className="flex flex-col sm:flex-row text-center sm:text-left  sm:gap-0 gap-8 justify-between pt-10 items-center  md:w-1/2 self-center" >
            <div className="right-0 sm:right-16 px-8" >
                <div className="relative border w-0 h-8 left-6 top-20" ></div>
                <div className="text-4xl font-bold text-gray-300" >0{index}</div>
                <div className="relative border w-0 h-8 left-6 bottom-20" ></div>
            </div>
            <div className="flex flex-col italic mx-12 sm:mr-12" >
                <h3 className="text-md font-bold" >{title}</h3>
                <p className="md:mr-12" >{`"${description}"`}</p>
            </div>
            <div className="flex-shrink-0" >
                <img height={200} width={250} src={img} />
            </div>
        </div>
    )

    const CardEven = ({ card: { title, description, img }, index }) => (
        <div className="flex flex-col sm:flex-row text-center sm:text-left  sm:gap-0 gap-8 justify-even pt-10 items-center  md:w-1/2 self-center" >
            <div className="relative px-8 left-0 sm:left-16 order-1 sm:order-2" >
                <div className="relative border w-0 h-8 left-6 top-20" ></div>
                <div className="text-4xl font-bold text-gray-300" >0{index}</div>
                <div className="relative border w-0 h-8 left-6 bottom-20" ></div>
            </div>
            <div className="flex flex-col italic mx-12  order-2 md:order-3 md:text-right" >
                <h3 className="text-md font-bold" >{title}</h3>
                <p className="md:ml-12" >{`"${description}"`}</p>
            </div>
            <div className="md:order-1 order-3 flex-shrink-0" >
                <img height={200} width={250} src={img} />
            </div>
        </div>
    )

    return (
        <section className="flex flex-col w-full py-16 justify-center bg-white overflow-hidden">
            <div className="flex flex-col w-1/2 text-center gap-2 self-center max-w-lg">
                <h2 className="text-2xl font-bold uppercase my-4">Our Vision</h2>
                <p className="text-xl font-light ">"To be a catalyst for AI innovation, fostering a diverse, inclusive, and ethical AI community, advancing knowledge, and shaping a brighter future."</p>
                <span className="w-1/2 border self-center mt-2" />
            </div>
            <div className="flex flex-col mx-auto md:max-w-8xl min-w-1/2" >
                {
                    cards.map((card, index) => (
                        index % 2 === 0 ?
                            <CardOdd card={card} index={index + 1} />
                            :
                            <CardEven card={card} index={index + 1} />
                    ))
                }
            </div>
        </section >
    );
}

export default OurVisionSection;
