import "./styles.scss";
import { Button, TextField, Card, Checkbox } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function TodoList() {
  return (
    <div className="container-todo">
      <div>
        <div className="title">Lista de Tarefas</div>
        <div className="text-field-container">
          <div className="text-field">
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              label="Nova tarefa"
              variant="outlined"
            />
          </div>
          <div className="button">
            <Button>Adicionar tarefa</Button>
          </div>
        </div>
        <div className="card-container">
          <Card className="card">
            <Checkbox defaultChecked />
            <div>VOTAR NO MITO MITO</div>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Card>
        </div>
      </div>
    </div>
  );
}
