import React from 'react'

interface PageProps {
  params: { id: string }
}

const page = ({ params }: PageProps) => {
  return (
    <div>The id is {params.id}</div>
  )
}

export default page