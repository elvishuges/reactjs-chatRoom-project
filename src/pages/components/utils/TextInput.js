import TextField from "@material-ui/core/TextField";
import { Input } from "@material-ui/core";


export default Input = () =>{
    
    <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              onChange={this.handleChange}
              label="Email Address"
              name="username"
              value={username}
              autoComplete="username"
              autoFocus
            />
}