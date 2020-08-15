function formValidation(){
    var $name = formulario.tname.value
    var $email = formulario.temail.value
    var $phone = formulario.tphone.value
    var $case = formulario.tcase.value

    if(!$name){
        alert('Um nome para contato é obrigatório!')
        formulario.tname.focus()
        return false
    }

    if(!$email || $email.indexOf('@') == -1){
        alert('Preencha o email corretamente. Ele será o principal canal de resposta!')
        formulario.temail.focus()
        return false
    }

    if(!$phone){
        alert('Um telefone para contato é necessário!')
        formulario.tphone.focus()
        return false
    }

    if(!$case){
        alert('Por favor, no dê uma pequena ideia de seu caso.')
        formulario.tcase.focus()
        return false
    }
    
}