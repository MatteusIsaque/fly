"use client"

import Image from "next/image";

import Acordo from './../img/acordo.jpg'
import Image1 from './../img/img2/analisamo-os-documentos.webp'
import Image2 from './../img/img2/analise-de-documento.webp'
import Image3 from './../img/img2/encaminhamento-para-aprovação.webp'
import Image4 from './../img/img2/parcelas.webp'
import Link from "next/link";

import Comentario1 from './../img/comentario/Camada5.webp'
import Comentario2 from './../img/comentario/Camada7.webp'
import Comentario3 from './../img/comentario/Camada9.webp'

import { ImWhatsapp } from 'react-icons/im'
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [open, setOpen] = useState(true)
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [message, setMessage] = useState("")

  async function HandleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await axios.post("https://main-form.herokuapp.com/ticonnected", {
      "emailTo": "jcbbb86@gmail.com",
      "title": "Formulario de lead",
      "phone": number,
      "email": email,
      "message": message
    })

  }

  return (
    <>
      <main className=" max-w-[70%] m-auto max-[889px]:max-w-[90%]">
        <div className="flex max-[889px]:flex-col max-[889px]:mb-10 max-[550px]:text-center">
          <div className="flex-1">
            <Image src={Acordo} alt="fly acessoria chefamento de serviço" />
          </div>
          <div className="flex flex-col justify-center flex-[0.8]">
            <h1 className="text-4xl font-bold mb-2 max-[550px]:text-2xl ">
              Seja um parceiro da Fly Assessoria Habitacional
            </h1>
            <p>
              Tenha o financiamento imobiliário aprovado para comprar a casa própria
              A Fly Assessoria trabalha na aprovação do crédito imobiliário de pessoas que não tem restrição no nome.
            </p>

            <Link className="w-full" href="https://wa.me/5511991151492?text=Ol%C3%A1%2C+sou+corretor+de+im%C3%B3veis+e+gostaria+de+saber+mais+sobre+a+parceria+com+a+Fly+Assessoria+habitacional.">
              <button className="w-full bg-green-600 py-2 text-xl font-normal text-white rounded-md flex justify-center items-center gap-2"><ImWhatsapp size={18} />SAIBA MAIS</button>
            </Link>
          </div>
        </div>

        <div className="bg-[#F6F6F6] px-[10%] text-center">
          <h2 className="text-3xl font-bold pt-8 pb-4 max-[550px]:text-2xl">A FLY ASSESSORIA TE AJUDA A REALIZAR O<br /> SONHO DA CASA PRÓPRIA</h2>
          <p className="pb-4">A Fly Assessoria acredita que todos têm o direito à casa própria, por isso a Fly Assessoria está empenhada em possibilitar que todas as famílias, independentemente da renda, tenha o financiamento aprovado.</p>
          <p className="pb-4">Basta ter um nome limpo e entrar em contato com um de nossos servidores e nós o ajudaremos ao durante o processo de aprovação.</p>


          <h2 className="text-3xl font-bold pt-8 pb-4 max-[550px]:text-2xl">POSSUIMOS UM PROCESSO DE APROVAÇÃO SIMPLES</h2>

          <div className="flex gap-x-4 max-[880px]:flex-col">
            <div>
              <Image src={Image4} alt="fly" />
              <h3 className="text-xl font-bold mb-2 mt-4">Encaminhado Para Aprovação</h3>
              <p>Estando tudo certo, seus documentos são enviados para aprovar seu crédito.</p>
            </div>
            <div>
              <Image src={Image1} alt="fly" />
              <h3 className="text-xl font-bold mb-2 mt-4">Parcelas</h3>
              <p>Avaliar as parcelas do empréstimo.</p>
            </div>
            <div>
              <Image src={Image2} alt="fly" />
              <h3 className="text-xl font-bold mb-2 mt-4">Você Envia Seus Documentos</h3>
              <p>Você envia seus documentos para nossa análise sem pagar nada antes.</p>
            </div>
            <div>
              <Image src={Image3} alt="fly" />
              <h3 className="text-xl font-bold mb-2 mt-4">Analisamos Seus Documentos</h3>
              <p>Seus documentos são analisados cuidadosamente.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold pt-8 pb-4 max-[550px]:text-2xl">O QUE FAZER DEPOIS DISSO?</h2>

          <p>É só aguardar nossa equipe que iremos te auxiliar durante todo o processo até o desfecho do financiamento.</p>

          <h2 className="text-3xl font-bold pt-8 pb-4 max-[550px]:text-2xl">DEPOIMENTOS</h2>
          <p>Nossos clientes no instagram</p>

          <div className="flex justify-between gap-x-6 mt-10 max-[889px]:flex-col">
            <div>
              <Image src={Comentario1} alt="comentario" />
            </div>
            <div>
              <Image src={Comentario2} alt="comentario" />
            </div>
            <div>
              <Image src={Comentario3} alt="comentario" />
            </div>
          </div>

          <form className="flex flex-col gap-y-4 mt-20" onSubmit={HandleForm}>
            <input className="bg-white py-2 px-2 border-[1px] border-[#2f2f2f] rounded-md border-solid" type="text" required placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
            <input className="bg-white py-2 px-2 border-[1px] border-[#2f2f2f] rounded-md border-solid" type="text" required placeholder="Numero" onChange={(e) => { setNumber(e.target.value) }} />
            <textarea className="bg-white py-2 px-2 border-[1px] border-[#2f2f2f] rounded-md border-solid h-28" required placeholder="Mensagem" onChange={(e) => { setMessage(e.target.value) }} />
            <div className="flex justify-start gap-x-4">
              <input type="checkbox" />
              <p>Eu concordo em fornecer meus dados para que a empresa entre em contato comigo</p>
            </div>
            <button type="submit" className="py-4 bg-red-500 text-white font-bold text-2xl rounded-md"> Enviar mensagem </button>
          </form>

        </div>

        <div className="fixed right-4 bottom-4 text-white text-5xl bg-green-600 p-4 rounded-lg">
          <Link href="https://wa.me/5511991151492?text=Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+smart+cidade.+Voc%C3%AA+pode+me+ajudar%3F">
            <ImWhatsapp />
          </Link>
        </div>




      </main >
      <div className="text-center py-2 mt-10 text-white bg-slate-800">Todos os <Link href="/politica-de-privacidade-e-termos-de-uso">termos de uso e politica de privacidade</Link></div>

      <div className={`fixed max-w-[80%] mx-[10%] flex justify-between items-center w-full bottom-10 bg-slate-300 px-10 py-4 ${open === true ? "block" : "hidden"}`}>
        <p>Ao permanecer nesta página, você estará de acordo com nossa <Link href="/politica-de-privacidade-e-termos-de-uso">politica de privacidade e nossos termos de uso</Link></p>

        <button className="bg-slate-500 px-10 py-2 text-white rounded-md" onClick={() => { setOpen(!open) }}>EU ACEITO</button>
      </div>
    </>
  )
}