enum Permissoes {
    admin = 0,
    editor = 1,
    comum= 2
}

const usuario = {
    nivel: Permissoes.admin
}

console.log(usuario);