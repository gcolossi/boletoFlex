import { FormControl } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  formRadio: {
    marginTop: theme.spacing(2),
    maxHeight: 50,
  },
}));

const Payment = ( { onHandleChange , typePayment } ) => {
  const classes = useStyles();


  const handleChange = (event) => {
   typePayment = event.target.value;
   onHandleChange(typePayment)
  };

  return (
    <FormControl component="fieldset" className={classes.formContainer}>
      <FormLabel component="legend">Formas de pagamento</FormLabel>
      <RadioGroup
        aria-label="payment"
        name="paymentType"
        value={typePayment}
        onChange={handleChange}
      >
        <FormControlLabel
          className={classes.formRadio}
          value="Cartão"
          control={<Radio />}
          label={
            <div>
              <img
                width={40}
                height={50}
                src="/visa-seeklogo.com.svg"
                alt="boleto"
              />
              <img width={55} height={55} src="/mc_symbol.svg" alt="boleto" />
            </div>
          }
        />
        <FormControlLabel
          className={classes.formRadio}
          value="Boleto"
          control={<Radio />}
          label={<img width={50} src="/boleto-logo.svg" alt="boleto" />}
        />
        <FormControlLabel
          className={classes.formRadio}
          value="BoletoFlex"
          control={<Radio />}
          label={
            <img
              height={30}
              src="/novalogo-boletoflex-peq.png"
              alt="boleto flex"
            />
          }
        />
      </RadioGroup>
    </FormControl>
  );
};

export default Payment;
