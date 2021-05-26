import styles from "./styles.module.scss";
import ptBR from "date-fns/locale/pt-BR";
import format from "date-fns/format";

const Header = () => {

    const currentDate = format(new Date(), "EEEEEE,d MMMM", {
        locale: ptBR,
      });


    return(
        <div className={styles.headerContainer}>
        <img src="/novalogo-boletoflex-peq.png" alt="BoletoFlex - Um novo jeito de parcelar suas compras chegou!" />
        <p>Simulador de pagamentos com boleto parcelado</p>
        
        <span>{currentDate}</span>
        </div>
    )
}

export default Header