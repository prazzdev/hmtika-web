import Card from "../Card"

export default function EventList() {
    return (
        <>
        <div 
            id="container" 
            className="flex justify-around items-center flex-wrap"
            >
            <Card
                thumbnail="/src/image/event/276106928_279979457493103_4748464840513651431_n.webp"
                category="Kegiatan Rutin"
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