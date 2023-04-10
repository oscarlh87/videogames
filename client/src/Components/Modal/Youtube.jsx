import React from 'react'

function Youtube(props) {
  return (
    <iframe
        width="480"
        height="320"
        src={`https://www.youtube.com/embed/${props.id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
  )
}

export default Youtube