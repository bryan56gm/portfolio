import React from 'react'
// Styled Component
import { ArticleBox, ArticleTitle, ArticleText, ArticleTime, ArticleTimeSpan } from './Article.styled'

const Article = ({ data }) => {
  const { title, link, duration, time, text } = data

  return (
    <ArticleBox>
      <h3>
        <ArticleTitle href={link} target='_blank' rel='noopener noreferrer'>
          {title}
        </ArticleTitle>
      </h3>

      <ArticleTime>
        <ArticleTimeSpan>{duration}</ArticleTimeSpan>
        {time}
      </ArticleTime>

      <ArticleText>{text}</ArticleText>
    </ArticleBox>
  )
}

export default Article
