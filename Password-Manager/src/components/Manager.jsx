import React, {useRef, useState, useEffect} from 'react'

const Manager = () => {
    const imgRef = useRef();
    const [form, setForm] = useState({site: "", username: "", password: ""})
    const [passwordArray, setPasswordArray] = useState([])
    useEffect(() => {
        let passwords = localStorage.getItem('passwords')
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }

    }, [])

    const showPassword = () => {

        if (imgRef.current.src.includes("icons/eye.png")) {
            imgRef.current.src = 'icons/eyecross.png'
        } else 
            imgRef.current.src = 'icons/eye.png'

        

    };
    const savePassword = () => {
        setPasswordArray([
            ...passwordArray,
            form
        ])
        localStorage.setItem("passwords", JSON.stringify([
            ...passwordArray,
            form
        ]))
        console.log(passwordArray)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className=" mycontainer">

                <h1 className='font-bold text-center text-4xl'>
                    <span className='text-green-500'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-500'>Op/&gt;</span>
                </h1>
                <p className='text-green-500 text-center'>Your own password manager</p>
                <div className="text-black flex flex-col p-4 items-center gap-8">
                    <input onChange={handleChange}
                        name='site'
                        value={
                            form.site
                        }
                        placeholder="Enter Url"
                        className='rounded-full border border-green-500 w-full py-1 px-2'
                        type="text"/>
                    <div className="flex w-full gap-8">
                        <input onChange={handleChange}
                            name='username'
                            value={
                                form.username
                            }
                            placeholder="Enter Username"
                            className='rounded-full border border-green-500 w-full py-1 px-2'
                            type="text"/>
                        <div className="relative flex ">
                            <input onChange={handleChange}
                                name='password'
                                value={
                                    form.password
                                }
                                placeholder='Enter Password'
                                className=' rounded-full border border-green-500 w-full py-1 px-2'
                                type="text"/>
                            <div className="absolute right-[3px] cursor-pointer top-[3px]"
                                onClick={showPassword}>
                                <img ref={imgRef}
                                    src="icons/eye.png"
                                    alt="eyeicon"
                                    width={27}/>
                            </div>
                        </div>
                    </div>
                    <button className='flex gap-2 border border-green-900 bg-green-500 rounded-lg p-2 hover:bg-green-600 w-fit justify-center items-center'
                        onClick={
                            () => savePassword()
                    }>
                        <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon>
                        Add Password
                    </button>
                </div>
                <div className="passwords">
                    <h2 className='py-4 text-black font-bold text-2xl text-center'>
                        Your passwords

                    </h2>
                    {
                    passwordArray.length === 0 && <div>No Passwords saved</div>
                }
                    {
                    passwordArray.length != 0 && <table class="table-auto  w-full rounded-lg  overflow-hidden">
                        <thead className='bg-green-600 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {
                            passwordArray.map((item,index) => {
 
                                return  <tr key={index}>
                                <td className='py-2 border-b border-white text-center w-32' ><a href={item.site} target="_blank" rel="noopener noreferrer"> {item.site}</a></td>
                                <td className='py-2 border-b border-white text-center w-32'>{item.username}</td>
                                <td className='py-2 border-b border-white text-center w-32'>{item.password}</td>
                            </tr>;
                                }
                               )
                        } </tbody>
                    </table>
                } </div>
            </div>

        </>

    )
}

export default Manager
