import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box'

const Form = ({ user, onSubmitUser }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    user = { ...user, [name]: value };
    onSubmitUser(user);
  };

  return (
    <>
    <Box mb={5}>
      <Typography variant="subtitle1" align="center">
        Preencha os dados para que possamos verificar sua disponibilidade de
        crédito. É rapidinho!
      </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            required
            id="firstName"
            name="name"
            label="Nome"
            fullWidth
            value={user.name}
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            required
            id="lastName"
            name="lastName"
            label="Sobrenome"
            value={user.lastName}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            required
            id="email"
            name="email"
            label="Email"
            value={user.email}
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          onChange={handleChange}
            id="cpf"
            name="cpf"
            label="CPF"
            required
            fullWidth
            value={user.cpf}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={handleChange}
            required
            id="phone"
            name="phone"
            label="Celular/Whatsapp"
            value={user.phone}
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Form;
