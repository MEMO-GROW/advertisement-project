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
            path: "/dashboard/Vendor-profile",
            icon: User,
        },
        {
            name: "UpDate Product",
            path: "/dashboard/edit",
            icon: Settings,
        },
    ]
}