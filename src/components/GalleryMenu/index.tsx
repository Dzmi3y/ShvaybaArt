import React from 'react'
import { DesktopGalleryMenu } from './DesktopGalleryMenu'
import { MobilGalleryMenu } from './MobilGalleryMenu'

export const GalleryMenu = () => {
  return (<>
    <DesktopGalleryMenu/>
    <MobilGalleryMenu/>
  </>  
  )
}
