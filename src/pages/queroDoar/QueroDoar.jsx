import s from './queroDoar.module.scss'
import iconeLivro from '../../assets/iconeLivro.png'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar(){
    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState ("")
    const [autor,setAutor] = useState ("")
    const [image_url,setImage_url] = useState ("")
    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
    }
    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }
    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }
    const capturaImg = (e) =>{
        setImage_url(e.target.value)
    }
    const envioDados = async() =>{
        console.log(titulo)
        console.log(categoria)
        console.log(autor)
        console.log(image_url)
        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://api-livros-e3yi.onrender.com/doar",dadosEnviar)
    }
    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro </p>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <img src={iconeLivro} alt="Imagem de icone de um livro com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" placeholder='Título' onChange={capturaTitulo} />
                <input type="text" placeholder='Categoria' onChange={capturaCategoria} />
                <input type="text" placeholder='Autor' onChange={capturaAutor}/>
                <input type="text" placeholder='Link da Imagem' onChange={capturaImg}/>
                <input type="submit" value="Doar" className={s.buttonDoar} onClick={envioDados} />
            </form>
        </section>
    )
}