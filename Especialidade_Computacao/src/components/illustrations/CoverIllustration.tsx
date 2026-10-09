import type { ReactNode } from 'react'
import { Shield } from '../Shield'

export function CoverIllustration(): ReactNode {
  return (
    <div className="cover-art">
      <span className="spark spark-a">✦</span>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="scout">🧑🏽‍💻</div>
      <div className="laptop">
        <div className="laptop-screen">
          <Shield />
        </div>
        <div className="laptop-base" />
      </div>
      <span className="art-chip chip-one">01</span>
      <span className="art-chip chip-two">⌘</span>
      <span className="spark spark-b">✧</span>
    </div>
  )
}
