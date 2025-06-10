const gerar_senha = document.getElementById('gerar_senha')
const p_senha = document.getElementById('p_senha')

gerar_senha.addEventListener('click',()=>{
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let senha_gerada = ''

    //Aqui a logica é a seguinte enquanto o i for menor que 12 ele vai gerando indices aleatorios e eu pego os caracteres desse indice e jogo no p_senha, então basicamente eu gero 12 indices entre 0 e 61 eu acho que é o tamanho de caracteres ai a cada interação do loop ele gera um indice passa para o caracteres ai o caractere pega esse indice e retorna o caractere que corresponde a  o indice
    for(let i = 0; i<12; i++){
        let indice_aleatorio = Math.floor(Math.random()*caracteres.length)
        senha_gerada += caracteres[indice_aleatorio]
    }
    p_senha.textContent = senha_gerada
})


//eu inicio o neutralino e quando eu fechar a janela ele fecha meu app pq se eu não crio isso mesmo eu clicando no x não fecha meu app
Neutralino.init()
Neutralino.events.on("windowClose", () => {
  Neutralino.app.exit()
})