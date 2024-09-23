import React from 'react'

type InlineLinkProps = {
    text: string;
    url: string;
}

const InlineLink: React.FC<InlineLinkProps> = ({text, url}) => {
  return (
    <a href={url} target="_blank" className="underline text-sky-400
    hover:font-medium hover:text-red-400 transition-all duration-300">{text}</a>
  )
}

export default InlineLink
