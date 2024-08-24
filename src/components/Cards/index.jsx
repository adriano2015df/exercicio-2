import imageCard01 from '../../assets/card01.jpg'
import './Cards.css'

function Cards (){
    return(
        <div className="container">
      <img src={imageCard01} alt="card star wars 01" />
      <div>
        <h2>Pôster do filme Star Wars</h2>
        <p>Um poster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3.
            Uma ótima recordação de um dos mais icôncos filmes de todos os tempos.Este clássico 
            pôster trará aventura, nostalgia e a magia de Star Wars para qualque lugar que você decidir
            pendurar.Não perca achance de adicionar essa linda mémoria ao seu acervo!
        </p>
        <button>Comprar Agora</button>
      </div>
    </div>
    )
}

export default Cards