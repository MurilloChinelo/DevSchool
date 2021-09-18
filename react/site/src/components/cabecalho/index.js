
import { Container } from './styled'


export default function Index() {
    return (
        <Container>
            <div class="reader-right-box">
                <div class="box-user"> 
                    <div class="user-image">
                        <img src="https://havaianas.com.br/on/demandware.static/-/Sites-havaianas-master/default/dw05aa76bc/product-images/4001280_0031_HAVAIANAS%20TRADICIONAL_C.png" alt="" />
                        <div class="absolute">2</div>
                    </div>
                    <div class="user-name"> Olá, <b>Chinelo</b> </div>
                </div>
                
                <div class="box-image">
                    <div class="refresh-button"> <button> <img src="/assets/images/refresh.svg" alt = "" />  </button> </div>
                    <div class="left-button"> <button> <img src="/assets/images/log-out.svg" alt = "" />  </button> </div>
                </div>
            </div>
            <div class="bottom-bar-right-header" />
        </Container>
    )
}
