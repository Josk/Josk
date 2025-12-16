import { resolvePath } from '../utils'
import './ProfileSkillItem.css'

const ProfileSkillItem = ({ skill }) => {
    return (
        <div className="profile-skill-item" title={skill.name}>
            <img src={resolvePath(skill.icon)} alt={skill.name} className="skill-icon" />
        </div>
    )
}

export default ProfileSkillItem