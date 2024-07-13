import React, { CSSProperties, ReactNode } from 'react'

type ContainerProps = {
    child : ReactNode
    styles : string
}


const Container = ({child, styles}:ContainerProps) => {
  return (
    <div
     className={`p-4 border rounded bg-gray-100 ${styles}`}>
        {child}
     </div>
  )
}

export default Container