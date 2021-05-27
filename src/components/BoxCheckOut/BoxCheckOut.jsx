import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import Payment from "../Payment/Payment";
import Photo from "../Photo/Photo";
import Form from "../Form/Form";
import Lottie from "react-lottie";
import animationData from "./check-mark.json";
import Box from '@material-ui/core/Box'

const initialValue = {
  id: 0,
  name: "",
  lastName: "",
  cpf: "",
  email: "",
  phone: "",
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 8),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
  },
}));

const steps = ["Tipo de Pagamento", "Detalhes do Usuário", "Selfie!"];

const BoxCheckout = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const classes = useStyles();

  const [user, setUser] = useState(initialValue);
  const [activeStep, setActiveStep] = useState(0);
  const [typePayment, setTypePayment] = useState("");

  useEffect(() => {
    console.log(typePayment);
    console.log(user);
  }, [typePayment, user]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Payment
            typePayment={typePayment}
            onHandleChange={(typePayment) => {
              setTypePayment(typePayment);
            }}
          />
        );
      case 1:
        return (
          <>
            <Form
              user={user}
              onSubmitUser={(user) => {
                setUser(user);
              }}
            />
            {typePayment ? (
              <Box mt={5} pt={2} borderTop={2} borderColor="primary.main">
              <Typography
                variant="subtitle2"
                color={"primary"}
                gutterBottom={true}
              >
                Forma de pagamento escolhida: <strong>{typePayment}</strong>
              </Typography>
              </Box>
            ) : (
              ""
            )}
          </>
        );
      case 2:
        return (
          <>
            <Photo />
            {typePayment && user ? (
              <>
              <Box mt={5} pt={2} borderTop={2} borderColor="primary.main">
                <Typography
                  display={"block"}
                  variant="subtitle2"
                  gutterBottom={true}
                  color={"primary"}
                >
                  Forma de pagamento escolhida: <strong>{typePayment}</strong>
                </Typography>
                <Typography
                  display={"block"}
                  variant="subtitle2"
                  gutterBottom={true}
                  color={"primary"}
                >
                  Nome: <strong>{user.name} {user.lastName}</strong>
                </Typography>
                <Typography
                  display={"block"}
                  variant="subtitle2"
                  gutterBottom={true}
                  color={"primary"}
                >
                 Email: <strong>{user.email}</strong>
                </Typography>
                <Typography
                  display={"block"}
                  variant="subtitle2"
                  gutterBottom={true}
                  color={"primary"}
                >
                  CPF: <strong>{user.cpf}</strong>
                </Typography>
                <Typography
                  display={"block"}
                  variant="subtitle2"
                  gutterBottom={true}
                  color={"primary"}
                >
                  Celular: <strong>{user.phone}</strong>
                </Typography>
                </Box>
              </>
            ) : (
              ""
            )}
          </>
        );
      default:
        throw new Error("Erro, passo desconhecido");
    }
  }

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom align="center" color={"primary"}>
                  Parabéns, seu crédito foi aprovado.
                </Typography>
                <Typography
                  color={"primary"}
                  variant="h5"
                  gutterBottom
                  className={classes.response}
                  align="center"
                >
                  Obrigado por escolher a <strong>BoletoFlex</strong>
                </Typography>
                <Lottie options={defaultOptions} height={400} width={400} />;
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Voltar
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={typePayment === 'Boleto' || typePayment === 'Cartão' || !typePayment}
                  >
                    {activeStep === steps.length - 1 ? "Concluir" : "Próxima"}
                  </Button>
                </div>
              </>
            )}
          </>
        </Paper>
      </main>
    </>
  );
};

export default BoxCheckout;
