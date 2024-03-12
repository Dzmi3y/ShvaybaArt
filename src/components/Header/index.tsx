import React from 'react'
import { DesktopHeader } from './DesktopHeader'
import { MobilHeader } from './MobilHeader'
import styled from 'styled-components'



export const Header = () => {
    return (<>

            <DesktopHeader />

        <MobilHeader />
    </>

    )
}
