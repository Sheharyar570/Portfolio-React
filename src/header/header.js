import headerClasses from './header.module.css';
import profileImage from './../assets/images/headshot-cropped.jpg';

function header() {
    return (
        <div id={headerClasses.index_page}>
            <div className={headerClasses.header_text}>
                <p className={headerClasses.pre_text}>I am</p>
                <h1 className={headerClasses.hero_text}>Sheharyar</h1>
                <p className={headerClasses.description}>Web Developer</p>
            </div>
            <img src={profileImage} alt="Profile" className={headerClasses.profile_pic} />
            <ul>
                <li className={`${headerClasses.square}, ${headerClasses.square_1}`}></li>
                <li className={`${headerClasses.square}, ${headerClasses.square_2}`}></li>
               
            </ul>
        </div>
    );
}

export default header;