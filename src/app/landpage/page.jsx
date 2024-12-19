// Adicione a diretiva "use client" no início do arquivo
"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShareFromSquare, faComments } from '@fortawesome/free-regular-svg-icons'



export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    const router = useRouter();
    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        console.log("Registro enviado");
    };

    const handleLoginClick = () => {
        router.push('/login');
    };

    return (
        <>
            <div className='h-screen w-full flex flex-col justify-center items-center '>
                <div className='degrade'></div>
                <div className=" flex flex-col justify-center items-center ">
                    <div className="flex space-x-4 flex-row items-center">
                        <form className="flex  text-base font-semibold space-x-4 flex-row items-center" onSubmit={handleRegisterSubmit}>
                            <input className="outline cursor-pointer outline-1 px-3 py-2 w-28 text-white rounded-3xl" type="submit" value="Registrar" />
                            <p className="text-white">ou</p>
                            <button
                                type="button"
                                onClick={handleLoginClick}
                                className="bg-white center cursor-pointer rounded-3xl  mr-4 px-3 py-2 w-28 text-black"
                            >
                                login
                            </button>
                        </form>
                    </div>


                    <div className=' flex flex-row justify-center items-top'>
                        <div className='text-right mr-5'>
                            <h1 className="text-7xl m-4 font-bold text-white">.grow up</h1>
                            <h2 className="text-3xl m-4 font-semibold text-white">Conectando </h2>
                            <h2 className="text-3xl m-4 font-semibold text-white">Pessoas</h2>
                            <h2 className="text-3xl m-4 font-semibold text-white">Construindo</h2>
                            <h2 className="text-3xl m-4 font-semibold text-white">Futuros</h2>
                        </div>
                        <div className='hr'></div>

                        <div className='ml-5 '>
                            <div className='flex flex-col text-white justify-center items-center'>
                                <div className='flex flex-row justify-center items-center'>
                                    <div className='border font-semibold border-gray-400 flex card m-3 pt-2 pl-3 pr-2 w-80 flex-col justify'>
                                        <p className=' text-blue-300 text-xs'>@augusto_reis</p>
                                        <p className='my-1 text-sm leading-loose '>Quero Montar um time para desenvolvimento de um app em android</p>
                                        <p className='my-1 text-xs  text-amber-300'>#computação #dev #android</p>
                                    </div>
                                    <div className='flex flex-col justify-center items-left gap-5'>
                                        <div className='flex gap-2'><FontAwesomeIcon icon={faHeart} /> <p className='text-xs'>16</p></div>
                                        <div className='flex gap-2'><FontAwesomeIcon icon={faComments} /> <p className='text-xs'>8</p></div>
                                        <div className='flex gap-2'><FontAwesomeIcon icon={faShareFromSquare} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mb-6 gap-3 flex px-3 font-semibold '>
                                <input className="bg-white center cursor-pointer rounded-3xl  mr-5 px-3 py-2 w-28 text-black" type="submit" value="Chat Agora" />
                                <input className="outline cursor-pointer outline-1 px-3 py-2 w-28 text-white rounded-3xl" type="submit" value="Conectar" />
                            </div>
                            <div className='flex flex-col text-white justify-center items-center'>
                                <div className='flex flex-row justify-center items-center'>
                                    <div className='border font-semibold border-gray-400 flex card m-3 pt-2 pl-3 pr-2 w-80 flex-col justify'>
                                        <p className=' text-blue-300 text-xs'>@carol_silva</p>
                                        <p className='my-1 text-sm leading-loose '>Quero Montar um time para elaborar um projeto de pesquisa sobre mobilidade urbana de Manaus</p>
                                        <p className='my-1 text-xs  text-amber-300'>#pesquisa #adm #manaus #ciencia</p>
                                    </div>
                                    <div className='flex flex-col justify-center items-left gap-5'>
                                        <div className='flex gap-2'><FontAwesomeIcon icon={faHeart} /> <p className='text-xs'>16</p></div>
                                        <div className='flex gap-2'><FontAwesomeIcon icon={faComments} /> <p className='text-xs'>8</p></div>
                                        <div className='flex gap-2'><FontAwesomeIcon icon={faShareFromSquare} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mb-6 gap-3 flex px-3 font-semibold '>
                                <input className="bg-white center cursor-pointer rounded-3xl  mr-5 px-3 py-2 w-28 text-black" type="submit" value="Chat Agora" />
                                <input className="outline cursor-pointer outline-1 px-3 py-2 w-28 text-white rounded-3xl" type="submit" value="Conectar" />
                            </div>
                        </div>

                    </div>


                </div>
                <div className='text-white font-semibold leading-loose w-10/12 text-center'>
                    <p>A Grow Up é uma plataforma que conecta estudantes e profissionais com objetivos em comum, facilitando a formação de equipes e networking.</p>
                    <input className="outline cursor-pointer outline-1 mt-3 px-5 py-1 w-36 text-white rounded-3xl" type="submit" value="Saiba Mais" />
                </div>
                <div className='degrade2'></div>
            </div>

        </>
    );
}