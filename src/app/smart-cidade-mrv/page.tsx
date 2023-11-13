"use client"

import Image from "next/image";

import City from './../../img/cidade-sete-sois-pirituba-mrv-1-1-1.jpeg'
import Link from "next/link";
import { ImWhatsapp } from "react-icons/im";

import Fundo1 from './../../img/cidade-sete-sois-pirituba-mrv-2-1-1.jpeg'
import Fundo2 from './../../img/cidade-sete-sois-pirituba-mrv-3-1.png'
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(true)

  return (
    <main>
      <div className="relative">
        <Image src={City} alt="Smart Cidade da MRV" />
        <Link className="w-full flex justify-center items-center" href="https://wa.me/5511991151492?text=Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+smart+cidade.+Voc%C3%AA+pode+me+ajudar%3F">
          <button className="w-full max-w-[340px] bottom-10 m-auto absolute z-20 bg-green-600 py-4 text-2xl font-normal text-white rounded-md flex justify-center items-center gap-2 border-white border-2 max-[712px]:text-xl max-[712px]:max-w-[280px] max-[712px]:p-1 max-[522px]:max-w-[180px] max-[522px]:text-sm max-[479px]:bottom-2"><ImWhatsapp size={18} />SAIBA MAIS</button>
        </Link>
      </div>

      <div>
        <Image src={Fundo1} alt="fundo" />
      </div>

      <div>
        <Image src={Fundo2} alt="fundo" />
      </div>

      <div className="bg-[#FFBB01]">
        <Link className="flex justify-center flex-col items-center max-w-[340px] m-auto" href="https://wa.me/5511991151492?text=Ol%C3%A1%2C+sou+corretor+de+im%C3%B3veis+e+gostaria+de+saber+mais+sobre+a+parceria+com+a+Fly+Assessoria+habitacional.">
          <button className="w-full max-w-[340px] mb-20 bottom-10 m-auto z-20 bg-green-600 py-4 text-2xl font-normal text-white rounded-md flex justify-center items-center gap-2 border-white border-2 max-[712px]:text-xl max-[712px]:max-w-[280px] max-[712px]:p-1 max-[522px]:max-w-[180px] max-[522px]:text-sm max-[479px]:bottom-2"><ImWhatsapp size={18} />SAIBA MAIS</button>
        </Link>
      </div>

      <div className="fixed right-4 bottom-4 text-white text-5xl bg-green-600 p-4 rounded-lg">
        <Link href="https://wa.me/5511991151492?text=Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+smart+cidade.+Voc%C3%AA+pode+me+ajudar%3F">
          <ImWhatsapp />
        </Link>
      </div>

      <div className="text-center py-2 text-white bg-slate-800">Todos os <Link href="/politica-de-privacidade-e-termos-de-uso">termos de uso e politica de privacidade</Link></div>

      <div className={`fixed max-w-[80%] z-50 mx-[10%] flex justify-between items-center w-full bottom-10 bg-slate-300 px-10 py-4 ${open === true ? "block" : "hidden"}`}>
        <p>Ao permanecer nesta página, você estará de acordo com nossa <Link href="/politica-de-privacidade-e-termos-de-uso">politica de privacidade e nossos termos de uso</Link></p>

        <button className="bg-slate-500 px-10 py-2 text-white rounded-md" onClick={() => { setOpen(!open) }}>EU ACEITO</button>
      </div>
    </main>
  )
}