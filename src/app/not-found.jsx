"use client"

import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const Page = () => {
    return(
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-2 flex-col">
                <FileSearch size={32} color="violet"/>
                <h3 className="text-fuchsia-500 text-4xl font-bold">NOT FOUND</h3>
                <button>
                
                    <Link href="/" className=" flex justify-center p-2 bg-amber-400">
                        <a>Go Home</a>
                    </Link>
                </button>
                
            </div>
        </div>
    )
}

export default Page