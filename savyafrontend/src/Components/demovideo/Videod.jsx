import { AppBar } from '@material-ui/core'
import { Typography } from 'antd'
import React from 'react'
import { Notifications } from './Notifications'
import { Options } from './Options'
import { VideoPlayer } from './VideoPlayer'

export const Videod = () => {
    return (
        <div>
            <AppBar position="static" color="inherit">
                <Typography variant ="h2" align="center" >Video CHat</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    )
}
