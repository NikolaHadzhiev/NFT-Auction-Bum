import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

const VerifiedBadge = styled(Avatar)(({size}) => ({
    width: size / 3.6,
    height: size / 3.6
}));

export default VerifiedBadge;