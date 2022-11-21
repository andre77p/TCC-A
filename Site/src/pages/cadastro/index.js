import './index.scss';


export default function Index() {

    
    function irNike() {
        navigate('/nike')
    }

    return(
    <main className='pagina-cadastro'>
        <div className='container-mae'>

                <h1 className='cadastro'>Cadastrar produto</h1>

                <img className='img1' src='/images/tn3.jpg' alt='' />

                <input className='nprod' type="text" name="nome" placeholder="Nome do produto" autoFocus></input>
            
                <div className='primeiro-con'>
                    <input className='prqu' type="text" name="nome" placeholder="Preço"></input>
                    <input className='quant' type="text" name="nome" placeholder="Quantidade"></input>
                </div>

                <div className='segundo-con'>
                <select className = 'marcas' name="nome" >
                        <option value="" selected disabled>Selecione a marca</option>
                        <option value="">Nike</option>
                        <option value="">Adidas</option>
                        <option value="">Puma</option>
                        <option value="">New Balance</option>
                        <option value="">Reebok</option>
                </select>
                    <input className='cor' type="text" name="nome" placeholder="Cor"></input>
                </div>
           
                <div className='terceiro-con'>
                    <input className='descricao' type="text" name="nome" placeholder="Descriçao do produto"></input>
                    <div className='terc-c'>
                        <input className='tamanho' type="text" name="nome" placeholder="Tamanho"></input>
                        <a href="/" className='botao-salvar' onClick={irNike}> Salvar </a>
                    </div>
                </div>

            

        </div>

    </main>
    )
}