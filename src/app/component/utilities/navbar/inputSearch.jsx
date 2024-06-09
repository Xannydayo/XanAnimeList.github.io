'use client';
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        if (keyword.trim() == "") return

        event.preventDefault()
        
        router.push(`/search/${keyword}`)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch(event);
            
        }
    }

    return (
        <div className="relative ">
            <input
                placeholder="Cari Animek..."
                className="w-full p-2 rounded bg-black text-white"
                ref={searchRef}
                onKeyPress={handleKeyPress}
            
            />
            <button className="absolute top-2 end-2 text-white" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    );
};

export default InputSearch;
