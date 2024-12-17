// Adicione a diretiva "use client" no início do arquivo
"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
    const [data, setData] = useState([]); // Estado para armazenar os dados
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
    const [error, setError] = useState(null); // Estado para armazenar erros

    useEffect(() => {
        // Função assíncrona para buscar dados
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users'); // URL da API
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result); // Armazena os dados no estado
            } catch (error) {
                setError(error); // Armazena o erro no estado
            } finally {
                setLoading(false); // Define o estado de carregamento como falso
            }
        };

        fetchData(); // Chama a função para buscar os dados
    }, []); // O array vazio significa que o efeito será executado apenas uma vez, quando o componente for montado
    const router = useRouter();
    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        // Lógica para registrar (se necessário)
        console.log("Registro enviado");
        // Redirecionar ou fazer outra ação após o registro
    };

    const handleLoginClick = () => {
        router.push('/login'); // Redireciona para a página de login
    };

    return (
        <>

            <div className="h-screen flex flex-col justify-center items-center">
                <div className="flex space-x-4 flex-row items-center">
                    <form className="flex  text-base font-semibold space-x-4 flex-row items-center" onSubmit={handleRegisterSubmit}>
                        <input className="outline cursor-pointer outline-1 px-3 py-1 w-24 text-white rounded-2xl" type="submit" value="Registrar" />
                        <p className="text-white">ou</p>
                        <button
                            type="button"
                            onClick={handleLoginClick}
                            className="bg-white center cursor-pointer rounded-2xl px-3 py-1 w-24 text-black"
                        >
                            login
                        </button>
                    </form>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <div className='text-right'>
                        <h1 className="text-6xl m-4 font-bold text-white">.grow up</h1>
                        <h2 className="text-2xl m-4 font-semibold text-white">Conectando </h2>
                        <h2 className="text-2xl m-4 font-semibold text-white">Pessoas</h2>
                        <h2 className="text-2xl m-4 font-semibold text-white">Construindo</h2>
                        <h2 className="text-2xl m-4 font-semibold text-white">Futuros</h2>
                    </div>
                    <div className='hr'></div>

                    <div className='flex flex-col text-white justify-center items-center'>
                        
                        <div className='border  font-semibold border-gray-400 flex rounded-lg m-3 p-2 px-3 w-80 flex-col justify'>
                            <p className='mt-2 text-blue-300 text-sm'>@augusto_reis</p>
                            <p className='my-2 text-base'>Quero Montar um time para desenvolvimento de um app em android</p>
                            <p className='my-2 text-sm  text-amber-300'>#computação #dev #android</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}