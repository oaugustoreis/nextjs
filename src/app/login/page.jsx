"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Home() {
    const [email, setEmail] = useState('');
    const router = useRouter();
    const handleLandSubmit = () => {
        console.log("Registro enviado");
        router.push('/');
    }
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita o comportamento padrão do formulário
        if (email == "ask5.gnr@gmail.com") {
            // Aqui você pode fazer o que quiser com o email
            router.push('/landpage');
        }
        console.log(email);
    };
    return (
        <>
            <>
                <div className='h-screen w-full flex flex-col justify-center items-center '>
                    <div className=" flex flex-col justify-center items-center ">
                        <div className="flex space-x-4 flex-row items-center">
                            <div className="flex  text-base font-semibold space-x-4 flex-row items-center">
                                <input className="outline cursor-pointer outline-1 px-3 py-2 w-28 text-white rounded-3xl" onClick={handleLandSubmit} type="submit" value="Registrar" />
                                <p className="text-white">ou</p>
                                <button
                                    type="button"
                                    className="bg-white center cursor-pointer rounded-3xl  mr-4 px-3 py-2 w-28 text-black"
                                >
                                    login
                                </button>
                            </div>
                        </div>


                        <div className=' flex flex-row justify-center items-top'>
                            <div className='text-right mr-5'>
                                <h1 className="text-7xl m-4 font-bold text-white">.grow up</h1>
                                <h2 className="text-3xl m-4 font-semibold text-white">Conectando </h2>
                                <h2 className="text-3xl m-4 font-semibold text-white">Pessoas</h2>
                                <h2 className="text-3xl m-4 font-semibold text-white">Construindo</h2>
                                <h2 className="text-3xl m-4 font-semibold text-white">Futuros</h2>
                            </div>
                            <div className='hr  mt-2'></div>

                            <div className='ml-5 mt-2 '>
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-white">
                                            usuário:
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                className="block w-full rounded-3xl bg-white px-3 py-2 text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 text-sm font-semibold"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="text-sm font-semibold block text-white">
                                                senha:
                                            </label>

                                        </div>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                className="block w-full rounded-3xl bg-white px-3 py-2 text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 text-sm font-semibold"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <input className="bg-white w-full center cursor-pointer text-sm font-semibold rounded-3xl mr-5 px-3 py-2 w-28 text-black" type="submit" value="Entrar" />
                                    </div>
                                </form>
                            </div>

                        </div>


                    </div>
                    <div className='text-white font-semibold leading-loose w-10/12 text-center'>
                        <p>A Grow Up é uma plataforma que conecta estudantes e profissionais com objetivos em comum, facilitando a formação de equipes e networking.</p>
                        <input className="outline cursor-pointer outline-1 mt-3 px-5 py-1 w-36 text-white rounded-3xl" type="submit" value="Saiba Mais" />
                    </div>
                </div>

            </>
        </>
    );
}
