import Card from "../Card";

export default function EventList() {
    return (
        <>
        <div 
            id="container" 
            className="flex justify-around items-center flex-wrap"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            >
            <Card
                thumbnail="https://source.unsplash.com/random/300x300/?1"
                category="Training Programming"
                title="Pelatihan Pemrograman Rutin"
                description="Pelatihan Pemrograman Rutin setiap jum'at di lab kampus."    
            />
            <Card 
                thumbnail="https://source.unsplash.com/random/300x300/?1"
                category="Training Programming"
                title="Pelatihan Pemrograman Rutin"
                description="Pelatihan Pemrograman Rutin setiap jum'at di lab kampus."    
            />
            <Card 
                thumbnail="https://source.unsplash.com/random/300x300/?1"
                category="Training Programming"
                title="Pelatihan Pemrograman Rutin"
                description="Pelatihan Pemrograman Rutin setiap jum'at di lab kampus."    
            />
            <Card 
                thumbnail="https://source.unsplash.com/random/300x300/?1"
                category="Training Programming"
                title="Pelatihan Pemrograman Rutin"
                description="Pelatihan Pemrograman Rutin setiap jum'at di lab kampus."    
            />
        </div>
        </>
    )
}