import { Container, Info, Img, Produto, Titulo, Texto, Preco, Span, Button} from '../Style/App'
import img from '../../images/image-product-desktop.jpg'

const App = () => {
    return (
        <Container>
            <Img src={img} alt="#" />
            <Info>
                <h4>PERFUME</h4>
                <h1>Gabrielle Essence Eau De Parfume</h1>
                <p>A floral, solar and voluptuos interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>
                <p><span>$149.99</span> $169.99</p>
                <button> Add to cart</button>
            </Info>
        </Container>
    )

}

export default App;