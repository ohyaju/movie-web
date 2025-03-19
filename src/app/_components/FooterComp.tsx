import React from 'react'
import { Film } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';



const FooterComp = () => {
    return (
        <div className='bg-[#4338CA] h-[280px] w-full'>
            <div className='flex pt-[30px] place-content-around text-white'>
                <div className='pl-[80px]'>
                    <div className='pl-5 flex gap-3'>
                        <Film ></Film> <span>Movie Z</span>
                    </div>
                    <p className='pt-5'>© 2024 Movie Z. All Rights Reserved.</p>
                </div>
                <div className='flex gap-30 '>
                    <div>
                        <p>Contact Information</p>
                        <div className='pt-5'>
                            <Mail />
                            <p className='font-bold'>Email:</p>
                            <p>support@movieZ.com</p>
                        </div>
                        <div>
                            <Phone />
                            <p className='font-bold'>Phone:</p>
                            <p>+976 (11) 123-4567</p>
                        </div>
                    </div>

                    <div>
                        <p>Follow us</p>
                        <div className='flex gap-4 pt-5'>
                            <button className='' onClick={() => window.location.href = 'https://example.com'}>
                                Facebook
                            </button>
                            <button className='' onClick={() => window.location.href = 'https://example.com'}>
                                Instagram                    </button>
                            <button className='' onClick={() => window.location.href = 'https://example.com'}>
                                Twitter
                            </button>
                            <button className='' onClick={() => window.location.href = 'https://example.com'}>
                                Youtube                    </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FooterComp