import React from 'react'
import { Data } from '../DummyData/LandingPage.js'
import { image } from '../pages/Register'
import WA from '../img/WA.png'


export default function LandingPage() {
    return (
        <div className='pb-1' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
            <div className='flex justify-center py-20'>
                <p className='text-5xl animate-bounce font-semibold'>Mengapa Harus Meurina Tailor?</p>
            </div>
            <div className='grid grid-cols-3 gap-10 mx-32 pb-10'>
                {Data.map((item, index) => {
                    return (
                        <div key={index}
                            className="group relative flex flex-col rounded-lg border border-gray-200 transition ease-in-out delay-150 bg-[#A3BB98]/80 hover:-translate-y-1 hover:scale-110 hover:bg-[#A3BB98] duration-300"
                        >
                            <p className='flex justify-center text-3xl py-2'>{item?.title}</p>
                            <h3 className='p-2'>{item?.description}</h3>
                        </div>
                    )
                })}

            </div>
            <div className='grid grid-cols-2'>
                <div className='ml-32'>
                    <p className='text-xl font-semibold'>Alamat : jln raya cilebut, tugu wates</p>
                    <div className='flex flex-row my-4'>
                        <p className='text-xl font-semibold'>Atau bisa chat kami di WA :</p>
                        <a href="https://wa.link/g12uj3" className='mt-[-0.4rem] ml-1'>
                            <img src={WA} alt="WhatsApp" className='h-10 w-10' />
                        </a>
                    </div>
                </div>
                <div className="google-map-code">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.724142670549!2d106.80050741468766!3d-6.556466695257981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c411fb141621%3A0xed649d1540ece7dc!2sJl.%20Tugu%20Wates%2C%20Kec.%20Tanah%20Sereal%2C%20Kota%20Bogor%2C%20Jawa%20Barat%2016164!5e0!3m2!1sid!2sid!4v1672410570072!5m2!1sid!2sid" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
            <p className='flex justify-center mt-10'>© 2022 mimewSofware</p>
        </div>
    )
}
