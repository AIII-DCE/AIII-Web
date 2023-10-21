import BgImg from "../assets/images/banner.png";

const Banner = () => {
    return (
        <>
            <div className="min-w-full py-36 flex justify-center bg-cover bg-left" style={{ backgroundImage: `url("${BgImg}")` }} >
            </div>
        </>
    );
}

export default Banner;