# REST API utilizando Angular, Nodejs y Oracle 
En este repositorio se alamacena el codigo utilizado en la Conferencia: "REST API" utilizando Nodejs como lenguaje Backend y Oracle como el gestor de Base de datos.

Para testear el funcionamiento de la API se utilizara Insomnia (Pero se puede utilizar cualquier API Client). Se utilizara Angular como un cliente para poder consumir la API REST.


## Requerimientos
* Nodejs 10.x.x ó superior.   [Instalar Nodejs](https://github.com/nodesource/distributions/blob/master/README.md)
    ```console
    ~$ node --version
    ```
    

* Angular 6 ó superior [Instalar Angular](https://cli.angular.io/)
    ```console
    ~$ ng version
    ```
* Oracle 11g o superior [Oracle 18c image Docker](https://hub.docker.com/r/ynraju4/oracle18c)
    ```sql
    select * from v$version where banner like 'Oracle%';
    ```
    * Librerias necesarias para poder conectar Oracle con Nodejs.[Instanclient](https://www.oracle.com/database/technologies/instant-client/downloads.html)


## Roadmap (Paso a paso)
    
* #### Paso 1: Creacion y configuracion del servidor Nodejs.
* #### Paso 2: Estructurar Carpetas del Servidor.
* #### Paso 3: Configuracion de la conexion con la Base de datos.
* #### Paso 4: Declaracion de las Librerias.
* #### Paso 5: Insertar en la Base de datos
* #### Paso 6: Obtener informacion de la Base de datos.
* #### Paso 7: Actualizar informacion de la Base de datos.
* #### Paso 8: Borrar informacion de la Base de datos