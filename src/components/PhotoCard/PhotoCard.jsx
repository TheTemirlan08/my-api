
import './PhotoCard.scss'
export const PhotoCard = ({ photo }) => {
    return (
        <div className="photo-card">
        <img src={photo.thumbnailUrl} alt={photo.title} />
      </div>
    )
}
