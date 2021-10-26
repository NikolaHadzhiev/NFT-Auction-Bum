import { Card as MuiCard } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Chip from '@mui/material/Chip';
import Avatar from "../avatar/Avatar.jsx"
import styles from './Card.module.scss'
import classNames from "classnames";
import millify from "millify";

function Card({name, likes, mediaUrl, user, price, currency}) {
    return (
        <MuiCard className={classNames(styles.card)}>
            <CardHeader sx={{ padding: '1.0625rem 1rem 0.4375rem 1rem' }} avatar={<Avatar url={user.avatarUrl} size={45} verified={user.verified} />} />
            <CardMedia className={classNames(styles.media)}
                component="img"
                image={mediaUrl}
                alt="NFT Auction"
            />
            <CardActions disableSpacing sx={{ padding: '0.25rem 0.9375rem 1.375rem 0.9375rem' }}>
                <div className={classNames(styles.cardAction)}>
                    <span className={classNames(styles.title)}>{name}</span>
                    {price.includes(".") ?
                        <span className={classNames(styles.price)}>~{price} {currency}</span> :
                        <span className={classNames(styles.price)}>{price} {currency}</span>
                    }
                </div>
                <Chip className={classNames(styles.likes)} icon={<FavoriteIcon className={classNames(styles.icon)} />} label={millify(likes, { lowercase: true })} variant="outlined" />
            </CardActions>
        </MuiCard>
    )
}

Card.defaultProps = {
    name: "",
    likes: 0,
    mediaUrl: "",
    user: {
        avatarUrl: "",
        verified: false
    },
    price: "",
    currency: ""
}

export default Card