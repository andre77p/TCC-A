import './index.scss';

export default function Index(){
    return(
        <main className='pagina-adidas'>
            <nav className='menu'>
            <img className='sne' src='/images/snek.png' alt=''/>
            <div id="linha-horizontal"></div>
            <div className='text'>
                <h1>Nike</h1>
                <h1>Adidas</h1>
                <h1>Puma</h1>
                <h1>Rebook</h1>
                <h1>New Balance</h1>
                <input class="pesquisa" type="text" name="nome" placeholder="O que você procura?" autofocus />
                <img className='carrinho' src='/images/car.png' alt='' />
                <img className='perfil' src='/images/cont.png' alt='' />
            </div>   
            </nav>
            <img className='nike' src='/images/nike1-.png' alt=''/>

            <div className='venda'>
                <div id="tn">
                    <img src='/images/Heart.png' alt=''/>
                    <img className='png' src='/images/Nike-T2.png'/>
                </div>
                <div id="tn">
                    <img src='/images/Heart.png' alt=''/>
                </div>
            </div>    
        </main>
    )
}
