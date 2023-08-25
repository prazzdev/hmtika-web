const logo = '../../src/image/logo.webp';
import styles from './ProfileSect.module.css'

export default function ProfileSect() { 
    return(
        <section 
            id="ProfileSect"
            className={styles.ProfileSect}>
            <div className="def-container flex flex-col mx-auto">
                <h1 className="uppercase font-bold text-xl mx-auto mb-5">Profil</h1>
                <div className="">
                    <p className="text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non repudiandae veritatis, molestiae distinctio unde voluptates voluptatum aliquam exercitationem amet fugit voluptatibus velit laboriosam tenetur dolores nam, possimus accusamus, accusantium error?
                    </p>
                </div>
            </div>
        </section>
    )
}