// import { HeartIcon } from 'lucide-react'
import React from 'react'

const CategoryCard = ({title, icon }) => {
    return (
        <div>
            <div className="p-6 flex flex-col items-center rounded-lg bg-white shadow-md border border-gray-200">
                <span className="text-4xl text-green-600">{icon}</span>
                <p className="mt-2 font-semibold text-gray-800">{title}</p>
                <p className="text-sm text-gray-500">6 ads posted</p>
            </div>
        </div>
    )
}

export default CategoryCard