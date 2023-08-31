export default function EventCarousel({ title, slideList }) {
    return (
        <>
        <div id="" className="">
            <h1 className="">{title}</h1>
            <div className="carousel w-full h-[300px]">
                {slideList.map((slide) => {
                    return (
                        <>
                        <div id={'#'+slide.id} className="carousel-item relative w-full">
                            <img src={slide.imgSrc} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={'#slide'+slide.leftBtn} className="btn btn-circle">❮</a> 
                            <a href={'#slide'+slide.rightBtn} className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        </>
                    )
                })}
            </div>
        </div>
        </>
    )
}