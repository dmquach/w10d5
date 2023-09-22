import harvardArt from "../../data/harvardArt";
import { Link, NavLink} from "react-router-dom";
import './GalleryNavigation.css';

function GalleryNavigation({galleries}) {
    const galleryItems = Object.values(galleries).map((item) => {
        return <NavLink to="/galleries/{item.id}" key={item.id}>{item.name}</NavLink>
    })
    // useParams?

    return (
        <nav>
            <h1>Galleries</h1>
            {galleryItems}
        </nav>
    )
}

export default GalleryNavigation