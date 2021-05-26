
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { DropzoneArea } from "material-ui-dropzone";
import Box from '@material-ui/core/Box'


const useStyles = makeStyles(() => ({
  dropzonearea: {
    maxWidth: 200,
    maxHeight: 200
  }
})); 

const Photo = () => {
  const classes = useStyles();
  


  return (
    <>
      <Box mb={3}>
      <Typography variant="subtitle1" align="center">
        Falta pouco, agora precisamos de uma selfie e uma foto do documento RG / CNH.
      </Typography>
      </Box>
      <DropzoneArea
        className={classes.dropzonearea}
        acceptedFiles={["image/*"]}
        filesLimit={2}
        dropzoneText={"Solte sua imagem ou clique aqui"}
        onChange={(file) => console.log("Arquivo carregado: ", file)}
        getFileAddedMessage={(message) => {
          const returnMessage = `Seu arquivo: ${message} foi adicionado com sucesso `;
          return returnMessage;
        }}
        getFileRemovedMessage={(message) => {
          const returnMessage = `Seu arquivo: ${message} foi deletado com sucesso `;
          return returnMessage;
        }}
        getDropRejectMessage={(message) => {
          const returnMessage = `Seu arquivo: ${message.name} foi rejeitado, verifique o tamanho ou certifique-se que é um arquivo imagem`;
          return returnMessage;
        }}
      />
    </>
  );
};

export default Photo;
