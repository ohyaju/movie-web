import React from 'react'
import { Film } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';



const FooterComp = () => {
    return (
        <div className='bg-[#4338CA] h-[280px] w-full flex gap-50'>
            <div>
                <div className='pl-5 flex gap-3'>
                    <Film ></Film> <span>Movie Z</span>
                </div>
                <p>© 2024 Movie Z. All Rights Reserved.</p>
            </div>

            <div>
                <p>Contact Information</p>
                <div>
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
                <div>
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
    )
}

export default FooterComp