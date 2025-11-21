// src/components/Reveal.jsx
import { useEffect, useState } from 'react'

export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true)
    }, delay)
    return () => clearTimeout(timeout)
  }, [delay])

  const classes = [
    className,
    visible ? 'reveal-visible' : 'reveal-hidden',
  ]
    .filter(Boolean)
    .join(' ')

  return <Tag className={classes}>{children}</Tag>
}
