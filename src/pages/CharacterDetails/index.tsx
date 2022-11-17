import { CircularProgress, Typography } from '@mui/material'
import { FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { LocationsList } from '../../components/LocationsList'
import { useGetCharacterByIdQuery } from '../../redux/apis/characters'

import styles from './CharacterDetails.module.scss'

export const CharacterDetails: FC = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetCharacterByIdQuery(Number(id || 0))
  const navigate = useNavigate()

  if (isLoading) {
    return <CircularProgress />
  }
  if (isError) {
    navigate('/', { replace: true })
    return <></>
  }

  if (!data) {
    return <Typography variant='h4'>Don't have the character 😔</Typography>
  }

  const locationIds = data.location.url.split('/').pop()

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={data.image} alt={data.name} />
      </div>
      <div className={styles.details}>
        <Typography variant='h3'>{data.name}</Typography>
        <ul className={styles.detailsList}>
          <li>
            <Typography variant='body2' color='text.secondary'>
              Status: <b>{data.status}</b>
            </Typography>
          </li>
          <li>
            <Typography variant='body2' color='text.secondary'>
              Species: <b>{data.species}</b>
            </Typography>
          </li>
          <li>
            <Typography variant='body2' color='text.secondary'>
              Gender: <b>{data.gender}</b>
            </Typography>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel ab asperiores voluptatum nesciunt quasi
          blanditiis, corrupti molestiae iusto dolores!
        </p>
        <Typography classes={{ root: styles.blockTitle }} variant='h5'>
          Episodes
        </Typography>
        <LocationsList ids={Number(locationIds)} />
      </div>
    </div>
  )
}
