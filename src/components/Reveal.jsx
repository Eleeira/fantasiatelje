import useInView from '../hooks/useInView'

export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }) {
  const [ref, isVisible] = useInView()

  const stateClass = isVisible ? 'reveal-visible' : 'reveal-hidden'

  return (
    <Tag
      ref={ref}
      className={`${stateClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
