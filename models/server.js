const express = require('express');
const cors = require('cors');

class Server {
    
    constructor(){
        this.app = express();

        this.port = process.env.PORT;

        this.paths = {
            auth:       '/api/auth/', 
            users:      '/api/users/',
            books:      '/api/books/',
            categories: '/api/categories/'
        } 

        // middlewares
        this.middlewares();
 
        // routes
        this.routes(); 
    }

    middlewares(){
        // CORS // CORS have to be the first middleware
        this.app.use(cors());

        // JSON PARSE
        this.app.use(express.json());
        
        // public directory
        this.app.use(express.static('public'));
    }

    routes(){ 
        this.app.use(this.paths.auth,       require('../routes/auth'));  
        this.app.use(this.paths.users,      require('../routes/users'));  
        this.app.use(this.paths.books,      require('../routes/books'));  
        this.app.use(this.paths.categories, require('../routes/categories'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("\nServers running on port", this.port,"\nLet's have fun !! \n");
        });
    }


}

module.exports = Server;