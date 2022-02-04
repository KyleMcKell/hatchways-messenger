import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = (attachments, isSender, hasText) =>
	makeStyles(() => ({
		root: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
			gap: 7,
			maxWidth: 350, // 3 attachments max
			padding: hasText && attachments.length > 1 ? '10 0' : '0 0',
		},
		attachment: {
			width: attachments.length > 1 ? 100 : 150,
			height: attachments.length > 1 ? 75 : 150,
			objectFit: 'cover',
			borderRadius: isSender ? '10px 10px 0 10px' : '0 10px 10px 10px',
		},
	}));

const Attachments = ({ attachments, isSender, hasText }) => {
	const classes = useStyles(attachments, isSender, hasText)();

	return (
		<Grid className={`${classes.root}`}>
			{attachments.map((attachment, index) => (
				<img
					key={index}
					src={attachment}
					alt="preview"
					className={classes.attachment}
				/>
			))}
		</Grid>
	);
};

export default Attachments;
