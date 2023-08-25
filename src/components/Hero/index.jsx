import Typewriter from 'typewriter-effect'
const arrowDown = '../../src/image/arrow-down.svg'
import styles from "./Hero.module.css"

export default function Hero() {
    return (
        <section 
            id="hero" 
            className={styles.hero}
            >
            <div 
                className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl text-gray-100"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-easing="ease-in-out"
                >
                <h1 
                    id="hero" 
                    className="typText text-2xl lg:text-4xl font-bold leading-none mb-4 stroke-cyan-500"
                    data-aos="zoom-in"
                    >
                    <Typewriter
                        options={{
                            strings: ['Himpunan Mahasiswa Informatika','Informatics Engineering'],
                            autoStart: true,
                            loop: true,
                            delay: 80,
                            cursor: ';',
                            pauseFor: 4000
                        }}
                    />
                </h1>
                <h3 
                    id="hero" 
                    className="typText text-lg lg:text-2xl font-semibold mb-8"
                    data-aos="zoom-in"
                    >
                    <Typewriter
                        options={{
                            strings: ['STIMIK Tunas Bangsa Banjarnegara'],
                            autoStart: true,
                            loop: true,
                            delay: 20,
                            cursor: '|',
                            pauseFor: 20000
                        }}
                    />
                </h3>
                <a 
                    href="#ProfileSect"
                    className="bg-[#00ADB5] p-2 rounded-lg shadow-md"
                    data-aos="flip-up"
                    data-aos-delay="1000"
                >
                    <img 
                        src={arrowDown} 
                        alt="direct to down"
                        className="w-4 lg:w-6"
                    />
                </a>
            </div>
        </section>
    )
}
