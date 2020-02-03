import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: "100%",
        marginTop: "8em",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        height: "100%",
    },
}));

export default function ProjectImages({ project }) {
    const classes = useStyles();
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div className={classes.root}>
            {project.name === "HSN" ?
                <GridList cellHeight={500} spacing={8} className={classes.gridList} cols={1}>
                    {project.tileData.map((tile, index) => (
                        <GridListTile key={index} cols={small ? 3 : tile.cols}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
                :
                <GridList cellHeight={500} spacing={8} className={classes.gridList} cols={3}>
                    {project.tileData.map((tile, index) => (
                        <GridListTile key={index} cols={small ? 3 : tile.cols}>
                            <img src={tile.img} alt={tile.title} style={{ maxWidth: "100%", height: "auto" }} />
                        </GridListTile>
                    ))}
                </GridList>
            }
        </div>
    );
}