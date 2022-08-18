<div id="top"> </div>

<!---- PROJECT LOGO ----> 
<div align="center">

  <h2 align="center"> 
    Chatbox - Server API
  </h2>
  
  <p align="center">
    The Chatbox Server to authenticate and identify the user on GitHub, developed with Node.js <br/>
    Explore <a href="https://nodejs.org/en/docs/">Node.js</a> docs &#187; <br/> <br/>
    <a href="https://chatbox-server-production.up.railway.app/"> Deployment URL </a> &nbsp;•&nbsp;
    <a href="https://github.com/vihugoos/chatbox-server/issues"> Report Bug </a> &nbsp;•&nbsp;
    <a href="https://github.com/vihugoos/chatbox-server/issues"> Request Feature </a>
  </p>
</div>


<!---- TABLE OF CONTENTS ----> 
<details>
  <summary> Table of Contents </summary>
  <ol>
    <li>
      <a href="#about-the-project"> About The Project </a>
      <ul>
        <li><a href="#built-with"> Built With </a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started"> Getting Started </a>
      <ul>
        <li><a href="#prerequisites"> Prerequisites </a></li>
        <li><a href="#installation"> Installation </a></li>
      </ul>
    </li>
    <li><a href="#usage"> Usage </a></li>
    <li><a href="#contributing"> Contributing </a></li>
    <li><a href="#contact"> Contact </a></li>
  </ol>
</details>


<!---- THE PROJECT ---->
## About The Project

<img src="https://user-images.githubusercontent.com/44311634/178651138-54b1b11c-0776-48d0-8ec8-436671eeab48.png" align="center" align="center" alt="Project Home Page">
The Chatbox Server API to authenticate and identify the user on GitHub (using OAuth App), save the messages in the database and return the last 3 saved messages. 


### Built With 

<div style="display: inline_block">
    <!-- Icon Node.js --> 
    <a href="https://nodejs.org/en/"> 
      <img align="center" alt="Icon-Node.js" height="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"> 
    </a> &nbsp;
    <!-- Icon Yarn --> 
    <a href="https://yarnpkg.com/"> 
      <img align="center" alt="Icon-Yarn" height="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"> 
    </a> &nbsp;
    <!-- Icon TypeScript --> 
    <a href="https://www.typescriptlang.org/"> 
      <img align="center" alt="Icon-TypeScript" height="35" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"> 
    </a> &nbsp;
    <!-- Icon Prisma -->
    <a href="https://www.prisma.io/"> 
      <img align="center" alt="Icon-Prisma" height="35" src="https://user-images.githubusercontent.com/44311634/178335052-08bb4b29-c4da-4100-ae71-8b65cf6cd581.png"> 
    </a> &nbsp;
    <!-- Icon Socket.IO --> 
    <a href="https://socket.io/"> 
      <img align="center" alt="Icon-Socket.IO" height="35" src="https://user-images.githubusercontent.com/44311634/185236383-1c8c6abb-bb45-4505-a382-81f1d6eb3a1d.png"> 
    </a> &nbsp;
    <!-- Icon PostgreSQL --> 
    <a href="https://www.postgresql.org/"> 
      <img align="center" alt="Icon-PostgreSQL" height="38" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"> 
    </a> &nbsp;
    <!-- Icon Express --> 
    <a href="https://expressjs.com/"> 
      <img align="center" alt="Icon-Express" height="35" src="https://user-images.githubusercontent.com/44311634/178337147-61b1e696-b4ef-4f78-8151-c3fb2597050a.png"> 
    </a> 
    <!-- Icon Axios -->
    <a href="https://axios-http.com/"> 
      <img align="center" alt="Icon-Axios" height="55" src="https://user-images.githubusercontent.com/44311634/178089407-0176462e-7e60-4f4f-9ad8-5429a22b2c5c.png"> 
    </a>
</div>

<br/>
<br/>


<!---- GETTING STARTED ----> 
## Getting Started

To get started, you need to have <strong>Node.js 16+</strong> installed on your machine, for more information visit <a href="https://nodejs.org/en/download/"> Node.js Downloads</a>. You will also need to have <strong>PostgreSQL</strong> installed, for more information visit <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads"> PostgreSQL Downloads</a>. 

<strong>WARNING</strong>: Add PostgreSQL executable path to user <strong>environment variables</strong>, to be able to use the `psql` command in the terminal, or create a database called `chatbox` via graphical user interface using the pgAdmin, it's up to you what you think is best. <strong>Note:</strong> This installation guide is based on Windows systems. 


### Prerequisites 

First of all, we need to ensure that the database server is running, to do so, run the following commands in case you haven't created the database manually via pgAdmin, as mentioned above, if you have already created the database `chatbox`, just run the first command below. 

1. Open cmd terminal as <strong>administrator</strong> (<i>looking at psql version, in this case 14</i>)
   ```cmd
   net start postgresql-x64-14
   ```
2. Connect with psql 
   ```cmd
   psql -U postgres
   ```
3. Create a database 
   ```cmd
   CREATE DATABASE chatbox;
   ```
4. Quit psql 
   ```cmd
   \q
   ```

You will need to create a new OAuth App to authenticate with GitHub.

* On your GitHub profile, in <strong>Settings > Developer Settings > OAuth Apps > New OAuth App</strong>, create a new app  
  <br/> 
  <div align="center">
    <img align="center" alt="Auth-Tokens" src="https://user-images.githubusercontent.com/44311634/185431006-e57002a0-7fb5-4e89-96ab-044b8c320e66.jpg"> 
  </div>
  <br/>


### Installation 

1. Clone the repo 
   ```bash
   git clone https://github.com/vihugoos/chatbox-server.git
   ```
2. Inside the project root directory install all project dependencies 
   ```cmd
   yarn install
   ```
3. Create an `.env` file with the database connection configuration (don't forget to change the password) 
   ```cmd
   echo "DATABASE_URL='postgresql://postgres:yourPassword@localhost:5432/chatbox?schema=public'" > .env 
   ``` 
4. Include in the `.env` your OAuth Client ID of the OAuth we created
   ```cmd
   echo "GITHUB_CLIENT_ID=yourOAuthID" >> .env 
   ```
   <div align="center">
     <img align="center" alt="Auth-Tokens" src="https://user-images.githubusercontent.com/44311634/185434210-637475e7-17ac-4aea-a0c9-d88be20767b4.jpg"> 
   </div>
   <br/>
5. Include the client secret  
   ```cmd
   echo "GITHUB_CLIENT_SECRET=yourClientSecret" >> .env 
   ``` 
   <div align="center">
     <img align="center" alt="Auth-Tokens" src="https://user-images.githubusercontent.com/44311634/185438517-9a45f03e-c859-4c2e-aa01-69691e91f4d1.jpg"> 
   </div>
   <br/>
6. Include anywhere JWT key  
   ```cmd
   echo "JWT_SECRET=be6442cf487fa75ec9ed3788e57cbd4a" >> .env 
   ``` 
7. Run the migrate 
   ```cmd
   yarn prisma migrate dev
   ```


<!---- USAGE EXAMPLES ----> 
## Usage

With the installation complete, we can start the project.

* Starting the project 
   ```bash
   yarn run dev  
   ```
   
* To view the database feedback table in an easy and intuitive way, just use Prisma Studio
  ```
  yarn prisma studio 
  ```
<br/>

<!---- CONTRIBUTING ---->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
<br/> <br/>


<!---- CONTACT ---->
## Contact

Developer @vihugoos - victorhugoos@live.com 

<p align="right"><a href="#top"> &#129045; back to top </a></p> 
