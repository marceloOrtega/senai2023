function carregar(){
    const dado = window.localStorage.getItem("dados") == undefined ? null : JSON.parse(window.localStorage.getItem("dados"))
    if (dado !== null) {
        const perfil = document.getElementById('perfil');
        perfil.id.value = dado.id;
        perfil.nome.value = dado.nome;
        perfil.cpf.value = dado.cpf;
        perfil.email.value = dado.email;
        perfil.nascimento.value = dado.nascto.substring(0, 10).replace("/", "-");
        perfil.cep.value = dado.endereco.cep;
        perfil.numero.value = dado.endereco.numero;
        perfil.complemento.value = dado.endereco.complemento;
        perfil.telefones.value = dado.telefones;

    } else {
        document.getElementById('erro').innerHTML = '!! Usuário não encontrado !!';
    }

    const form = document.getElementById('perfil')

    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const dados = {
            cep: form.cep.value,
            numero: form.numero.value,
            complemento: form.complemento.value,
            id: form.id.value,
            nome: form.nome.value,
            cpf: form.cpf.value ,
            email: form.email.value ,
            nascto: form.nascimento.value,
            telefones: form.telefones.value
        }
    
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        };

        fetch("http://localhost:3000/usuarios/atualizar", options)
        .then(resp => {alert("Dados Alterados")})
        
    })


}