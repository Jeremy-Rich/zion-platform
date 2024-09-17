import React from 'react'
import { formatDate, truncateText, capitalizeFirstLetter } from '@/lib/utils'

interface StoryCardProps {
  title: string
  content: string
  author: string
  date: Date
  category: string
}

export function StoryCard({ title, content, author, date, category }: StoryCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{truncateText(content, 100)}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{author}</span>
          <span>{formatDate(date)}</span>
        </div>
      </div>
      <div className="bg-blue-100 px-4 py-2">
        <span className="text-blue-800 text-sm font-medium">
          {capitalizeFirstLetter(category)}
        </span>
      </div>
    </div>
  )
}