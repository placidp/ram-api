import { CircularProgress, Pagination, Typography } from '@mui/material'
import { useGetAllCharactersQuery } from '../redux/apis/characters'
import { Character } from '../components'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { setPage } from '../redux/slices/filter'
import { FC, useEffect } from 'react'

export const Home: FC = () => {
  const dispatch = useAppDispatch()
  const filter = useAppSelector((state) => state.filter)

  const { data, isFetching, isError, refetch } = useGetAllCharactersQuery()

  useEffect(() => {
    refetch()
  }, [filter, refetch])

  if (isFetching) {
    return <CircularProgress />
  }

  if (isError) {
    return <Typography variant='h4'>Errro occured while fetching characters 😔</Typography>
  }

  if (!data) {
    return <Typography variant='h4'>Don't have any characters 😔</Typography>
  }

  function handleChangePage(_: unknown, newPage: number) {
    dispatch(setPage(newPage))
  }

  return (
    <>
      <Pagination
        classes={{ root: 'pagination' }}
        count={data.info.pages}
        defaultPage={filter.page}
        onChange={handleChangePage}
        variant='outlined'
        color='primary'
        size='large'
      />
      <div className='characters-grid'>
        {data.results.map((obj) => (
          <Character key={obj.id} id={obj.id} name={obj.name} image={obj.image} status={obj.status}></Character>
        ))}
      </div>
    </>
  )
}
