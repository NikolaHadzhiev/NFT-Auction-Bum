import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import VerifiedBadge from './VerifiedBadge.jsx'

export default function AvatarComponent({ url = '/images/avatar.png', size = 90, verified = false }) {

    let Verified;
    if (verified) {
        Verified =
            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={<VerifiedBadge size={size} alt="verified" src="/images/verified.svg" />}>
                <Avatar sx={{ width: `${size}px`, height: `${size}px` }} alt="avatar" src={url} />
            </Badge>
    } else {
        Verified = <Avatar sx={{ width: `${size}px`, height: `${size}px`}} alt="avatar" src={url} />
    }

    return (
        <div style={{width: `${size}px`, height: `${size}px`}}>
            {Verified}
        </div>
    );
}