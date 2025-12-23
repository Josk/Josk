import { resolvePath } from '../utils'
import './ProfileLinkItem.css'

const ProfileLinkItem = ({ link }) => {
    return (
        <a
            href={link.url}
            className="profile-link-item"
            title={link.name}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={resolvePath(link.icon)} alt={link.name} className="link-icon" />
        </a>
    )
}

export default ProfileLinkItem