const carrinhoValidator = {
  produto: {
    required: 'O campo é obrigatório',
    minLength: {
      value: 4,
      message: ' O mínimo 4 caracteres'
    },
  },
  quantidade: {
    required: 'O campo é obrigatório',
    min: {
      value: 1,
      message: 'O mínimo é 1 '
    },
  },
  preco: {
    required: 'O campo é obrigatório',
    min: {
      value: 1,
      message: 'O mínimo  é 1 '
    },
  },
}

export default carrinhoValidator