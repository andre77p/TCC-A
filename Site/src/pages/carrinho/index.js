
import './index.scss'

import { useEffect, useState } from 'react'
import Storage from 'local-storage'
import { buscarProdutoPorId } from '../../api/produtoAPI';
import CarrinhoItem from '../../components/carrinhoItem';
import { useNavigate } from 'react-router-dom';

export default function Carrinho() {
    const [itens, setItens] = useState([]);

    

    const navigate = useNavigate();

    function irPedido() {
        navigate('/pedido')
    }


    function qtdItens() {
        return itens.length;
    }

    function calcularValorTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.produto.info.preco * item.qtd;
        }
        return total;
    }


    function removerItem(id) {
        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        Storage('carrinho', carrinho);
        carregarCarrinho();
    }


    async function carregarCarrinho() {
        let carrinho = Storage('carrinho');
        if (carrinho) {

            let temp = [];
            
            for (let produto of carrinho) {
                let p = await buscarProdutoPorId(produto.id);
                
                temp.push({
                    produto: p,
                    qtd: produto.qtd
                })
            }

            setItens(temp);
        }

    }

    useEffect(() => {
        carregarCarrinho();
    }, [])




    return (
       
        <main className='pagina-carrinho'>
        <nav className='menu'>
        <div className='carrinho'>
        <h1> Carrinho </h1>
        </div>
        </nav>
       
       <div className='div-principal'>
            <img className='tenis' src='/images/jordan2.jpeg' alt=''></img>

            <div>
            <img className='lixeira' src='/images/lixeira.png' alt=''></img>
            </div>
            <div>
            <p>TÊNIS NIKE AIR JORDAN 1 </p>

            <p>R$ 1.499,99<br></br> ou 12x de R$ 125,00</p>

            <button onClick={irPedido}>Finalizar Pedido</button>
            </div>

       </div>

        <div className='itens'>

{itens.map(item => 
    <CarrinhoItem
        item={item}
        removerItem={removerItem}
        carregarCarrinho={carregarCarrinho} />
         )}
</div>




    </main>
    )
}