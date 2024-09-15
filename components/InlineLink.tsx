import React from 'react'

type InlineLinkProps = {
    text: string;
    url: string;
}

const InlineLink: React.FC<InlineLinkProps> = ({text, url}) => {
  return (
    <a href={url} target="_blank" className="underline text-sky-400
    hover:text-sm  lg:hover:text-base xl:hover:text-lg hover:text-red-400 transition-all duration-200">{text}</a>
  )
}

export default InlineLink
