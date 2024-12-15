// Adicione a diretiva "use client" no início do arquivo
"use client";
import Link from "next/link";
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


    return (
        <>
            
            <div className="h-screen flex flex-col justify-center items-center">
                <div className='text-white font-semibold flex flex-col items-center m-4'>
                    <h1>Bem-vindo à LandPage</h1>
                    <Link href="/login">Ir para Login</Link>
                </div>
                <div className="flex font-semibold space-x-4 flex-row items-center">
                    
                    <input className="outline outline-1 px-3 py-1 text-white rounded-2xl" type="submit" value="Registrar" />
                    <p className="text-white">ou</p> 

                    <input className="bg-white rounded-2xl px-3 py-1 text-black" type="submit" value="Login" />
                </div>
                
                <div className=" items-center">
                    <div className='grid grid-cols-3'>
                        {data.map((item) => (
                            <div key={item.id} className='bg-white text-black font-semibold flex flex-col m-4 outline outline-1 rounded py-3 px-2'> {/* Adicionando a chave única aqui */}
                                <p >Nome: {item.name}</p>
                                <p >User:  {item.username}</p>
                                <p >Email: {item.email}</p>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div>
                        <h1>To</h1>
                    </div>
                </div>
            </div>
        </>
    );
}