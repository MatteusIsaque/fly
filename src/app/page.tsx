"use client"

import Image from "next/image";

import Acordo from './../img/acordo.jpg'
import Link from "next/link";

import { ImWhatsapp } from 'react-icons/im'
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true)

  return (
    <main className="flex max-[726px]:flex-col">
      <div className="flex-1">
        <Image src={Acordo} alt="fly acessoria chefamento de serviço" />
      </div>
      <div className="flex flex-col justify-center flex-[0.8] px-20 max-[726px]:px-[10%]">
        <h1 className="text-3xl font-semibold mb-4">
          Seja um parceiro da Fly Assessoria Habitacional
        </h1>
        <p>
          A Fly Assessoria trabalha na aprovação do crédito imobiliário de pessoas que não tem restrição no nome.
        </p>

        <ul>
          <li>Nossa Parceria funciona na seguinte maneira;</li>
          <li>— Nós aprovamos o crédito do seu cliente</li>
          <li>— Pagamos uma porcentagem do valor do empréstimo para o corretor que indicou nossa empresa</li>
        </ul>

        <Link className="w-full" href="https://wa.me/5511991151492?text=Ol%C3%A1%2C+sou+corretor+de+im%C3%B3veis+e+gostaria+de+saber+mais+sobre+a+parceria+com+a+Fly+Assessoria+habitacional.">
          <button className="mt-10 w-full bg-green-600 py-4 text-2xl font-normal text-white rounded-md flex justify-center items-center gap-2"><ImWhatsapp size={18} />SAIBA MAIS</button>
        </Link>
      </div>

      <div className={`fixed max-w-[80%] mx-[10%] flex justify-between items-center w-full bottom-10 bg-slate-300 px-10 py-4 ${open === true ? "block" : "hidden"}`}>
        <p>Ao permanecer nesta página, você estará de acordo com nossa <Link href="/politica-de-privacidade-e-termos-de-uso">politica de privacidade e nossos termos de uso</Link></p>

        <button className="bg-slate-500 px-10 py-2 text-white rounded-md" onClick={()=>{setOpen(!open)}}>EU ACEITO</button>
      </div>
    </main >
  )
}