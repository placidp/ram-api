import { Skeleton, Typography } from '@mui/material'
import { FC } from 'react'
import { useGetLocationByIdQuery } from '../../redux/apis/locations'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

interface LocationsListProps {
	ids: number | number[]
}

export const LocationsList: FC<LocationsListProps> = ({ ids }) => {
	const { data, isLoading, isError } = useGetLocationByIdQuery(ids)

	if (isLoading) {
		return (
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				{[...Array(1)].map((_, i) => (
					<ListItem key={i}>
						<ListItemAvatar>
							<Avatar>
								<LocationOnOutlinedIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={<Skeleton variant='text' width={150} height={50} />}
							secondary={<Skeleton variant='text' width={100} height={20} />}
						/>
					</ListItem>
				))}
			</List>
		)
	}
	if (isError) {
		return <Typography variant='h4'>Errro occured while loading the character's locations 😔</Typography>
	}

	if (!data) {
		return null
	}
	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{data.map((obj) => (
				<ListItem key={obj.id}>
					<ListItemAvatar>
						<Avatar>
							<LocationOnOutlinedIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={obj.name} secondary={obj.type} />
				</ListItem>
			))}
		</List>
	)
}
