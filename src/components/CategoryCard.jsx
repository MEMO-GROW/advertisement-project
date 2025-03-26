import { HeartIcon } from 'lucide-react'
import React from 'react'

const CategoryCard = () => {
    return (
        <div>
            <div class="p-6 flex flex-col items-center rounded-lg bg-white shadow-md border border-gray-200">
                <span class="text-4xl text-green-600"><HeartIcon /></span>
                <p class="mt-2 font-semibold text-gray-800">Clothing</p>
                <p class="text-sm text-gray-500">6 ads posted</p>
            </div>
        </div>
    )
}

export default CategoryCard