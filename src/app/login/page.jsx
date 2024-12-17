"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Home() {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita o comportamento padrão do formulário
        if (email=="ask5.gnr@gmail.com") {
             // Aqui você pode fazer o que quiser com o email
            router.push('/landpage');
        }
        console.log(email);
    };
    return (
        <>
            <h1 className='text-white'>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="block text-sm font-medium text-white">Email address</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Atualiza o estado com o valor do input
                />
                <button type="submit" className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded">Submit</button>
            </form>
        </>
    );
}
