import Container from "@mui/material/Container";
import styles from './Featured.module.scss'
import classNames from "classnames";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useRouter } from 'next/router'

export default function Featured({ items = [] }) {
    const router = useRouter()

    const handleClick = (href) => {
        router.push(href)
      }

    return (
        <Container maxWidth="xl" className={classNames(styles.container)}>
            <ImageList className={classNames(styles.grid_wrapper)} gap={20}>
                {items.map((item, index) => (
                <ImageListItem className={ index == 0 ? classNames(styles.grid_first_image) : null} key={item.image}>
                        <img
                            src={`${item.image}`}
                            srcSet={`${item.image}`}
                            alt={item.title}
                            loading="lazy"
                            className={classNames(styles.grid_image)}
                            onClick={() => handleClick(item.href)}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    )
}