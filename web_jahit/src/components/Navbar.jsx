import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Login', href: '/login', current: false },
    { name: 'Register', href: '/register', current: false },

]

const login = [
    { name: 'Home', href: '/home', current: false },
    { name: 'Shop', href: '/shop', current: false },
    { name: 'Transaction', href: '/transaction', current: false }

]

const isLogin = false

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <>
            {isLogin ? <div className='bg-[#A3BB98]/60 grid grid-cols-12 h-16 flex-shrink-0 border-b border-slate-600/10 backdrop-blur-lg'>
                <span className='flex items-center col-span-6 ml-12 justify-start text-indigo-900 text-sm font-medium'>
                    <Link to={'/'}>
                        WEB JAHIT
                    </Link>
                </span>
                <div className='col-span-6'>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grid justify-items-end">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            </div>
                            <div className="flex flex-1 items-center justify-center">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {login.map((item) => (
                                            <Link to={item.href}>
                                                <p
                                                    key={item.name}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-indigo-800 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </p>
                                            </Link>
                                        ))}
                                        <p
                                            className={classNames(
                                                login.current ? 'bg-gray-900 text-white' : 'text-indigo-800 hover:bg-gray-700 hover:text-white',
                                                'px-3 py-2 rounded-md text-sm font-medium'
                                            )}
                                            aria-current={login.current ? 'page' : undefined}
                                        >
                                            Logout
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> :
                <div className='bg-[#A3BB98]/60 grid grid-cols-12 h-16 flex-shrink-0 border-b border-slate-600/10 backdrop-blur-lg'>
                    <span className='flex items-center col-span-6 ml-12 justify-start text-indigo-900 text-sm font-medium'>
                        <Link to={'/'}>
                            WEB JAHIT
                        </Link>
                    </span>
                    <div className='col-span-6'>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grid justify-items-end">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                </div>
                                <div className="flex flex-1 items-center justify-center">
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <Link to={item.href}>
                                                    <p
                                                        key={item.name}
                                                        className={classNames(
                                                            item.current ? 'bg-gray-900 text-white' : 'text-indigo-800 hover:bg-gray-700 hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            }

        </>
    )
}