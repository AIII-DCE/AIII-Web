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
        <div className="flex justify-between pt-10 items-center  md:w-1/2 self-center" >
            <div className="relative right-16" >
                <div className="relative border w-0 h-8 left-6 top-20" ></div>
                <div className="text-4xl font-bold text-gray-300" >0{index}</div>
                <div className="relative border w-0 h-8 left-6 bottom-20" ></div>
            </div>
            <div className="flex flex-col italic mr-12" >
                <h3 className="text-md font-bold" >{title}</h3>
                <p className="mr-12" >{`"${description}"`}</p>
            </div>
            <div className="flex-shrink-0" >
                <img height={200} width={250} src={img} />
            </div>
        </div>
    )

    const CardEven = ({ card: { title, description, img }, index }) => (
        <div className="flex justify-between pt-10 items-center  sm:mx-2 md:w-1/2 self-center" >
            <div className="relative left-16 order-2" >
                <span className="relative border left-6 top-8 h-full" ></span>
                <span className="relative border left-6 bottom-10 h-full" ></span>
                <span className="relative text-4xl font-bold text-gray-300" >0{index}</span>
            </div>
            <div className="italic ml-12 order-3 text-right" >
                <h3 className="text-md font-bold" >{title}</h3>
                <p className="ml-12" >{`"${description}"`}</p>
            </div>
            <div className="order-1 flex-shrink-0" >
                <img height={200} width={250} src={img} />
            </div>
        </div>
    )

    return (
        <section className="flex flex-col w-full py-16 justify-center bg-white">
            <div className="flex flex-col w-1/2 text-center gap-2 self-center max-w-lg">
                <h2 className="text-2xl font-bold uppercase my-4">Our Vision</h2>
                <p className="text-xl font-light ">"To be a catalyst for AI innovation, fostering a diverse, inclusive, and ethical AI community, advancing knowledge, and shaping a brighter future."</p>
                <span className="w-1/2 border self-center mt-2" />
            </div>
            <div className="flex flex-col mx-auto md:max-w-8xl" >
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
