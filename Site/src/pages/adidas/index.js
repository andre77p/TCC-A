import './index.scss';

export default function Index(){
    return(
        <main className='pagina-adidas'>
            <nav className='menu'>
            <h1>Sneakers World</h1>
            <h1>Nike</h1>
            <h1>Adidas</h1>
            <h1>Puma</h1>
            <h1>Rebook</h1>
            <h1>New Balance</h1>
            <input class="pesquisa" type="text" name="nome" placeholder="O que você procura?" autofocus />
            <img className='carrinho' src='/images/car.png' alt='' />
            <img className='perfil' src='/images/cont.png' alt='' />
            </nav>
        </main>
    )
}
