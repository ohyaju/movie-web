import React from 'react'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';


const SearchComp = () => {
    return (
        <div className='bg-[#E4E4E7] w-[379px] h-[36px] rounded-[1px] flex '>
            <Search className='absolute w-[16px] h-[16px]'/>
            <Input type="search" placeholder="Search" className='relative bg-red-400' />
        </div>
    )
}

export default SearchComp