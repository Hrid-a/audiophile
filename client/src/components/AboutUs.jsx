import imgSrc from "../assets/img.png";

const AboutUs = () => {
    return (
        <section className="flex flex-col gap-12 lg:flex-row  my-16 lg:my-0 lg:mb-32 lg:mt-40">
            <article className="order-3 lg:order-1 flex-1 self-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-secondary uppercase mb-8 max-w-[400px]">Bringing you the <span className="text-primary">best</span> audio gear</h3>
                <p className="text-[18px] font-medium text-secondary text-center lg:text-start">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </article>
            <article className="order-1 lg:order-3 overflow-hidden rounded-lg lg:flex-1">
                <img src={imgSrc} alt="Bringing you the best audio gear" />
            </article>
        </section>
    )
}

export default AboutUs