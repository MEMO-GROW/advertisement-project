import { FileIcon, Home, PlusIcon, Settings, User } from "lucide-react"

export default {
    NAVLINKS: [

        {
            name: "Overview",
            path: "/dashboard",
            icon: Home,
        },
        {
            name: "Create Ad",
            path: "/dashboard/create-ad",
            icon: PlusIcon,
        },
        {
            name: "Vendor Ads",
            path: "/dashboard/ads",
            icon: FileIcon,
        },
        {
            name: "Profile",
            path: "/dashboard/VendorProfile",
            icon: User,
        },
        // {
        //     name: "Settings",
        //     path: "/dashboard",
        //     icon: Settings,
        // },
    ]
}