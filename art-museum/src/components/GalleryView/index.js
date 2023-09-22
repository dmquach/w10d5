import { useParams } from "react-router-dom";

function GalleryView({galleries}) {
    const bob = useParams()
    const findItem = Object.values(galleries).find(item => item.id == bob.galleryId)

    return (
        <>
        <h1>
            Hello from GalleryView
        </h1>
        <h2>{findItem.name}</h2>
        </>
    )
}

export default GalleryView
