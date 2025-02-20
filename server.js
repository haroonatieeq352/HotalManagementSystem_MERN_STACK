const express = require("express");

const app = express();
app.use(express.json()); 

require('./db'); // Import database configuration
const roomRoute = require('./routes/roomsRoute'); 


app.use('/api/rooms', roomRoute); // Use the rooms route for all requests to /api/rooms

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
