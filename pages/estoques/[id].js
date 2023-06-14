import Pagina from '@/componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'

const form = () => {
  const {push, query} = useRouter()
  const {register, handleSubmit, setValue} = useForm ()

  useEffect(()=> {
    if(query.id){
      const usuarios = JSON.parse(window.localStorage.getItem('usuarios'))
      const usuario = usuarios[query.id]
      for(let atributo in usuario){
        setValue(atributo,usuario[atributo])
      }
    }
  }, [query.id])

  function salvar(dados){
    const usuarios = JSON.parse(window.localStorage.getItem('usuarios')) || []
    cursos.splice(query.id, 1, dados)
    window.localStorage.setItem('usuarios', JSON.stringify(usuarios))
    push('/usuarios')
  }
  return (
    <>
      <Pagina titulo='Usuario'>
        <Form>
          <Form.Group className="mb-3" controlId="produto">
            <Form.Label>Produto:</Form.Label>
            <Form.Control {...register('produto')} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="preco">
            <Form.Label>Preço:</Form.Label>
            <Form.Control {...register('preco')}  type="text" />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="quantidade">
            <Form.Label>Quantidade:</Form.Label>
            <Form.Control {...register('quantidade')} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="descricao">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control {...register('descricao')}  type="text" />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="foto">
            <Form.Label>Foto:</Form.Label>
            <Form.Control {...register('foto')}  type="text" />
           
          </Form.Group>
          <div className='text-center'>

          <Button variant="success" onClick={handleSubmit(salvar)}>
         < AiOutlineCheck className='me-1'/> Salvar
          </Button>
          <Link href={'/usuarios'} className='ms-2 btn btn-danger' ><AiOutlineArrowLeft className='me-1'/>Voltar</Link>
          </div>

        </Form>
      </Pagina>
    </>
  )
}

export default form