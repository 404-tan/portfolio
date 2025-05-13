'use client'
import React from 'react'


export default function Sidebar({ active, onSelect }) {
  const items = [
    { id: 'inicio', label: 'Início' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'about', label: 'Sobre Mim' }
  ]

  return (
    <aside>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li key={item.id}>
            <button
              onClick={() => onSelect(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#0f0',
                fontWeight: item.id === active ? 'bold' : 'normal',
                fontFamily: 'VT323, monospace',
                fontSize: '2rem',
                padding: '10px 0',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
             {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}