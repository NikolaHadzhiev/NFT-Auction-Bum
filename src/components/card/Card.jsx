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
import CircleIcon from '@mui/icons-material/Circle';
import Countdown from 'react-countdown';

export default function Card({ name = "", likes = 0, mediaUrl = "/images/nft.jpg", user, price = "", currency = "", timeLeft = null}) {
    return (
        <MuiCard className={`${timeLeft == null ? classNames(styles.card) : classNames(styles.card, styles.card_live)}`}>
            <CardHeader sx={{ padding: '1.0625rem 1rem 0.4375rem 1rem' }} avatar={<Avatar url={user.avatar.url} size={45} verified={user.verified || user.confirmed} />} />
            <div className={classNames(styles.card_image)}>
                {timeLeft != null ? <div className={classNames(styles.live_icon, styles.badge)}><Chip className={classNames(styles.chip_live)} icon={<CircleIcon className={classNames(styles.live_icon_style)} />} label={"LIVE"} variant="outlined" /></div> : null}
                <CardMedia className={classNames(styles.media, styles.badge)}
                    component="img"
                    image={mediaUrl}
                    alt="NFT Auction"
                />
                {timeLeft != null ? <div className={classNames(styles.live_border)}><Countdown date={timeLeft} /></div> : null}
            </div>
            <CardActions disableSpacing sx={{ padding: '0.3125rem 0.9375rem 1.375rem 0.9375rem' }}>
                <div className={classNames(styles.cardAction)}>
                    <span className={classNames(styles.title)}>{name}</span>
                    {price.toString().includes(".") ?
                        <span className={classNames(styles.price)}>~{price} {currency}</span> :
                        <span className={classNames(styles.price)}>{price} {currency}</span>
                    }
                </div>
                <Chip className={classNames(styles.likes)} icon={<FavoriteIcon className={classNames(styles.icon)} />} label={millify(likes, { lowercase: true })} variant="outlined" />
            </CardActions>
        </MuiCard>
    )
}