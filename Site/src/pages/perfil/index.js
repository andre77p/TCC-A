import './index.scss';
import { useNavigate } from 'react-router-dom';


export default function Index(){
const navigate = useNavigate()
console.log(navigate);



 
    return(
        <main className='pagina-perfil'>
            <nav className='menu'>
            <img className='sne' src='/images/snek.png' alt=''/>   
            <h1 className='perfil'>Perfil</h1>
            </nav>

            <div className='pg'>
                <div className='div1'>
                    <div className='div-dentro'>
                    <h1 className='div'>Informações Pessoais</h1>
                    <img className='editar' src='/images/editar.png' alt=''/>
                    </div>
                    <p>SR.WILL SMITH</p>
                    <p>will.smith@gmail.com</p>
                    <p>22/11/22</p>
                </div>
                <div className='vazio'></div>
                <div className='div2'>
                    <div className='will'> 
                    <h1 className='div'>Login & Senha</h1>
                    <img className='editar' src='/images/editar.png' alt=''/>
                    </div>
                    <p>LOGIN</p>
                    <p>will.smith@gmail.com</p>
                    <p>Senha:bad****</p>
                </div>
            </div>
        </main>
    );
 }
