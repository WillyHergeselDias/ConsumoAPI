//Esperando carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  //Buscando os dados do JSON e os convertendo para um objeto JS
  fetch('./data/notebooks.json')
    .then(response => response.json())
    .then(data => exibirNotebooks(data))
    .catch(error => console.error("Erro ao carregar JSON:", error));
});

//Função que exibe os notebooks
function exibirNotebooks(notebooks) {
  //Container que contém os notebooks e suas informações
  const container = document.getElementById('notebooks-container');
  //Loop forEach para montar um 'card' com a informação de cada notebook
  //  que sera inserido em nosso container
  notebooks.forEach(nb => {
    const card = document.createElement('div');
    //Atribuindo uma classe ao card
    card.className = 'card';
    
    //Inserindo os dados do JSON no card
    card.innerHTML = `
      <img src="${nb.imagem}" alt="${nb.modelo}">
      <div class="card-content">
        <h2>${nb.modelo}</h2>
        <p>Cpu: ${nb.cpu}</p>
        <p>Ram: ${nb.ram}</p>
        <p>Ssd: ${nb.ssd}</p>
        <p>Tela: ${nb.tela}</p>
        <p>Gpu: ${nb.gpu}</p>
        <p>Uso Indicado: ${nb.uso_indicado}</p>
      </div>
    `;
    //Inserindo o card ao container
    container.appendChild(card)

    //Esperando um evento da lista de dropdown
     document.getElementById('indicado_dropdown').addEventListener('input', (e) => {
    
    //Opcao do usuario  
    let opcao = e.target.value
    //Verifica se o valor selecinado existe na lita 'uso_indicado' do JSON e os exibe, 
    // caso contrário ele os deleta (incompleto.)
        if(nb.uso_indicado.includes(opcao)){
          container.appendChild(card)
          console.log(opcao)
        }else{
          try{
          container.removeChild(card)
            
          }
          catch(erro){
            console.log(`O card ${nb.modelo} já foi removido.`)
          }
        }
      
     })
    
  });
}
