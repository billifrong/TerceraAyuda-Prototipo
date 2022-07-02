Primero que todo: Instalar Android Studio https://developer.android.com/studio
1. Instalar
2. Mientras esté en el asistente de instalación de Android Studio, asegúrese de que las casillas junto a todos los siguientes elementos estén marcadas: 
	Android SDK
	Android SDK Platform
	Android Virtual Device
3. Instale el SDK de Android: Una vez en Android Studio, pinche More Actions - SDK Manager. Seleccione Android 11. Luego en la esquina inferior derecha seleccione Show Package Details. Luego dirigase al apartado de Android 11 y verifique que esté marcado lo siguiente:
	Android SDK Platform 30
	Intel x86 Atom_64 System Image y si no se encuentra, instale Google APIs Intel x86 Atom System Image

----------------Opcional en caso de errores--------------------------------------------
4. Configure la variable de entorno ANDROID_HOME: 
	Abra el Panel de control de Windows.
	Haga clic en Cuentas de usuario, luego haga clic en Cuentas de usuario nuevamente
	Haga clic en Cambiar mis variables de entorno
	Haga clic en Nuevo... para crear una nueva ANDROID_HOME variable de usuario que apunte a la ruta a su SDK de Android ejemplo: C:\Users\bastian\AppData\Local\Android\Sdk
5. Agregue herramientas de plataforma a Path
	Abra el Panel de control de Windows.
	Haga clic en Cuentas de usuario, luego haga clic en Cuentas de usuario nuevamente
	Haga clic en Cambiar mis variables de entorno
	Seleccione Path.
	Haga clic en Editar.
	Haga clic en Nuevo y agregue la ruta a las herramientas de la plataforma a la lista. ejemplo: C:\Users\bastian\AppData\Local\Android\Sdk



Como funciona la App
1.	Para correr el código, se debe ejecutar una terminal y poner el comando expo start, en el caso que se requiera instalar alguna función ocupe el comando npm install.
2.	Una vez ejecutado el comando tiene 3 opciones 
	a.	Usar el localhost: presionando ‘W’
	b.	Tener el Android studio para ejecutarlo con emulador presionando ’A’
	c.	 Tener instalada la App de Expo Go y escanear el qr (https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es_CL&gl=US)
3. La base de datos es conectada a nuestras cuentas de Google. Por lo cual, al ser de caracter personal decidimos no compartir nuestras credenciales. De todas formas si necesita algun tipo de respaldo para que en el caso de que usted quisiera visualizar la base de datos, no dude en comentarnos. Email de contacto: benjamin.cortes.v@mail.pucv.cl - bastian.rodriguez.m@mail.pucv.cl - maximiliano.salinas.cabrera@mail.pucv.cl