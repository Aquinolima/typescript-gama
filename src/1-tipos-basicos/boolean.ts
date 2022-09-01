let estaAtivo: boolean;

// ...

estaAtivo = true;

function mapearStatusDeUsuario(status: boolean) {
    if (status){
        return `Usuário está ATIVO`
    }else {
        return `Usuário está DESATIVADO`
    }
}

mapearStatusDeUsuario(true);