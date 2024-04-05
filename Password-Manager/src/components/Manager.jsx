import React, {useRef, useState, useEffect} from 'react'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {   v4 as uuidv4 } from 'uuid';
const backendUrl = import.meta.env.VITE_BACKENDURL
const Manager = () => {
    const imgRef = useRef();
    const passwordRef = useRef();
    const [form, setForm] = useState({site: "", username: "", password: ""});
    const [passwordArray, setPasswordArray] = useState([]);
    
    const getPasswords = async()=>{
        let req = await fetch(backendUrl);
        let passwords = await req.json()
        setPasswordArray(passwords)
        console.log(passwords)
    }
    useEffect(() => {
        // let passwords = localStorage.getItem('passwords')
        // if (passwords) {
        //     setPasswordArray(JSON.parse(passwords))
        // }
        getPasswords()
    }, [])

    const showPassword = () => {

        if (imgRef.current.src.includes("icons/eye.png")) {
            imgRef.current.src = 'icons/eyecross.png'
            passwordRef.current.type = 'text'

        } else {
            passwordRef.current.type = 'password'
            imgRef.current.src = 'icons/eye.png'
        }


    };
    

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const savePassword = async() => {
        if(form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            setPasswordArray( [...passwordArray,{...form, id : uuidv4()}])
            await fetch(backendUrl, {method: 'DELETE', headers: {'Content-Type': 'application/json'}, body : JSON.stringify({id : form.id})})

             await fetch(backendUrl, {method: 'POST', headers: {'Content-Type': 'application/json'}, body : JSON.stringify({...form, id : uuidv4()})})
            // localStorage.setItem("passwords", JSON.stringify([...passwordArray,{...form, id : uuidv4()}]))
            setForm({site: "", username: "", password: ""})
            toast('Password Saved', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
                });
        }
        else{
            toast("Error: Type min. 3 Characters in each input")
        }
        
    } 
    const deletePassword = async(id)=>{
        let c = confirm("Are you sure you want to delete this password");
        if(c){
            setPasswordArray(passwordArray.filter(item=>item.id!=id))
             await fetch(backendUrl, {method: 'DELETE', headers: {'Content-Type': 'application/json'}, body : JSON.stringify({id : id})})
            // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!=id)))
            toast('Password deleted Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
                });
        }
    }
     
    const editPassword = async(id)=>{
        setForm({...passwordArray.filter(item=>item.id===id)[0], id:id});
        setPasswordArray(passwordArray.filter(item=>item.id!=id))
        
    }
    const copyPassword = (password) => {
        navigator.clipboard.writeText(password)
        toast('Password copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
    }
    return (
        <>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/> 
            <ToastContainer containerId={"ToastId"}/>

            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className=" md:mycontainer">

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
                        className='rounded-lg border border-green-500 w-full py-1 px-2'
                        type="text"/>
                    <div className="md:flex-row flex flex-col w-full gap-8">
                        <input onChange={handleChange}
                            name='username'
                            value={
                                form.username
                            }
                            placeholder="Enter Username"
                            className=' mb-2 rounded-lg border border-green-500 w-full py-1 px-2'
                            type="text"/>
                        <div className="relative  flex ">
                            <input onChange={handleChange}
                                name='password'
                                ref={passwordRef}
                                value={
                                    form.password
                                }
                                placeholder='Enter Password'
                                className=' rounded-lg border border-green-500 w-full py-1 px-2'
                                type="password"/>
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
                            savePassword
                    }>
                        <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon>
                        Save
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
                    passwordArray.length != 0 && <table className="table-auto  w-full rounded-lg  overflow-hidden">
                        <thead className='bg-green-600 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {
                            passwordArray.map((item, index) => {

                                return <tr key={index}>
                                    <td className='py-2 border-b border-white text-center w-32'>
                                        <a href={
                                                item.site
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            {
                                            item.site
                                        }</a>
                                    </td>
                                    <td className='py-2 border-b border-white text-center w-32'>
                                        {
                                        item.username
                                    }</td>
                                    <td className='py-2 border-b border-white text-center w-32'>
                                        
                                    <div className='flex justify-center gap-2 items-center'>
                                    <img className=' copyPassword w-6 cursor-pointer ' src="/icons/copy.png" alt=""
                                                onClick={
                                                    () => copyPassword(item.password)
                                                }
                                                onMouseOver={
                                                    e => (e.currentTarget.src = "/icons/copy.gif")
                                                }
                                                onMouseOut={
                                                    e => (e.currentTarget.src = "/icons/copy.png")
                                                }/>
                                                {
                                        item.password
                                    }
                                           </div>     
                                                </td>
                                    <td className='py-2 border-b border-white text-center w-32   '>
                                        <div className='flex justify-center gap-2 items-center'>
                                            
                                            <img className=' editPassword w-6 cursor-pointer ' src="/icons/edit.png" alt=""
                                                onClick={
                                                    () => editPassword(item.id)
                                                }
                                                onMouseOver={
                                                    e => (e.currentTarget.src = "/icons/edit.gif")
                                                }
                                                onMouseOut={
                                                    e => (e.currentTarget.src = "/icons/edit.png")
                                                }/>
                                            <img className=' deletePassword w-6 cursor-pointer ' src="/icons/bin.png" alt=""
                                                onClick={
                                                    () => deletePassword(item.id)
                                                }
                                                onMouseOver={
                                                    e => (e.currentTarget.src = "/icons/bin.gif")
                                                }
                                                onMouseOut={
                                                    e => (e.currentTarget.src = "/icons/bin.png")
                                                }/>


                                        </div>
                                    </td>
                                </tr>;
                            })
                        } </tbody>
                    </table>
                } </div>
            </div>

        </>

    )
}

export default Manager
